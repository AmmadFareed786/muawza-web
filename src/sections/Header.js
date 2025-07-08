import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoIcon from "../images/Logo.png";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Inject media styles for mobile
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @media (max-width: 768px) {
        .nav-desktop {
          display: none !important;
        }
        .nav-mobile-toggle {
          display: block !important;
        }
        .nav-mobile-menu {
          display: flex !important;
        }
        .social-desktop {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // Scroll + navigate
  const handleScrollOrNavigate = (sectionId) => {
    const scrollToSection = () => {
      const target = document.getElementById(sectionId);
      if (target) {
        const headerOffset = window.innerWidth <= 768 ? 250 : 60; // adjust if needed
        const elementPosition =
          target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      // Use a longer delay to allow route and DOM to load fully
      setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }

    setMenuOpen(false);
  };

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img src={logoIcon} alt="Muawza Logo" style={styles.logoImage} />
        <span style={styles.logoText}>Muawza</span>
      </div>

      {/* Hamburger Icon */}
      <div
        className="nav-mobile-toggle"
        style={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Desktop Nav */}
      <nav className="nav-desktop" style={styles.nav}>
        <span
          style={styles.link}
          onClick={() => handleScrollOrNavigate("hero")}
        >
          Home
        </span>
        <span
          style={styles.link}
          onClick={() => handleScrollOrNavigate("about")}
        >
          About
        </span>
        <span
          style={styles.link}
          onClick={() => handleScrollOrNavigate("features")}
        >
          Services
        </span>
        <span
          style={styles.link}
          onClick={() => handleScrollOrNavigate("download")}
        >
          Download
        </span>
      </nav>

      {/* Desktop Social */}
      <div className="social-desktop" style={styles.social}>
        <a
          href="https://pk.linkedin.com/company/amphersoft"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.socialLink}
        >
          <FaLinkedin size={20} color="#0A66C2" />
        </a>
        <span style={styles.separator}>|</span>
        <a href="tel:+1234567890" style={styles.socialLink}>
          0900 78601
        </a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={menuRef} style={styles.mobileMenuContainer}>
          <nav className="nav-mobile-menu" style={styles.navMobile}>
            <span
              style={styles.link}
              onClick={() => handleScrollOrNavigate("hero")}
            >
              Home
            </span>
            <span
              style={styles.link}
              onClick={() => handleScrollOrNavigate("about")}
            >
              About
            </span>
            <span
              style={styles.link}
              onClick={() => handleScrollOrNavigate("features")}
            >
              Services
            </span>
            <span
              style={styles.link}
              onClick={() => handleScrollOrNavigate("download")}
            >
              Download
            </span>
          </nav>
          <div className="social-mobile" style={styles.socialMobile}>
            <a
              href="https://pk.linkedin.com/company/amphersoft"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              LinkedIn
            </a>
            <span style={styles.separator}>|</span>
            <a href="tel:+1234567890" style={styles.socialLink}>
              0900 78601
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    background: "#00c3c3",
    borderBottom: "1px solid #eee",
    padding: "1rem 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000,
    flexWrap: "wrap",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoImage: {
    width: "32px",
    height: "32px",
    objectFit: "contain",
  },
  logoText: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1.1rem",
    padding: "0.4rem 0",
    cursor: "pointer",
  },
  social: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
  socialLink: {
    color: "#ffffff",
    fontSize: "1rem",
    textDecoration: "none",
  },
  separator: {
    color: "#ffffff",
    fontSize: "1rem",
  },
  hamburger: {
    fontSize: "1.8rem",
    color: "#fff",
    cursor: "pointer",
    display: "none",
  },
  mobileMenuContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
    gap: "0.8rem",
  },
  navMobile: {
    display: "none",
    flexDirection: "column",
    gap: "0.5rem",
    textAlign: "left",
  },
  socialMobile: {
    display: "flex",
    justifyContent: "center",
    gap: "0.8rem",
    flexWrap: "wrap",
  },
};

export default Header;
