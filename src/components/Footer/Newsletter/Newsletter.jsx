import "./Newsletter.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <div className="small-text">Newsletter</div>
        <div className="big-text">
          Subscribe for the latest updates and offers.
        </div>
        <div className="form">
          <input type="email" placeholder="Enter email address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our privacy policy.
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14}/>
          </div>
          <div className="icon">
            <FaTwitter size={14}/>
          </div>
          <div className="icon">
            <FaInstagram size={14}/>
          </div>
          <div className="icon">
            <FaLinkedinIn size={14}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
