import React from "react";
import reactLogo from "../../assets/react.svg";
import { useAuth } from "../../providers/SecurityProvider";
import UserService from "../../services/user.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/paths";

const HomePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleCheckApi = async () => {
    try {
      await UserService.CheckAuth();
      toast.success("Você está autenticado", { position: "bottom-left" });
    } catch (err) {
      toast.error("Usuário não autenticado.");
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="w-28 h-28" alt="React logo" />
      </a>

      <span className="mt-8">
        Olá, {user?.given_name}, você está no ambiente STG
      </span>

      <button className="mt-2" onClick={logout}>
        Logout
      </button>

      <button className="mt-2" onClick={() => navigate(ROUTES.ebook)}>
        APP
      </button>

      <button className="mt-2" onClick={handleCheckApi}>
        Autenticar
      </button>
    </div>
  );
};

export default HomePage;
