import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div class="container">
    <div class="footer-content">
      <p>© 2025 Mehndi Fancy All Rights Reserved.</p>
      <nav class="footer-links">
        <a href="/privacy">Privacy Policy</a> |
        <a href="/terms">Terms of Service</a> |
        <a href="/contact">Contact Us</a> |
        <a href="/sitemap">Sitemap</a>
      </nav>
      <div class="social-links">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
      <p>Powered by <a href="https://exampleplatform.com">VIRTUAL RX</a></p>
    </div>
  </div>
  )
}

export default Footer
