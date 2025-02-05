import { Link } from "react-router-dom";
import Logo from "../Elements/Logo";
import { useContext } from "react";
import { NotifContext } from "../../context/notifContext";
import { useTheme } from "../../context/themeContext"; // Import useTheme
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";
import PropTypes from "prop-types";
import * as motion from "motion/react-client";

const AuthLayout = (props) => {
  const { children, type } = props;
  const { msg, open, setOpen, isLoading, setIsLoading } =
    useContext(NotifContext);
  const { isDarkMode, toggleThemeMode } = useTheme(); // Use theme context

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-special-mainBg"
      }`}
    >
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
      {/* container start */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <Logo />
        <div className="mt-12">{children}</div>

        {type !== "forgot password" && (
          <>
            <div className="my-9 px-7 flex justify-center text-xs items-center flex-col relative">
              <div className="border border-gray-05 w-full"></div>
              <div
                className={`px-2 absolute ${
                  isDarkMode ? "bg-gray-900 text-gray-300" : "bg-special-mainBg text-gray-700"
                }`}
              >
                or sign in with
              </div>
            </div>
            <div className="mb-8">
              <button
                className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-05 text-gray-01"
                type="button"
              >
                <span>Continue with Google</span>
              </button>
            </div>
          </>
        )}

        {type !== "forgot password" && (
          <div className="flex justify-center">
            {type === "sign up" ? (
              <>
                <span className="text-sm text-gray-03">
                  Already have an account?&nbsp;
                </span>
                <Link to="/login" className="text-primary text-sm font-bold">
                  Sign In Here
                </Link>
              </>
            ) : (
              <Link to="/register" className="text-primary text-sm font-bold">
                Create an account
              </Link>
            )}
          </div>
        )}
        {type !== "forgot password" && type !== "sign up" && (
          <div className="text-center mt-2">
            <Link to="/forgot-password" className="text-sm text-gray-03 font-bold">
              Forgot Password
            </Link>
          </div>
        )}

        {/* Dark Mode Toggle */}
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleThemeMode}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              isDarkMode ? "bg-blue-600" : "bg-gray-200"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className={`h-5 w-5 ${
                isDarkMode ? "text-white" : "text-gray-500"
              }`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default AuthLayout;
