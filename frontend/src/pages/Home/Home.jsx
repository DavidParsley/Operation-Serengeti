import Hero from "./Hero";
import Destinations from "./Destinations";
import WhyUs from "./WhyUs";
import GuestBook from "./GuestBook";
import GallerySection from "./GallerySection";
import Foundation from "./Foundation";
import Villas from "./Villas";
import Experiences from "./Experiences";
import CTASection from "./CTASection";

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

      <section>
        <GallerySection />
      </section>

      <section>
        <Foundation />
      </section>

      <section>
        <Villas />
      </section>

      {/* <section>
        <Experiences />
      </section> */}

      <section>
        <CTASection />
      </section>
    </div>
  );
}
