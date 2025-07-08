import React from "react";

function DownloadSection() {
  const styles = {
    section: {
      minHeight: "90vh",
      background: "linear-gradient(to right, #00c3c3, #007b7b)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      padding: "2rem",
      textAlign: "center",
      // scrollMarginTop: "250px",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
    },
    subText: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
      maxWidth: "600px",
      lineHeight: "1.6",
    },
    button: {
      backgroundColor: "#fff",
      color: "#00c3c3",
      padding: "1rem 2rem",
      borderRadius: "50px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      textDecoration: "none",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s ease-in-out",
    },
    buttonHover: {
      backgroundColor: "#e0fafa",
      transform: "scale(1.05)",
    },
    playStoreButton: {
      display: "inline-block",
      textDecoration: "none",
      transition: "transform 0.2s ease-in-out",
    },
    playStoreImage: {
      height: "50px",
      objectFit: "contain",
      transition: "opacity 0.3s ease",
    },
  };

  return (
    <section id="download" style={styles.section}>
      <h2 style={styles.heading}>Get the Muawza App</h2>
      <p style={styles.subText}>
        Discover trusted vendors for home, auto, and personal services right at
        your fingertips. Download the Muawza app and find nearby professionals
        instantly!
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=com.yourapp.package" // replace with your actual URL
        target="_blank"
        rel="noopener noreferrer"
        style={styles.playStoreButton}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          style={styles.playStoreImage}
        />
      </a>
    </section>
  );
}

export default DownloadSection;
