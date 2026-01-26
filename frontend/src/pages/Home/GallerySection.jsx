import React, { useRef } from "react";
import styles from "./GallerySection.module.css";
import { getImageUrl } from "../../utils";

export default function GallerySection() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = true;
    }
  };

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        {/* Content */}
        <div className={styles.content}>
          <span className={styles.kicker}>Gallery</span>
          <h2 className={styles.heading}>
            Africa, Captured in Motion
          </h2>
          <p className={styles.text}>
            Watch the landscapes awaken, hear the rhythm of the wild, and
            experience the moments our travelers carry with them long after
            the journey ends.
          </p>

          <button className={styles.button}>
            Explore The Gallery
          </button>
        </div>

        {/* Video */}
        <div className={styles.videoWrapper} onClick={handlePlay}>
          <video
            ref={videoRef}
            className={styles.video}
            poster={getImageUrl("Home/GallerySection/poster.webp")}
            preload="metadata"
            playsInline
            muted
          >
            {/* Low-bandwidth (mobile) */}
            <source
              src={getImageUrl("Home/GallerySection/preview-low.webm")}
              type="video/webm"
              media="(max-width: 768px)"
            />

            {/* Primary WebM */}
            <source
              src={getImageUrl("Home/GallerySection/preview.webm")}
              type="video/webm"
            />

            {/* Safari fallback */}
            <source
              src={getImageUrl("Home/GallerySection/preview.mp4")}
              type="video/mp4"
            />
          </video>

          <div className={styles.playButton}>▶</div>
        </div>
      </div>
    </section>
  );
}
