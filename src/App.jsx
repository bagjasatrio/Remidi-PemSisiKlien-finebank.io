import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/forgotPw";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensePage from "./pages/expense";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import GoalPage from "./pages/goal";
import PropTypes from "prop-types"; // Import PropTypes

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  // Add PropTypes validation
  RequireAuth.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth> <DashboardPage /> </RequireAuth>,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/balance",
      element: <RequireAuth> <BalancePage /> </RequireAuth>,
    },
    {
      path: "/goal",
      element: <RequireAuth> <GoalPage /> </RequireAuth>,
    },
    {
      path: "/expense",
      element: <RequireAuth> <ExpensePage /> </RequireAuth>,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
