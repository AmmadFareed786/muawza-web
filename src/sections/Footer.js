import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    "Plumber Services",
    "Cleaning Services",
    "Electrician Services",
    "Mechanic Services",
    "Painter Services",
    "Carpenter Services",
    "Construction Services",
    "Pest Control",
    "Interior Design",
    "Gardening Services",
  ];

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <>
      <footer style={styles.container} className="footer-container">
        {/* About */}
        <div style={styles.column} className="footer-about">
          <div style={styles.heading}>About Muawza</div>
          <p style={{ textAlign: "justify" }}>
            Muawza is your trusted service marketplace, designed to connect you
            with skilled local professionals—fast and hassle-free. Whether you
            need a plumber, electrician, carpenter, or other home services,
            Muawza helps you find and manage verified vendors in your area.
          </p>
        </div>

        <div className="footer-row">
          {/* Main Services */}
          <div style={styles.column} className="footer-services">
            <div style={styles.heading}>Main Services</div>
            {visibleServices.map((service, index) => (
              <div key={index} style={styles.listItem}>
                {service}
              </div>
            ))}

            <button
              onClick={() => setShowAll(!showAll)}
              style={styles.toggleButton}
            >
              {showAll ? "Show Less ▲" : "Show More ▼"}
            </button>
          </div>

          {/* Connect with us */}
          <div style={styles.column} className="footer-connect">
            <div style={styles.heading}>Connect with us</div>
            <div style={styles.iconRow}>
              <span role="img" aria-label="call">
                📞
              </span>
              &nbsp;0900 78601
            </div>
            <div style={styles.iconRow}>
              <FaLinkedin
                size={20}
                color="#0A72B1"
                style={{ marginRight: 8 }}
              />
              <a
                href="https://pk.linkedin.com/company/amphersoft"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div style={styles.copyright}>
        <span>© 2025 Muawza.com (pvt) Ltd. </span>
        <Link to="/privacy-policy" style={{ color: "#00c3c3", marginLeft: 8 }}>
          Privacy Policy
        </Link>
      </div>

      {/* Media Queries */}
      <style>{`
        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-about {
          width: 100%;
        }

        .footer-row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-services, .footer-connect {
          flex: 1 1 45%;
        }

        .footer-store {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .footer-container {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .footer-about {
            flex: 0 1 40%;
          }

          .footer-row {
            flex: 0 1 50%;
            display: flex;
            justify-content: space-between;
          }

          .footer-services,
          .footer-connect {
            flex: 1 1 45%;
          }

          .footer-store {
            flex: 0 1 220px;
            justify-content: flex-start;
            align-items: flex-start;
            padding-top: 0;
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: "#00c3c3",
    color: "#fff",
    padding: "40px 2.1rem",
  },
  column: {
    minWidth: "200px",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  listItem: {
    marginBottom: "0.5rem",
    cursor: "pointer",
  },
  iconRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  storeButtons: {
    marginTop: "1rem",
  },
  storeImg: {
    height: "40px",
  },
  toggleButton: {
    background: "#fff",
    color: "#00c3c3",
    padding: "6px 12px",
    fontSize: "0.8rem",
    fontWeight: "500",
    borderRadius: "6px",
    border: "none",
    marginTop: "10px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  copyright: {
    backgroundColor: "#f1f1f1",
    padding: "15px 2rem",
    fontSize: "0.9rem",
    color: "#333",
    marginTop: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

export default Footer;
