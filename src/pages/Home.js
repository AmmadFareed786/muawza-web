import React from "react";
import mainPage from "../images/Hand.png";

function Home() {
  return (
    <section id="hero" style={styles.section}>
      {/* App Image */}
      <div style={styles.imageColumn}>
        <img src={mainPage} alt="Muawza App Screenshot" style={styles.image} />
      </div>

      {/* Text Content */}
      <div style={styles.textColumn}>
        <h1 style={styles.heading}>Welcome to Muawza</h1>
        <p style={styles.paragraph}>
          Muawza is your one-stop solution for finding reliable, professional
          service providers near you. Whether you need help with home
          maintenance, cleaning, personal care, or other essential services,
          we’ve made it simple and convenient to connect with trusted vendors,
          all at your fingertips.
          <br />
          <br />
          Explore services easily using our search bar, find electricians,
          plumbers, beauticians, and more. Swipe through the horizontal service
          scroller to browse categories. Discover trusted vendors in the
          featured profiles section and scroll vertically to explore more.
          <br />
          <br />
          Our “Near Me” feature shows vendors based on your selected category
          and location. Whether you need a plumber, electrician, or cleaner,
          Muawza helps you quickly find nearby professionals, fast, reliable,
          and convenient.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    maxWidth: "1200px",
    margin: "auto",
    flexWrap: "wrap", // Stack on mobile
    padding: "5rem 1rem",
    // scrollMarginTop: "230px",
  },
  imageColumn: {
    flex: "1 1 300px",
    textAlign: "center",
    marginBottom: "2rem",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  textColumn: {
    flex: "1 1 300px",
    padding: "1rem 2rem",
  },
  heading: {
    fontSize: "2.9rem",
    marginBottom: "1rem",
    color: "#00c3c3",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "1.2rem",
    textAlign: "justify",
    color: "#333",
    lineHeight: 1.8,
  },
};

export default Home;
