import React from "react";
import styles from "./BlogSection.module.css";
import { getImageUrl } from "../../utils";

export default function BlogSection() {
  const blogs = [
    {
      title: "Chasing Sunsets in the Serengeti",
      excerpt:
        "Discover the golden hues of Africa’s most iconic savannahs and the unforgettable moments they offer.",
      image: "Home/BlogSection/sunsetsavanna.avif",
    },
    {
      title: "The Maasai Mara: Beyond the Big Five",
      excerpt:
        "Explore the hidden stories, culture, and landscapes that make the Maasai Mara a once-in-a-lifetime experience.",
      image: "Home/BlogSection/hotairballon.avif",
    },
    {
      title: "Luxury Safari Lodges That Redefine Comfort",
      excerpt:
        "From infinity pools to candlelit dinners under the stars, these lodges offer a safari experience like no other.",
      image: "Home/BlogSection/rivercruise.avif",
    },
  ];

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        {/* Intro */}
        <div className={styles.intro}>
          <span className={styles.kicker}>Insights & Stories</span>
          <h2 className={styles.heading}>
            Explore the Wild Through Our Stories
          </h2>
          <p className={styles.text}>
            Our blog brings you closer to the adventures, wildlife, and
            experiences that make every safari journey unforgettable.
          </p>
        </div>

         <div className={styles.divider} />

        {/* Blog Cards */}
        <div className={styles.blogGrid}>
          {blogs.map((blog, idx) => (
            <div key={idx} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={getImageUrl(blog.image)}
                  alt={blog.title}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
              <p className={styles.blogExcerpt}>{blog.excerpt}</p>
              <button className={styles.button}>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
