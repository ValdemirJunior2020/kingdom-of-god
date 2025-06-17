import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Kingdom</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/gospel">Gospel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/identity">Identity</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mission">Mission</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-warning fw-bold"
                href="https://hope-step.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🆘 Get Help
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
