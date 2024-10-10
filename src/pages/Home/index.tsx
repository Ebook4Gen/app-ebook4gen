import React from "react";
import reactLogo from "../../assets/react.svg";
import { useAuth } from "../../providers/SecurityProvider";

const HomePage: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="w-28 h-28" alt="React logo" />
      </a>

      <span className="mt-8">Olá, {user?.given_name}</span>

      <button className="mt-2" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
