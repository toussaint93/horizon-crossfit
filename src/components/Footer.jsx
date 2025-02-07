import "./FooterStyles.css";
import {
  FaFacebook,
  FaMailBulk,
  FaPhone,
  FaInstagram,
  FaSearchLocation,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <h3>1313 Paradise Drive</h3>
              <h3>Calgary Alberta, T7D- 0G1</h3>
            </div>
          
          <div className="phone">
            <h3>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              +1-403-009-8787
            </h3>
          </div>
        </div>
        < div className="email">
          <h3>
            <FaMailBulk
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            info@horizonfitnes.ca
          </h3>
        </div>
        </div>
        <div className="right">
          
          <h4>
          <p>A message from Tanner</p>
            Welcome to Horizon CrossFit! I am Tanner Birch, founder of Horizon
            CrossFit, and I am here to challenge you to take that first step
            toward something greater. Here, it is more than just fitness—it is
            about learning, growing, and pushing past limits you never thought
            possible. Whether you are seeking purpose, fulfillment, passion, or
            competition, you will find it within these walls. Your journey to
            something more lies beyond your first rep. <p>Tanner
            Birch | Founder | Coach</p>
          </h4>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "ffffff", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
