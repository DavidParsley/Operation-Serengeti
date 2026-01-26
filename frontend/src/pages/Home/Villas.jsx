import React from "react";
import styles from "./Villas.module.css";
import { getImageUrl } from "../../utils";

export default function Villas() {
  const villas = [
    {
      name: "Serengeti Sunset Villa",
      image: "Home/Villas/Serengeti Sunset Villa.avif",
    },
    {
      name: "Maasai Mara Retreat",
      image: "Home/Villas/lodge.avif",
    },
    {
      name: "Ngorongoro Luxury Lodge",
      image: "Home/Villas/uzuri-safaris-tanzania.avif",
    },
  ];

  return (
    <section className={styles.villasSection}>
      <div className={styles.container}>
        {/* Left: Text */}
        <div className={styles.content}>
          <span className={styles.kicker}>Exclusive Villas</span>
          <h2 className={styles.heading}>
            Stay in the Heart of Africa
          </h2>
          <p className={styles.text}>
            Experience the wild from the comfort of our handpicked luxury villas,
            each designed to blend seamlessly with the landscape while offering
            the ultimate in elegance, privacy, and comfort.
          </p>
          <button className={styles.button}>
            View All Villas
          </button>
        </div>

        {/* Right: Villas Images */}
        <div className={styles.imageGallery}>
          {villas.map((villa, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <img
                src={getImageUrl(villa.image)}
                alt={villa.name}
                className={styles.image}
              />
              <span className={styles.villaName}>{villa.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
