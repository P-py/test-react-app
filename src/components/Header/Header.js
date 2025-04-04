import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>React Multi App</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">To-Do List</Link></li>
          <li><Link to="/contador">Contador de Cliques</Link></li>
          <li><Link to="/jogo-da-velha">Jogo da Velha</Link></li>
          <li><Link to="/calculadora">Calculadora</Link></li>
          <li><Link to="/cep">Buscador de CEP</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;