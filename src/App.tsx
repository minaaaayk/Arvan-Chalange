import React from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthStore } from "store";
import { DashBoard } from "./components/DashBoard";
import { Path } from "./constants/Path";

function App() {
  toast.configure();
  const { isLogin } = useAuthStore();
  return isLogin() ? <DashBoard /> : <Redirect to={Path.login} />;
}

export default App;
