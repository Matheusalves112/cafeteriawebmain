import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
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
        {/* O Outlet renderiza a página correspondente à rota */}
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 Cafeteria Web. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
