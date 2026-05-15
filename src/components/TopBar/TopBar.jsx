import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top-info-bar">
      <div className="container">
        <div className="top-info-bar-inner">
          <div className="top-info-item">
            <img src="/assets/img/icon/email.svg" alt="Email" />
            <Link to="mailto:grandperformante@gmail.com">
              grandperformante@gmail.com
            </Link>
          </div>
          <div className="top-info-item">
            <img src="/assets/img/icon/location.svg" alt="Location" />
            <span>Dehiwala, Colombo, Sri Lanka</span>
          </div>
          <div className="top-info-item">
            <img src="/assets/img/icon/calender.svg" alt="Hours" />
            <span>Mon - Sat: 7:00 AM - 8:00 PM</span>
          </div>
          <div className="top-info-item">
            <img src="/assets/img/icon/phone.svg" alt="Phone" />
            <Link to="tel:+94771199991">+94 77 119 9991</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
