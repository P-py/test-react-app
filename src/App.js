import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoList from './pages/TodoList/TodoList';
import ClickCounter from './pages/ClickCounter/ClickCounter';
import TicTacToe from './pages/TicTacToe/TicTacToe';
import Calculator from './pages/Calculator/Calculator';
import CepFinder from './pages/CepFinder/CepFinder';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/contador" element={<ClickCounter />} />
            <Route path="/jogo-da-velha" element={<TicTacToe />} />
            <Route path="/calculadora" element={<Calculator />} />
            <Route path="/cep" element={<CepFinder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;