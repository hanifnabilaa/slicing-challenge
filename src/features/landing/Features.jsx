import React from "react";
import SectionHead from "./components/SectionHead";
import FeatureCard from "./components/FeatureCard";

const Features = () => {
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHead
          title="Features made for slicing practice"
          subtitle="Each block is designed to become a small component."
        />

        <div className="grid grid--3">
          <FeatureCard
            icon="⚡"
            title="Clean spacing"
            text="Consistent paddings and gaps so your components look aligned."
            link="#pricing"
            textLink="Learn more"
          />
          <FeatureCard
            icon="🧩"
            title="Reusable cards"
            text="Card patterns you can reuse for products, posts, or services."
            link="#testimonials"
            textLink="See examples"
          />
          <FeatureCard
            icon="🎯"
            title="Simple colors"
            text="Neutral base with one accent color, easy to theme later."
            link="#faq"
            textLink="How to slice"
          />
        </div>

        <div className="split">
          <div className="split__media" aria-hidden="true">
            <div className="mock">
              <div className="mock__badge">UI Kit</div>
              <div className="mock__title">Component Library</div>
              <div className="mock__row">
                <div className="chip">Button</div>
                <div className="chip">Card</div>
                <div className="chip">Badge</div>
                <div className="chip">Modal</div>
              </div>
              <div className="mock__row">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </div>

          <div className="split__content">
            <h3 className="split__title">Recommended slicing approach</h3>
            <ul className="list">
              <li className="list__item">
                <span className="check">✓</span> Start from layout: container,
                grid, split
              </li>
              <li className="list__item">
                <span className="check">✓</span> Extract repeated UI: buttons,
                cards, badges
              </li>
              <li className="list__item">
                <span className="check">✓</span> Use props for text and variants
              </li>
              <li className="list__item">
                <span className="check">✓</span> Keep CSS modular: component
                blocks
              </li>
            </ul>
            <div className="split__cta">
              <a className="btn btn--secondary" href="#pricing">
                View pricing
              </a>
              <a className="btn btn--ghost" href="#faq">
                Read FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
