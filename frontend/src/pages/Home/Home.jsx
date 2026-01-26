import Hero from "./Hero";
import Destinations from "./Destinations";
import WhyUs from "./WhyUs";
import GuestBook from "./GuestBook";
import GallerySection from "./GallerySection";
import Foundation from "./Foundation";
import Villas from "./Villas";
import BlogSection from "./BlogSection";
import NewsletterSection from "./NewsletterSection";
import styles from "./Home.module.css";

export default function () {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section>
        <Destinations />
      </section>

      <section>
        <WhyUs />
      </section>

      <section>
        <GuestBook />
      </section>

      <div className={styles.divider} />

      <section>
        <GallerySection />
      </section>

      <section>
        <Foundation />
      </section>

      <section>
        <Villas />
      </section>

      <section>
        <BlogSection />
      </section>

      <section>
        <NewsletterSection />
      </section>
    </div>
  );
}
