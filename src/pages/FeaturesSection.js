import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import servicesImageDefault from "../images/allServices.png";
import plumberImg from "../images/plumbers.png";
import cleanerImg from "../images/cleaners.png";
import electricianImg from "../images/electricians.png";
import mechanicImg from "../images/mechanics.png";
import painterImg from "../images/painters.png";
import constructionImg from "../images/constructions.png";
import carpenterImg from "../images/carpenters.png";
import pestImg from "../images/pestControls.png";
import interiorImg from "../images/interior-design.png";
import gardeningImg from "../images/gardenings.png";

const serviceData = [
  // {
  //   name: "Services",
  //   image: servicesImageDefault,
  //   description:
  //     "We provide reliable, timely, and high-quality home and personal services to meet your everyday needs with trained professionals and hassle-free experience you can count on.",
  // },
  {
    name: "Plumber Services",
    image: plumberImg,
    description:
      "Expert plumbing solutions for homes and offices, including pipe repairs, leak fixes, and installations. We ensure fast response, quality work, and offer guidance on new plumbing layouts, water-saving options, and emergency fixes.",
  },
  {
    name: "Cleaner Services",
    image: cleanerImg,
    description:
      "Professional cleaning for homes, offices, and commercial spaces. We provide deep cleans, routine maintenance, and tailored packages using eco-friendly products and modern tools to keep your environment safe and spotless.",
  },
  {
    name: "Electrician Services",
    image: electricianImg,
    description:
      "Certified electricians for wiring, lighting, and appliance repairs. We serve homes, offices, and industries with safe, efficient, and up-to-code installations, upgrades, and troubleshooting of electrical systems.",
  },
  {
    name: "Mechanic Services",
    image: mechanicImg,
    description:
      "Vehicle repair and maintenance at your doorstep. From oil changes to brake repairs, our trusted mechanics use genuine parts to deliver fast, reliable service—no need for a workshop visit.",
  },
  {
    name: "Painter Services",
    image: painterImg,
    description:
      "Interior and exterior painting with premium materials. We offer clean finishes and minimal disruption for homes and offices, handling everything from touch-ups to full color refreshes.",
  },
  {
    name: "Construction",
    image: constructionImg,
    description:
      "Complete residential and commercial construction services. We manage labor, materials, and timelines from start to finish, including planning, renovations, supervision, and cost estimation for reliable project delivery.",
  },
  {
    name: "Carpenter Services",
    image: carpenterImg,
    description:
      "Expert carpenters for custom furniture, repairs, and woodwork. From shelves to restorations, we deliver quality craftsmanship using durable materials that enhance your space’s beauty and function.",
  },
  {
    name: "Pest Control",
    image: pestImg,
    description:
      "Eco-friendly pest control to remove cockroaches, rodents, and more. Our safe, effective treatments include inspection, targeted application, and follow-up for long-term protection.",
  },
  {
    name: "Interior Design",
    image: interiorImg,
    description:
      "Stylish and functional interior design tailored to your taste. We help with layouts, materials, colors, and decor to create spaces that reflect your lifestyle and personality.",
  },
  {
    name: "Gardening Services",
    image: gardeningImg,
    description:
      "Complete garden care and landscaping services. From seasonal cleanup to plant maintenance and irrigation setup, we create outdoor spaces that are beautiful and easy to manage.",
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const [imageAnimation, setImageAnimation] = useState(false);

  const handleServiceClick = (service) => {
    if (isMobile) {
      setSelectedService(service);
      setModalVisible(true);
    } else {
      setImageAnimation(true); // trigger animation
      setSelectedService(service);
      setTimeout(() => setImageAnimation(false), 300); // reset after animation
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="features" style={styles.section}>
        <h2 style={styles.heading}>Services</h2>
        <p style={styles.subtext}>
          We provide reliable, timely, and high-quality home and personal
          services.
        </p>

        <div style={styles.contentContainer}>
          {/* Left */}
          <div style={styles.textBlock}>
            {serviceData.map((service) => (
              <div key={service.name}>
                <h3
                  onClick={() => handleServiceClick(service)}
                  style={{
                    ...styles.subHeading,
                    cursor: "pointer",
                    color:
                      selectedService?.name === service.name
                        ? "#00c3c3"
                        : "#2d3748",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{service.name}</span>
                  <FaChevronDown
                    style={{
                      marginLeft: "8px",
                      transition: "transform 0.3s ease",
                      transform:
                        selectedService?.name === service.name
                          ? "rotate(0deg)"
                          : "rotate(180deg)",
                      fontSize: "15px",
                    }}
                  />
                </h3>
                {!isMobile && selectedService?.name === service.name && (
                  <>
                    <p style={styles.paragraph}>{service.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Right */}
          {!isMobile && (
            <div style={styles.imageWrapper}>
              <img
                key={selectedService?.image} // ensures re-render when image changes
                src={selectedService?.image || servicesImageDefault}
                alt="Service Visual"
                className={`image-responsive ${
                  imageAnimation ? "fade-in" : ""
                }`}
              />
            </div>
          )}
        </div>
      </section>

      {/* Modal for Mobile */}
      {isMobile && modalVisible && selectedService && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedService.image}
              alt="Selected Service"
              style={{
                width: "130%",
                borderRadius: "10px",
                marginBottom: "1rem",
              }}
            />
            <p style={styles.paragraph}>{selectedService.description}</p>
          </div>
        </div>
      )}

      <style>{`
  .image-responsive {
    width: 600px;
    border-radius: 16px;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    .image-responsive {
      width: 90vw;
    }
  }

  .fade-in {
    animation: fadeInImg 0.4s ease-in-out;
  }

  @keyframes fadeInImg {
    0% {
      opacity: 0;
      transform: translateY(20px) scale(0.98);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes modalFadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`}</style>
    </>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "#f5f9ff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // scrollMarginTop: "250px",
  },
  heading: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#00c3c3",
    textAlign: "center",
  },
  subtext: {
    fontSize: "1.1rem",
    color: "#4a5568",
    textAlign: "center",
    maxWidth: "600px",
    marginBottom: "40px",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "40px",
    maxWidth: "1200px",
    width: "100%",
  },
  textBlock: {
    flex: "1 1 200px",
    maxWidth: "450px",
    textAlign: "left",
  },
  subHeading: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "12px",
    transition: "color 0.3s ease",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#4a5568",
    lineHeight: "1.6",
    marginTop: "0.5rem",
  },
  imageWrapper: {
    flex: "0 0 400px",
    textAlign: "center",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: "1rem",
  },
  modalContent: {
    position: "relative",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    maxWidth: "600px",
    width: "100%",
    animation: "modalFadeIn 0.4s ease-in-out",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "20px",
    fontSize: "2rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#e53e3e",
  },
};

export default ServicesSection;
