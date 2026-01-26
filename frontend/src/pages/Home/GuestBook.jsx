import React from "react";
import styles from "./GuestBook.module.css";
import { getImageUrl } from "../../utils";

export default function GuestBook() {
  return (
    <section className={styles.guestbookSection}>
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <img
            src={getImageUrl("Home/GuestBook/masai.avif")}
            alt="Happy safari guests"
            className={styles.image}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <span className={styles.kicker}>Guest Book</span>
          <h2 className={styles.heading}>
            Stories From Travelers Who’ve Walked the Wild
          </h2>
          <p className={styles.text}>
            From sunrise game drives in the Maasai Mara to candlelit dinners in
            the Serengeti, our guests return home with stories that last a
            lifetime. Discover what it feels like to journey Africa the Grand
            Line way.
          </p>

          <button className={styles.button}>
            Read Guest Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
