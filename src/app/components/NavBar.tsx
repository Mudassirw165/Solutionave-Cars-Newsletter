import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>
          Product <span>&#x25BE;</span>
        </li>
        <li>
          Solutions <span>&#x25BE;</span>
        </li>
        <li>
          Pricing <span>&#x25BE;</span>
        </li>
        <li>
          Resources <span>&#x25BE;</span>
        </li>
        <li>
          Company <span>&#x25BE;</span>
        </li>
        <li>
          Careers <span>&#x25BE;</span>
        </li>
      </ul>
      <button>Get Started</button>
    </nav>
  );
};

export default NavBar;
