import React from "react";
import { FaLeaf, FaUsers, FaHotel } from "react-icons/fa";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  const highlights = [
    {
      id: 1,
      icon: <FaLeaf />,
      title: "Private Luxury Lodges",
      description: "Exclusive stays surrounded by nature, comfort, and elegance."
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Family & Legacy Safaris",
      description: "Create memories that last generations, with intimate and private experiences."
    },
    {
      id: 3,
      icon: <FaHotel />,
      title: "Conservation & Storytelling",
      description: "Learn, engage, and give back while exploring the wild responsibly."
    }
  ];

  return (
    <section className={styles.whyUs}>
      <div className={styles.intro}>
        <h2>Why Grand Line Safaris?</h2>
        <p>
          We combine luxury, intimacy, and purpose. Our experiences are designed to
          leave you inspired, connected, and deeply enriched by the wild.
        </p>
      </div>

      <div className={styles.highlights}>
        {highlights.map((item) => (
          <div key={item.id} className={styles.highlightCard}>
            <div className={styles.icon}>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
