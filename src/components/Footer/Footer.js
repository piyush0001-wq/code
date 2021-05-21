import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
      <footer>
        <div className="top">
          <div className="line"></div>
          <div className="icon">
            <p><i class="fas fa-paw"></i></p>
          </div>
          <div className="line"></div>
        </div>


        <div className="newsletter">
          <div className="left">
            <h3>Subscribe Paws!</h3>
            <p>Subscribe to our monthly newsletter</p>
          </div>
          <div className="input">
            <input type="text" placeholder="Your email..." />
            <button>Send</button>
          </div>
          <div className="right_social_handlers">
            <p><i className="fab fa-instagram"></i></p>
            <p><i className="fab fa-twitter"></i></p>
            <p><i className="fab fa-facebook-f"></i></p>
            <p><i className="fab fa-linkedin-in"></i></p>
          </div>
        </div>
        <div className="main_links">
          <div className="contact">
            <h3>Contact</h3>
            <p><i class="fas fa-phone"></i><span>+91 1234567892</span></p>
            <p><i class="fas fa-map-marker-alt"></i><span>C-1536, Sushant Lok Phase 1,  Haryana 122022</span></p>
            <p><i class="fas fa-envelope"></i><span>example@gmail.com</span></p>
          </div>
          <div className="About">
            <h3>About</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Pet Care Guide</p>
          </div>
          <div className="Service">
            <h3>Services</h3>
            <p>Blog</p>
            <p>Infographics</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
          <div className="reach_us">
            <h3>Reach Us</h3>
            <div></div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer
