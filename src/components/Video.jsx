import "./VideoStyles.css";
import { Link } from "react-router-dom";
import Ropes from "../assets/Ropes.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Ropes} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Welcome to Horizon Crossfit!</h1>
        <p>
          Your Journey to a healthier, more fufilled, and purposful life begins
          here!</p>

        <div>
          <Link to="/Contact" className="btn">
            Locations
          </Link>
          <Link to="/Classes" className="btn btn-light">
            Classes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
