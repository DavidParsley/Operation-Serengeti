import React, { useState } from "react";
import styles from "./NewsletterSection.module.css";
import { getImageUrl } from "../../utils";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section
      className={styles.newsletterSection}
      style={{
        backgroundImage: `url(${getImageUrl("Home/NewsletterSection/Newsletter.avif")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.kicker}>Private Invitations</span>
        <h2>Join Our Safari Community</h2>
        <p>
          Receive exclusive stories, handcrafted journeys, and transformative
          safari experiences directly in your inbox.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
