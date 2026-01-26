import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "../Home/Hero.module.css";
import { getImageUrl } from "../../utils";

export default function Hero() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    // Slight delay to avoid jank; video is optional enhancement
    const timeout = setTimeout(() => setLoadVideo(true), 800);
    return () => clearTimeout(timeout);
  }, []);

  const posterUrl = getImageUrl("Home/HeroSection/hero-poster.webp");

  return (
    <section className={styles.hero}>
      {/* Always show poster immediately */}
      <img
        src={posterUrl}
        alt="Hero preview"
        className={styles.heroPoster}
        aria-hidden
      />

      {/* Background video (optional, loads after 0.8s) */}
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

      {/* Dark overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Luxury East African Safaris
        </h1>
        <p className={styles.subtitle}>
         Premium Travel & Leisure
        </p>
        {/* <p className={styles.supporting}>
          Private, cinematic journeys that honor your heritage, deepen family
          bonds, and capture your story for generations.
        </p> */}

        <div className={styles.buttons}>
          <a className={`${styles.btn} ${styles.primaryBtn}`} href="/">Begin Your Journey</a>
          <a className={`${styles.btn} ${styles.secondaryBtn}`}href="/">See Legacy Experiences</a>
        </div>

        <p className={styles.tagline}>
          Grand Line Safaris — Crafting Legacy Through the Wild.
        </p>
      </div>

      {/* Floating arrows */}
      <div className={styles.leftArrow} aria-hidden>
        <FaChevronDown />
      </div>
      <div className={styles.rightArrow} aria-hidden>
        <FaChevronDown />
      </div>
    </section>
  );
}
