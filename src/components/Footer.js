import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="mb-0">
        © {new Date().getFullYear()} Gospel of the Kingdom. All rights reserved.
      </p>
      <small>Empowered by the Spirit. Living for the King.</small>
    </footer>
  );
};

export default Footer;
