import React from "react";
import styles from "./NoPage.module.css";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils";

export default function NoPage() {
  return (
    <section className={styles.noPage}>
      {/* Background Image */}
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${getImageUrl("NoPage/African-continent.avif")})`,
        }}
      />

      {/* Dark overlay */}
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>404</span>

        <h1 className={styles.title}>You’ve Wandered Off the Map</h1>

        <p className={styles.description}>
          The destination you’re looking for no longer exists — or perhaps
          it was never meant to be found.
        </p>

        <Link to="/" className={styles.button}>
          Return to Safari
        </Link>
      </div>
    </section>
  );
}
