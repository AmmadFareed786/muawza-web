import React from "react";
import aboutImage from "../images/profile.png";

const AboutSection = () => {
  return (
    <section id="about" style={styles.wrapper}>
      {/* Top Heading */}
      <h2 style={styles.title}>About Muawza</h2>
      <p style={styles.subtitle}>
        Muawza connects you with trusted local service providers.
      </p>

      {/* Two-Column Content */}
      <div style={styles.content}>
        {/* Text Card */}
        <div style={styles.card}>
          {/* <h3 style={styles.cardTitle}>
            We’re here to get as many people{" "}
            <span style={styles.highlight}>moving</span> as possible.
          </h3> */}
          <p style={styles.paragraph}>
            Muawza is a smart service marketplace designed to connect users with
            trusted local professionals across various categories such as
            plumbing, electrical work, cleaning, and more. We make it easy to
            discover reliable service providers near you, with a clean, user
            friendly interface and support for both English and Urdu.
          </p>
          <p style={styles.paragraph}>
            With a growing network of verified vendors, Muawza helps users find
            the right service professionals based on category and location,
            without the hassle of middlemen or lengthy searches. Our goal is to
            make everyday services more accessible, transparent, and localized.
          </p>
        </div>

        {/* Image Side */}
        <div style={styles.imageContainer}>
          <img src={aboutImage} alt="About" style={styles.image} />
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    padding: "5rem 1rem",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    // scrollMarginTop: "230px",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#00c3c3",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#666",
    maxWidth: "700px",
    margin: "0 auto 60px",
    lineHeight: "1.6",
    padding: "0px 25px",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    padding: "32px",
    flex: "1 1 500px",
    borderRadius: "12px",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#0f2d1e",
  },
  highlight: {
    color: "#48bb78", // green
  },
  paragraph: {
    fontSize: "1.4rem",
    lineHeight: "1.6",
    color: "#444",
    marginBottom: "16px",
    textAlign: "justify",
  },
  imageContainer: {
    flex: "1 1 400px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  },
};
export default AboutSection;
