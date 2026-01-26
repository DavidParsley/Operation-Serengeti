import { Link } from "react-router-dom";
import { countries } from "../../data/countries";
import { getImageUrl } from "../../utils";
import styles from "./Destinations.module.css";

export default function Destinations() {
  const featuredCountries = Object.values(countries);

  return (
    <section className={styles.destinations}>
      {/* Intro Section */}
      <div className={styles.intro}>
        <h2>Discover Luxury & Legacy in Every Journey</h2>
        <p>
          Grand Line Safaris crafts intimate family and transformational safaris 
          across East Africa. Immerse yourself in unparalleled wildlife, culture, 
          and luxury accommodations.
        </p>
      </div>

      {/* Featured Countries */}
      <div className={styles.cardsContainer}>
        {featuredCountries.map((country) => (
          <div key={country.id} className={styles.card}>
            <div
              className={styles.cardImage}
              style={{
                backgroundImage: `url(${getImageUrl(country.heroImage)})`,
              }}
            ></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{country.name}</h3>
              <p className={styles.cardDescription}>{country.description}</p>
              <Link
                to={`/destinations/${country.id}`}
                className={styles.cardButton}
              >
                Explore {country.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
