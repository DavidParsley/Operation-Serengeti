import React from "react";
import { FaLeaf, FaUsers, FaHotel } from "react-icons/fa";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  const highlights = [
    {
      id: 1,
      icon: <FaLeaf />,
      title: "Private Luxury Lodges",
      description:
        "Exclusive stays in hand-selected lodges where privacy, elegance, and wilderness converge.",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Family & Legacy Safaris",
      description:
        "Tailored journeys designed to create meaningful memories across generations.",
    },
    {
      id: 3,
      icon: <FaHotel />,
      title: "Conservation & Storytelling",
      description:
        "Travel that gives back — immersive experiences rooted in preservation and purpose.",
    },
  ];

  return (
    <section className={styles.whyUs}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.kicker}>Why Travel With Us</span>
          <h2>Safari Experiences, Refined</h2>
          <p>
            At Grand Line Safaris, luxury is not excess — it is intention.
            Every journey is crafted with restraint, care, and a deep respect
            for place, people, and story.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.highlights}>
          {highlights.map((item) => (
            <div key={item.id} className={styles.highlightCard}>
              <div className={styles.icon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
