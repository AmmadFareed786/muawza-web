import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nearMeImage from "../images/map1080.PNG";

gsap.registerPlugin(ScrollTrigger);

function NearMe() {
  const sectionRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        // Desktop animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(imageRef.current, {
          width: "50vw",
          x: "-25vw",
          ease: "power2.out",
        }).fromTo(
          textRef.current,
          { autoAlpha: 0, x: 100 },
          { autoAlpha: 1, x: 0, ease: "power2.out" },
          "<0.3"
        );
      });

      mm.add("(max-width: 768px)", () => {
        // Mobile animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        });

        tl.fromTo(
          imageRef.current,
          { scale: 1, opacity: 0.5 },
          { scale: 1.2, opacity: 1, duration: 1, ease: "power2.out" }
        ).fromTo(
          textRef.current,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, ease: "power2.out" },
          "<0.3"
        );
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={styles.section}>
      <style>{mediaQueries}</style>
      <div style={styles.content} className="nearme-content">
        <div
          style={styles.imageWrapper}
          ref={imageRef}
          className="image-wrapper"
        >
          <img src={nearMeImage} alt="Near Me" style={styles.image} />
        </div>
        <div ref={textRef} style={styles.textWrapper} className="text-wrapper">
          <h2 style={styles.heading} className="heading">
            Near Me
          </h2>
          <p style={styles.paragraph} className="paragraph">
            Instantly find trusted vendors near you with Muawza. Our platform
            connects you with skilled local professionals offering a wide range
            of services including home maintenance, repairs, cleaning, beauty,
            and more. Whether you need a plumber, electrician, carpenter, or a
            personal care expert, Muawza helps you discover reliable vendors
            nearby.
            {/* Designed for convenience and accessibility, Muawza ensures
            that getting quality services in your area is fast, easy, and
            stress-free. */}
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
    position: "relative",
    overflow: "hidden",
    padding: "1.5rem",
  },
  content: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "0 10px",
    boxSizing: "border-box",
  },
  imageWrapper: {
    width: "100vw",
    transition: "all 0.5s ease-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    willChange: "transform, opacity, scale",
    zIndex: 10,
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "16px",
    maxHeight: "110vh",
    objectFit: "cover",
  },
  textWrapper: {
    width: "45%",
    position: "absolute",
    right: "5%",
    top: "50%",
    transform: "translateY(-50%)",
    opacity: 0,
    zIndex: 2,
    willChange: "transform, opacity",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#111",
    marginLeft: "50px",
  },
  paragraph: {
    fontSize: "1.4rem",
    color: "#555",
    lineHeight: 1.6,
    marginLeft: "50px",
    textAlign: "justify",
  },
};

const mediaQueries = `
  @media (max-width: 768px) {
    .nearme-content {
      flex-direction: column;
      height: auto;
      padding: 40px 20px;
    }

    .image-wrapper {
      width: 100% !important;
      transform: none !important;
    }

    .text-wrapper {
      position: static !important;
      width: 100% !important;
      opacity: 1 !important;
      transform: none !important;
      padding: 20px;
      text-align: center;
    }

    .heading {
      margin-left: 0 !important;
      font-size: 2rem;
    }

    .paragraph {
      margin-left: 0 !important;
      font-size: 1rem;
    }
  }
`;

export default NearMe;
