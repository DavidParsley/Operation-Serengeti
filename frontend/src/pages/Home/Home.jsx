import React from "react";
import Hero from "./Hero";
import MiddlePart from "./MiddlePart";
import WhyUs from "./WhyUs";
import Experiences from "./Experiences";
import CTASection from "./CTASection";

export default function () {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section>
        <MiddlePart />{" "}
      </section>

      <section>
        <WhyUs />
      </section>

      <section>
        <Experiences />
      </section>

      <section>
        <CTASection />
      </section>
    </div>
  );
}
