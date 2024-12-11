import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <div id="header">
    <nav className="py-2 bg-dark border-bottom">
    <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link link-light px-2 active" aria-current="page">Početna</Link>
            </li>
            <li className="nav-item">
                <Link to="/products" className="nav-link link-light px-2">Proizvodi</Link>
            </li>
            <li className="nav-item">
                <Link to="/faq" className="nav-link link-light px-2">Česta pitanja</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link link-light px-2">O nama</Link>
            </li>
        </ul>
        <ul className="nav">
            <li className="nav-item">
                <Link to="/cart" className="nav-link link-light px-2">Korpa</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link link-light px-2">Prijava</Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="nav-link link-light px-2">Registracija</Link>
            </li>
        </ul>
    </div>
</nav>
<header className="py-3 mb-4 border-bottom bg-light">
    <div className="container d-flex flex-wrap justify-content-center">
        <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <span className="fs-4">Cortex-Commerce</span>
        </Link>
        <SearchForm />
    </div>
</header>
      </div>
  );
}

export default Header;
