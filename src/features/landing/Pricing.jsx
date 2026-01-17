import React from "react";
import SectionHead from "./components/SectionHead";
import PriceCard from "./components/PriceCard";

const Pricing = () => {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHead
          title="Pricing"
          subtitle="Three cards with a highlighted plan. Great for component variants."
        />

        <div className="grid grid--3">
          <PriceCard
            title="Starter"
            desc="For beginners who want a clean template."
            price="0"
            list1="1 landing page"
            list2="Basic components"
            list3="Community access"
            link="Choose Starter"
          />

          <PriceCard
            title="Pro"
            desc="For students slicing weekly challenges."
            price="9"
            list1="10 templates"
            list2="Component checklist"
            list3="Priority support"
            link="Choose Pro"
          />

          <PriceCard
            title="Team"
            desc="For group practice and code reviews."
            price="29"
            list1="Unlimited templates"
            list2="Team guidelines"
            list3="Review sessions"
            link="Choose Team"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
