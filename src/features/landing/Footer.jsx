import React from "react";
import FooterLinkColumn from "./components/FooterLinkColumn";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="brand brand--footer">
            <span className="brand__logo" aria-hidden="true">
              ◇
            </span>
            <span className="brand__text">Idaz</span>
          </div>
          <p className="footer__text">
            A simple page for slicing into React components.
          </p>
        </div>

        <div className="footer__links">
          <FooterLinkColumn
            title="Product"
            links={[
              { href: "#features", text: "Features" },
              { href: "#pricing", text: "Pricing" },
              { href: "#faq", text: "FAQ" },
            ]}
          />

          <FooterLinkColumn
            title="Company"
            links={[
              { href: "#about", text: "About" },
              { href: "#careers", text: "Careers" },
              { href: "#contact", text: "Contact" },
            ]}
          />

          <FooterLinkColumn
            title="Resources"
            links={[
              { href: "#docs", text: "Docs" },
              { href: "#community", text: "Community" },
              { href: "#support", text: "Support" },
            ]}
          />
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 Idaz. All rights reserved.</span>
        <span className="footer__small">
          Made for HTML/CSS slicing practice.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
