import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./style.css";

export default function Header() {
  const reserveSize = useSelector((state) => state.reserve.length);

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} title="home" alt="Logo Projeto" />
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span title="Clique para ver suas reservas">
            {reserveSize} reservas
          </span>
        </div>
      </Link>
    </header>
  );
}
