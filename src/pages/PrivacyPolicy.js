import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />

      <main style={styles.container}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.updated}>Last updated: June 30, 2025</p>

        <section style={styles.section}>
          <h2 style={styles.heading}>1. Introduction</h2>
          <p style={styles.paragraph}>
            Welcome to Muawza, a platform designed to connect users with
            reliable local service providers such as plumbers, electricians,
            cleaners, and more. We respect your privacy and are committed to
            protecting the information you provide while using our mobile
            application and website. This Privacy Policy outlines our practices
            regarding the collection, use, and protection of your data.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>2. Information We Collect</h2>
          <p style={styles.paragraph}>
            Muawza is designed with user privacy in mind. We do not collect
            personally identifiable information (PII) such as your name, email
            address, phone number, or payment details. However, we may collect
            certain non-personal information to improve your experience,
            including:
          </p>
          <ul style={styles.list}>
            <li>Device type, operating system, and app version</li>
            <li>
              Anonymous usage statistics (e.g., screen views, click events)
            </li>
            <li>
              Location data (only if explicitly granted permission by the user)
            </li>
            <li>
              Language preferences (for multilingual experience in English and
              Urdu)
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>3. Use of Collected Information</h2>
          <p style={styles.paragraph}>
            We use the collected information solely to enhance the performance
            and usability of our application. Specifically, we may use this data
            for the following purposes:
          </p>
          <ul style={styles.list}>
            <li>
              To display relevant service providers based on your location
            </li>
            <li>To improve application performance and user interface</li>
            <li>To conduct internal analytics and monitor app usage trends</li>
            <li>
              To support multi-language features based on your device settings
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>4. Location Permissions</h2>
          <p style={styles.paragraph}>
            Muawza may request access to your location in order to display
            nearby vendors and services. Location data is used only within the
            app and is never stored or transmitted to our servers. You may
            choose to deny or revoke location permissions at any time through
            your device settings.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>5. Third-Party Services</h2>
          <p style={styles.paragraph}>
            We may use third-party services to enhance app functionality. These
            include:
          </p>
          <ul style={styles.list}>
            <li>
              <strong>Google Places API:</strong> To fetch and display
              businesses near the user, based on selected service categories and
              location.
            </li>
            <li>
              <strong>Google Analytics or similar tools:</strong> For anonymous
              usage insights.
            </li>
          </ul>
          <p style={styles.paragraph}>
            These third parties may collect data independently according to
            their respective privacy policies. We encourage you to review those
            policies directly.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>6. Data Security</h2>
          <p style={styles.paragraph}>
            Although Muawza does not collect personal data, we take security
            seriously and implement industry-standard measures to protect the
            non-personal data we process (e.g., encryption in transit, secure
            APIs, and server-side protections).
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>7. Data Retention</h2>
          <p style={styles.paragraph}>
            As we do not collect or store personal information, we do not retain
            any user-specific data. Anonymous usage and device data may be
            retained temporarily for performance monitoring purposes and deleted
            periodically.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>8. Children's Privacy</h2>
          <p style={styles.paragraph}>
            Our services are not intended for use by individuals under the age
            of 13. We do not knowingly collect any personal or sensitive
            information from children.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>9. Your Choices</h2>
          <p style={styles.paragraph}>
            Users have full control over location access and can modify their
            preferences through device settings. Choosing to disable location
            services may affect certain app features, such as showing nearby
            vendors.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>10. Changes to This Policy</h2>
          <p style={styles.paragraph}>
            We may revise this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated revision date. We
            encourage users to review the policy periodically to stay informed
            about how we protect your data.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>11. Contact Us</h2>
          <p style={styles.paragraph}>
            If you have any questions, concerns, or feedback about this Privacy
            Policy or the way we handle your data, please reach out to us:
          </p>
          <p style={styles.paragraph}>📞 Phone: 0900 78601</p>
          <p style={styles.paragraph}>
            🌐 LinkedIn:{" "}
            <a
              href="https://pk.linkedin.com/company/amphersoft"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00c3c3" }}
            >
              Amphersoft
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
    fontFamily: "sans-serif",
    backgroundColor: "#ffffff",
    color: "#333",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#00c3c3",
    marginBottom: "1rem",
    textAlign: "center",
  },
  updated: {
    fontSize: "1rem",
    color: "#777",
    textAlign: "center",
    marginBottom: "2rem",
  },
  section: {
    marginBottom: "2rem",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "0.8rem",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "0.5rem",
    textAlign: "justify",
  },
  list: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    paddingLeft: "1.5rem",
    listStyleType: "disc",
  },
};

export default PrivacyPolicy;
