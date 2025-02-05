import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";
import { NotifContext } from "../../context/notifContext";
import PropTypes from "prop-types";

const MainLayout = (props) => {
  const { children } = props;
  const { msg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme.name}`}>
      {/* navbar start */}
      <Navbar />
      {/* navbar end */}
      <div className="w-screen">
        {isLoading && (
          <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
        )}
        {msg && (
          <CustomizedSnackbars
            severity={msg.severity}
            message={msg.desc}
            open={open}
            setOpen={setOpen}
          />
        )}
        {/* header start */}
        <Header />
        {/* header end */}
        {/* content start */}
        <main className="px-6 py-4">{children}</main>
        {/* content end */}
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
