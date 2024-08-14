import React from 'react';
import '../Styles/Footer.css'; // Import the corresponding CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 ElectroStore. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="/">Privacy Policy</a></li>
        <li><a href="/">Terms of Service</a></li>
        <li><a href="/">Contact Us</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
