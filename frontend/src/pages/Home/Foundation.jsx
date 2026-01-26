import React, { useEffect, useRef, useState } from "react";
import styles from "./Foundation.module.css";
import { getImageUrl } from "../../utils";

export default function Foundation() {
  const valueRefs = useRef([]);
  const [scrollY, setScrollY] = useState(0);

  // Scroll-triggered animation for founding principles
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    valueRefs.current.forEach((el) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add(styles.visible);
        }
      }
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const foundingPrinciples = [
    "Protect and restore habitats for wildlife",
    "Support community-led education initiatives",
    "Preserve and celebrate cultural heritage",
  ];

  return (
    <section className={`${styles.foundationSection} ${styles.darkVariant}`}>
      <div className={styles.container} style={{ alignItems: "stretch" }}>
        {/* Left Side */}
        <div className={styles.content}>
          <span className={styles.kicker}>Our Foundation</span>
          <h2 className={styles.heading}>
            Travel That Gives Back to the Wild
          </h2>
          <p className={styles.text}>
            Every journey we design supports the landscapes and communities that
            make Africa extraordinary. Through long-term partnerships in
            conservation, education, and cultural preservation, our foundation
            ensures that the places we visit today thrive for generations to
            come.
          </p>

          {/* Founding Principles */}
          <ul className={styles.values}>
            {foundingPrinciples.map((principle, idx) => (
              <li
                key={idx}
                ref={(el) => (valueRefs.current[idx] = el)}
                className={styles.valueItem}
              >
                {principle}
              </li>
            ))}
          </ul>

          {/* Quote */}
          <blockquote className={styles.quote}>
            “These partnerships are not just about travel; they are about ensuring
            that our land, our wildlife, and our children inherit a future full of
            life and opportunity.”
            <span className={styles.author}>— Amina N., Community Leader</span>
          </blockquote>

          <button className={styles.button}>
            Learn About Our Impact
          </button>
        </div>

        {/* Right Side */}
        <div className={styles.imageWrapper}>
          <img
            src={getImageUrl("Home/Foundation/community.avif")}
            alt="Community and conservation efforts"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
