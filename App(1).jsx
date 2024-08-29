import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* Este componente renderizará as rotas filhas */}
    </div>
  );
}

export default App;
