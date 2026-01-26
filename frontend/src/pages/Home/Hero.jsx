import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "../Home/Hero.module.css";
import { getImageUrl } from "../../utils";

export default function Hero() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoadVideo(true), 800);
    return () => clearTimeout(timeout);
  }, []);

  const posterUrl = getImageUrl("Home/HeroSection/hero-poster.webp");

  return (
    <section className={styles.hero}>
      <img
        src={posterUrl}
        alt="Hero preview"
        className={styles.heroPoster}
        aria-hidden
      />

      {loadVideo && (
        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterUrl}
          tabIndex={-1}
          onError={() =>
            console.warn("Hero video failed to load, falling back to poster.")
          }
        >
          <source src={getImageUrl("Home/HeroSection/hero-bg.webm")} type="video/webm" />
          <source src={getImageUrl("Home/HeroSection/hero-bg-optimized.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.kicker}>Grand Line Safaris</span>

        <h1 className={styles.title}>Luxury East African Safaris</h1>

        <p className={styles.subtitle}>
          Private journeys crafted for legacy, intimacy, and wonder.
        </p>

        <div className={styles.buttons}>
          <a className={`${styles.btn} ${styles.primaryBtn}`} href="/">
            Begin Your Journey
          </a>
          <a className={`${styles.btn} ${styles.secondaryBtn}`} href="/">
            Explore Experiences
          </a>
        </div>

        <p className={styles.tagline}>
          Crafting extraordinary stories through the wild.
        </p>
      </div>

      <div className={styles.leftArrow} aria-hidden>
        <FaChevronDown />
      </div>
      <div className={styles.rightArrow} aria-hidden>
        <FaChevronDown />
      </div>
    </section>
  );
}
