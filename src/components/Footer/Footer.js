import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} React Multi App</p>
        <p>Projeto desenvolvido como exercício de React</p>
      </div>
    </footer>
  );
}

export default Footer;