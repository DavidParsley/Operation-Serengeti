import { Link } from "react-router-dom";
import { countries } from "../../data/countries";
import { getImageUrl } from "../../utils";
import styles from "./Destinations.module.css";

export default function Destinations() {
  const featuredCountries = Object.values(countries);

  return (
    <section className={styles.destinations}>
      <div className={styles.container}>
        {/* Intro */}
        <div className={styles.intro}>
          <span className={styles.kicker}>Our Destinations</span>
          <h2>Journeys Across Africa’s Most Remarkable Landscapes</h2>
          <p>
            From sweeping savannahs to pristine coastlines, each destination is
            curated for intimacy, beauty, and unforgettable storytelling.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Featured Countries */}
        <div className={styles.cardsContainer}>
          {featuredCountries.map((country) => (
            <Link
              key={country.id}
              to={`/destinations/${country.id}`}
              className={styles.card}
            >
              <div
                className={styles.cardImage}
                style={{
                  backgroundImage: `url(${getImageUrl(country.heroImage)})`,
                }}
              >
                <div className={styles.imageOverlay} />
                <div className={styles.imageContent}>
                  <h3>{country.name}</h3>
                  <span className={styles.explore}>Explore</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <p>{country.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
