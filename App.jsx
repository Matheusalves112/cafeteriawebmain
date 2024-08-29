import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet /> {/* Renderiza as rotas filhas aqui */}
      </main>
      <footer>
        {/* Rodapé */}
      </footer>
    </div>
  );
}

export default App;
