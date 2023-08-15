import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import "./Footer.scss";
import Payment from "../../assets/payments.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Welcome to Shopper'sHub! We're thrilled to have you here and
            introduce you to a world of endless possibilities in online
            shopping. At Shopper'sHub, we believe that shopping is more than
            just acquiring products – it's an experience, a journey, and a way
            to express yourself. We've crafted this platform with utmost care,
            blending innovation, convenience, and a touch of magic to create an
            online shopping destination like no other. <button className="read-more" ><Link to="/about">Read More</Link></button>
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              192 Sector-11, Green Park, Noida, Uttar Pradesh 900024
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 9004275960</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: xyz@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Electronics</span>
          <span className="text">Jewellery</span>
          <span className="text">Men's Clothing</span>
          <span className="text">Women's Clothing</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returs</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            Shopper'sHub.com | Created by Rajdeep Mitra | Copyright &copy; 2023
          </div>
          <img src={Payment} alt="payment_partners_img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
