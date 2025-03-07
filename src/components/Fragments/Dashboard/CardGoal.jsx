import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "../../Elements/Card";
import { Icon } from "../../Elements/Icon";
import CompositionExample from "../../Elements/GaugeChart";
import { NotifContext } from "../../../context/notifContext";
import { AuthContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";

const CardGoal = () => {
  const { setOpen, setMsg } = useContext(NotifContext);
  const { name, setName, setIsLoggedIn } = useContext(AuthContext); // Menggunakan name dari AuthContext
  const navigate = useNavigate();

  const [goals, setGoals] = useState({ presentAmount: 0, targetAmount: 0 });
  const [isLoading, setIsLoading] = useState(true); // State untuk loader animation
  const chartValue =
    goals.targetAmount > 0
      ? (goals.presentAmount * 100) / goals.targetAmount
      : 0; // Menghindari pembagian dengan nol

  const getData = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      setIsLoading(true); // Tampilkan loader saat data sedang diambil

      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/goals",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      setGoals({
        presentAmount: response.data.data[0].present_amount,
        targetAmount: response.data.data[0].target_amount,
      });

      // Jika username disediakan dari response, set nama pengguna
      if (response.data && response.data.username) {
        setName(response.data.username); // Menyimpan username di AuthContext
      }

      setIsLoading(false); // Sembunyikan loader saat data sudah diambil
    } catch (error) {
      setIsLoading(false); // Sembunyikan loader meskipun terjadi error
      if (error.response) {
        if (error.response.status === 401) {
          setOpen(true);
          setMsg({
            severity: "error",
            desc: "Session Has Expired. Please Login.",
          });

          setIsLoggedIn(false);
          setName("");
          localStorage.removeItem("refreshToken");
          navigate("/login");
        } else {
          console.error(error.response);
        }
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card
      title="Goals"
      desc={
        <div className="p-2">
          {isLoading ? ( // Tampilkan animasi loader saat isLoading true
            <div className="flex justify-center items-center h-40">
              <div className="loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between">
                <div className="flex">
                  <span className="text-2xl font-bold me-4 self-center">
                    ${goals.presentAmount}
                  </span>
                  <div className="p-2 bg-gray-05 rounded-md box-border">
                    <Icon.Edit />
                  </div>
                </div>
                <div>Welcome, {name || "User"}</div> {/* Menampilkan username */}
              </div>
              <div className="border-b-2 my-4"></div>
              <div className="flex justify-between">
                <div>
                  <div className="flex mt-3 mb-10">
                    <div>
                      <Icon.Award />
                    </div>
                    <div className="ms-2">
                      <span className="text-gray-02">Target Achieved</span>
                      <br />
                      <span className="font-bold text-xl">
                        ${goals.targetAmount}
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <Icon.Target />
                    </div>
                    <div className="ms-2">
                      <span className="text-gray-02">This Month Target</span>
                      <br />
                      <span className="font-bold text-xl">
                        ${goals.presentAmount}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ms-4 text-center">
                  <CompositionExample desc={chartValue} />
                  <div className="flex justify-between">
                    <span className="text-gray-03">$0</span>
                    <span className="font-bold text-2xl">12K</span>
                    <span className="text-gray-03">$20K</span>
                  </div>
                  <div className="mt-2">Target vs Achievement</div>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};

export default CardGoal;
