import React, { useState, useRef } from "react";
import { getImageUrl } from "../../utils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Experiences.module.css";

const experienceImages = [
  {
    src: "Home/Experiences/hotairballon.avif",
    alt: "Family safari",
    caption: "Creating memories in the Maasai Mara",
  },
  {
    src: "Home/Experiences/lodge.avif",
    alt: "Luxury lodge",
    caption: "Private luxury lodges in nature",
  },
  {
    src: "Home/Experiences/sunsetsavanna.avif",
    alt: "Sunset over savannah",
    caption: "Golden hour in the savannah",
  },
  {
    src: "Home/Experiences/gorillas.avif",
    alt: "Mountain gorillas",
    caption: "Up close with wildlife in Rwanda",
  },
  {
    src: "Home/Experiences/rivercruise.avif",
    alt: "River cruise",
    caption: "Safari adventures on tranquil waters",
  },
  {
    src: "Home/Experiences/masai.avif",
    alt: "Cultural experience",
    caption: "Connecting with local communities",
  },
];

export default function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const totalImages = experienceImages.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  // Swipe Support
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    )
      return;

    const distance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) handleNext();
    if (distance < -swipeThreshold) handlePrev();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentImage = experienceImages[currentIndex];

  return (
    <>
      <section className={styles.experiences}>
        <div className={styles.intro}>
          <h2>Stories from the Wild</h2>
          <p>
            Experience our family and transformational safaris through images,
            stories, and unforgettable moments.
          </p>
        </div>

        <div
          className={styles.fullImageContainer}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={getImageUrl(currentImage.src)}
            alt={currentImage.alt}
            loading="lazy"
            className={styles.fullImage}
            draggable="false"
          />

          <div className={styles.overlay}>
            <p className={styles.caption}>{currentImage.caption}</p>

            <button
              className={`${styles.navButton} ${styles.left}`}
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            <button
              className={`${styles.navButton} ${styles.right}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteContainer}>
          <svg
            className={styles.quoteIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.17 6C5.46 6 4 7.46 4 9.17c0 1.3.84 2.41 2 2.83V18h4v-6.34C9.16 10.58 10 9.48 10 8.17 10 6.46 8.54 5 6.83 5c-.58 0-1.12.17-1.58.46.5-.91 1.5-1.46 2.58-1.46H7.17zM17.17 6C15.46 6 14 7.46 14 9.17c0 1.3.84 2.41 2 2.83V18h4v-6.34C19.16 10.58 20 9.48 20 8.17 20 6.46 18.54 5 16.83 5c-.58 0-1.12.17-1.58.46.5-.91 1.5-1.46 2.58-1.46H17.17z" />
          </svg>

          <blockquote>
            “This was more than a trip — it was a transformation. The experience
            changed how we see the world.”
          </blockquote>
          <cite>– A Happy Explorer</cite>
        </div>
      </section>
    </>
  );
}
