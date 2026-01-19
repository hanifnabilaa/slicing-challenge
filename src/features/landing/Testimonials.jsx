import React from "react";
import SectionHead from "./components/SectionHead";
import TestimonialCard from "./components/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <SectionHead
          title="Loved by learners"
          subtitle="Great for practicing props, lists, and layout."
        />

        <div className="grid grid--3">
          <TestimonialCard
            text="I finally understood how to split a page into components without overthinking."
            name="Alya"
            role="Frontend student"
          />

          <TestimonialCard
            text="The section layout is clean and the cards are perfect for reuse."
            name="Bima"
            role="Bootcamp participant"
          />

          <TestimonialCard
            text="Easy to theme. I swapped colors and added dark mode in 10 minutes."
            name="Citra"
            role="Junior developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
