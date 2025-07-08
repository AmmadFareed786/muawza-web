import React, { useState } from "react";
import servicesImage from "../images/allServices.png";
import { FaChevronDown } from "react-icons/fa";

const serviceData = [
  {
    name: "Plumber Services",
    description:
      "Expert plumbing solutions for homes and offices, including pipe repairs, leak fixes, and installations. We ensure fast response, quality work, and offer guidance on new plumbing layouts, water-saving options, and emergency fixes.",
  },
  {
    name: "Cleaner Services",
    description:
      "Professional cleaning for homes, offices, and commercial spaces. We provide deep cleans, routine maintenance, and tailored packages using eco-friendly products and modern tools to keep your environment safe and spotless.",
  },
  {
    name: "Electrician Services",
    description:
      "Certified electricians for wiring, lighting, and appliance repairs. We serve homes, offices, and industries with safe, efficient, and up-to-code installations, upgrades, and troubleshooting of electrical systems.",
  },
  {
    name: "Mechanic Services",
    description:
      "Vehicle repair and maintenance at your doorstep. From oil changes to brake repairs, our trusted mechanics use genuine parts to deliver fast, reliable service—no need for a workshop visit.",
  },
  {
    name: "Painter Services",
    description:
      "Interior and exterior painting with premium materials. We offer clean finishes and minimal disruption for homes and offices, handling everything from touch-ups to full color refreshes.",
  },
  {
    name: "Construction",
    description:
      "Complete residential and commercial construction services. We manage labor, materials, and timelines from start to finish, including planning, renovations, supervision, and cost estimation for reliable project delivery.",
  },
  {
    name: "Carpenter Services",
    description:
      "Expert carpenters for custom furniture, repairs, and woodwork. From shelves to restorations, we deliver quality craftsmanship using durable materials that enhance your space’s beauty and function.",
  },
  {
    name: "Pest Control",
    description:
      "Eco-friendly pest control to remove cockroaches, rodents, and more. Our safe, effective treatments include inspection, targeted application, and follow-up for long-term protection.",
  },
  {
    name: "Interior Design",
    description:
      "Stylish and functional interior design tailored to your taste. We help with layouts, materials, colors, and decor to create spaces that reflect your lifestyle and personality.",
  },
  {
    name: "Gardening Services",
    description:
      "Complete garden care and landscaping services. From seasonal cleanup to plant maintenance and irrigation setup, we create outdoor spaces that are beautiful and easy to manage.",
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(serviceData[0].name);

  return (
    <>
      <section id="features" style={styles.section}>
        <h2 style={styles.heading}>Services</h2>

        <div style={styles.contentContainer}>
          {/* Left: Service List + Inline Descriptions */}
          <div style={styles.textBlock}>
            {serviceData.map((service) => {
              const isSelected = selectedService === service.name;
              return (
                <div key={service.name}>
                  <h3
                    onClick={() => setSelectedService(service.name)}
                    style={{
                      ...styles.subHeading,
                      cursor: "pointer",
                      color: isSelected ? "#00c3c3" : "#2d3748",
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
                        transform: isSelected
                          ? "rotate(0deg)"
                          : "rotate(180deg)",
                        fontSize: "15px",
                      }}
                    />
                  </h3>
                  {isSelected && (
                    <p style={styles.paragraph}>{service.description}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Center Image */}
          <div style={styles.imageWrapper}>
            <img
              src={servicesImage}
              alt="Services"
              className="image-responsive"
            />
          </div>
        </div>
      </section>
      <style>
        {`
    .image-responsive {
      width: 600px;
      border-radius: 12px;
    }

    @media (max-width: 768px) {
      .image-responsive {
        width: 400px;
      }
    }
  `}
      </style>
    </>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    marginBottom: "60px",
    color: "#00c3c3",
    textAlign: "center",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "40px",
    maxWidth: "1600px",
    width: "100%",
  },
  textBlock: {
    flex: "1 1 200px",
    maxWidth: "400px",
    textAlign: "left",
  },
  subHeading: {
    fontSize: "1.6rem",
    fontWeight: "600",
    marginBottom: "8px",
    transition: "color 0.3s ease",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#4a5568",
    lineHeight: "1.6",
    marginBottom: "16px",
  },
  imageWrapper: {
    flex: "0 0 400px",
    textAlign: "center",
  },
  image: {
    width: "600px",
    height: "100%",
    // maxWidth: "400px",
    borderRadius: "12px",
  },
};

export default ServicesSection;
