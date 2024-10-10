import React, { useTransition } from "react";
import reactLogo from "../../assets/react.svg";
import { useAuth } from "../../providers/SecurityProvider";
import UserService from "../../services/user.service";
import { toast } from "react-toastify";

const HomePage: React.FC = () => {
  const [loading, startTransition] = useTransition();
  const { user, logout } = useAuth();

  const handleCheckApi = () => {
    try {
      startTransition(async () => {
        await UserService.CheckAuth();
        toast.success("Você está autenticado", { position: "bottom-left" });
      });
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

      <span className="mt-8">Olá, {user?.given_name}</span>

      <button className="mt-2" onClick={logout}>
        Logout
      </button>

      {!loading && (
        <button className="mt-2" onClick={handleCheckApi}>
          Autenticar
        </button>
      )}
    </div>
  );
};

export default HomePage;
