import Button from "@components/button";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import {
  FooterContentSection,
  FooterMidSection,
  FooterOuterWrapper,
} from "@components/footer/styles";
import { Interpolation, Theme } from "@emotion/react";
import { useEffect, useState } from "react";

const quickLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Sitemap", href: "/sitemap" },
];
const contacts = [
  { label: "+91 12345 67890", href: "tel:+911234567890", icon: "phone" },
  {
    label: "cleantankservices@gmail.com",
    href: "mailto:cleantankservices@gmail.com",
    icon: "email",
  },
];

const css: Interpolation<Theme> = {
  color: "var(--color-accent-1000)",
  textAlign: "center",
  fontSize: "var(--fs-2xs)",
  padding: "1rem 0",
  fontWeight: "500",
};
const FooterCopyrightSection = () => {
  const [currentYear, setCurrentYear] = useState("2027");
  useEffect(() => {
    const year = new Date().getFullYear();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- ignore
    setCurrentYear(year.toString());
  }, []);
  return (
    <CommonFullWidthWrapper
      element="div"
      bg="var(--color-primary-100)"
      css={css}
    >
      {`© ${currentYear} Clean Tank Services. Industrial-Grade Hygiene Certified.`}
    </CommonFullWidthWrapper>
  );
};

const quickLinksMapper = ({ href, label }: (typeof quickLinks)[number]) => (
  <a
    key={href}
    href={href}
    className="footer-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);

const contactsMapper = ({ href, label, icon }: (typeof contacts)[number]) => (
  <a
    key={href}
    href={href}
    className="footer-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="material-symbols-outlined icon">{icon}</span>
    {label}
  </a>
);

const wrapperCss = {
  borderTop: "1px solid var(--color-primary-300)",
  borderBottom: "1px solid var(--color-primary-300)",
};

const Footer = () => (
  <FooterOuterWrapper>
    <FooterContentSection element="div" bg="var(--color-primary-100)">
      <span className="title">
        Ready to ensure your assets are truly pristine?
      </span>
      <span className="sub-title">
        Our engineers are ready to perform a comprehensive audit of your
        sanitation protocols and equipment status.
      </span>
      <Button
        $color="secondary"
        $colorWeight="800"
        $textColor="primary"
        $textColorWeight="100"
        $fontWeight="700"
      >
        Consult with our experts
      </Button>
    </FooterContentSection>
    <FooterMidSection
      bg="var(--color-primary-100)"
      element="div"
      wrapperCss={wrapperCss}
    >
      <div className="footer-section long">
        <span className="title">Clean Tank Services</span>
        <span className="sub-title">
          Providing government-grade hygiene solutions for heavy-scale
          industrial and commercial water storage systems across India.
          Certified ISO 9001:2015.
        </span>
        <div className="icons-container">
          <span className="material-symbols-outlined">verified</span>
          <span className="material-symbols-outlined">workspace_premium</span>
          <span className="material-symbols-outlined">shield</span>
        </div>
      </div>
      <nav className="footer-section short nav">
        <span className="title">Quick Links</span>
        {quickLinks.map(quickLinksMapper)}
      </nav>
      <nav className="footer-section short nav">
        <span className="title">Contact</span>
        {contacts.map(contactsMapper)}
      </nav>
    </FooterMidSection>
    <FooterCopyrightSection />
  </FooterOuterWrapper>
);

export default Footer;
