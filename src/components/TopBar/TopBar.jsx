import { Link } from "react-router-dom";

const iconColor = "#ff3d24";

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,6 12,13 2,6" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="12,6 12,12 16,14" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TopBar = () => {
  return (
    <div className="top-info-bar">
      <div className="container">
        <div className="top-info-bar-inner">
          <div className="top-info-item">
            <EmailIcon />
            <Link to="mailto:grandperformante@gmail.com">
              grandperformante@gmail.com
            </Link>
          </div>
          <div className="top-info-item">
            <LocationIcon />
            <span>Dehiwala, Colombo, Sri Lanka</span>
          </div>
          <div className="top-info-item">
            <ClockIcon />
            <span>Mon - Sat: 7:00 AM - 8:00 PM</span>
          </div>
          <div className="top-info-item">
            <PhoneIcon />
            <Link to="tel:+94771199991">+94 77 119 9991</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
