import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export default function About() {
  const cards = [
    {
      title: "Awards",
      description: "Recognized globally for excellence in luxury safari travel.",
      link: "/awards",
      image: "About/awards.jpg",
    },
    {
      title: "Foundation",
      description: "Our commitment to conservation and community impact.",
      link: "/foundation",
      image: "About/foundation.jpg",
    },
    {
      title: "Partners",
      description: "Trusted collaborations that elevate every journey.",
      link: "/partners",
      image: "About/partners.jpg",
    },
    {
      title: "Press",
      description: "Featured in the world’s leading travel publications.",
      link: "/press",
      image: "About/press.jpg",
    },
    {
      title: "Our Team",
      description: "Meet the minds behind Grand Line Safaris.",
      link: "/our-team",
      image: "About/team.jpg",
    },
  ];

  return (
    <main className={styles.aboutPage}>
      {/* HERO IMAGE */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: `url(${getImageUrl("About/about-hero.webp")})`,
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>About Grand Line Safaris</h1>
          <p>Luxury. Legacy. Africa.</p>
        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <h2>
            Where timeless travel meets African soul — crafted for those who
            seek more than a journey.
          </h2>

          <p>
            Founded in 2025 by <strong>Mr. David K.</strong>, Grand Line Safaris
            was born from a deep reverence for Africa’s wild landscapes and a
            belief that travel should move the spirit as much as the body. What
            began as a vision to redefine luxury safari travel has evolved into
            a signature experience — intimate, cinematic, and profoundly
            personal.
          </p>

          <p>
            Each journey we curate blends old-world elegance with modern
            craftsmanship, pairing legendary wildlife encounters with bespoke
            lodges, private guides, and meaningful cultural connection. Our
            guests do not simply visit Africa — they feel it, live it, and carry
            it long after they return home.
          </p>

          <p>
            At Grand Line Safaris, luxury is not measured in excess, but in
            detail, intention, and legacy — and every itinerary is designed to
            become a story worth telling for generations.
          </p>
        </div>
      </section>

      {/* LINKED FEATURE CARDS */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className={styles.card}
              style={{
                backgroundImage: `url(${getImageUrl(card.image)})`,
                
              }}
            >
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className={styles.cardCta}>Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
