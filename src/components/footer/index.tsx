import Button from "@components/button";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import {
  FooterContentSection,
  FooterMidSection,
  FooterOuterWrapper,
} from "@components/footer/styles";
import {
  brand,
  contact,
  footerNavLinks,
  iso,
  legalLinks,
  offices,
} from "@constants";
import { Interpolation, Theme } from "@emotion/react";
import {
  EmailRounded,
  PhoneRounded,
  ShieldRounded,
  SvgIconComponent,
  VerifiedRounded,
  WorkspacePremiumRounded,
} from "@mui/icons-material";
import Link from "next/link";
import { useEffect, useState } from "react";

const contacts: {
  label: string;
  href: string;
  icon?: SvgIconComponent;
}[] = [
  {
    label: contact.primaryPhone.label,
    href: contact.primaryPhone.href,
    icon: PhoneRounded,
  },
  {
    label: contact.emails.admin.label,
    href: contact.emails.admin.href,
    icon: EmailRounded,
  },
  {
    label: contact.emails.gobindGalaxy.label,
    href: contact.emails.gobindGalaxy.href,
    icon: EmailRounded,
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

    setCurrentYear(year.toString());
  }, []);
  return (
    <CommonFullWidthWrapper
      element="div"
      bg="var(--color-primary-100)"
      css={css}
    >
      {`© ${currentYear} GOBIND GALAXY / CLEAN TANK SERVICES. All Rights Reserved.`}
    </CommonFullWidthWrapper>
  );
};

const contactsMapper = ({
  href,
  label,
  icon: Icon,
}: (typeof contacts)[number]) => {
  return (
    <a
      key={href}
      href={href}
      className="footer-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon && <Icon className="icon" />}
      {label}
    </a>
  );
};

const navLinkMapper = ({ name, path }: (typeof footerNavLinks)[number]) => {
  return (
    <Link key={name} href={path} className="footer-link">
      {name}
    </Link>
  );
};

const legalLinkMapper = ({ name, path }: (typeof legalLinks)[number]) => {
  return (
    <Link key={name} href={path} className="footer-link">
      {name}
    </Link>
  );
};

const officeMapper = ({ label, address, phone }: (typeof offices)[number]) => {
  return (
    <span key={label} className="office">
      <span className="office-label">{label}</span>
      <span className="office-address">{address}</span>
      <span className="office-phone">{`+91 ${phone}`}</span>
    </span>
  );
};

const wrapperCss = {
  borderTop: "1px solid var(--color-primary-300)",
  borderBottom: "1px solid var(--color-primary-300)",
};

const Footer = () => {
  return (
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
          <span className="title">{brand.name}</span>
          <span className="sub-title">
            {brand.brandLine} — {brand.descriptor}. {iso.safeWording}
          </span>
          <div className="icons-container">
            <VerifiedRounded />
            <WorkspacePremiumRounded />
            <ShieldRounded />
          </div>
        </div>
        <nav className="footer-section short nav">
          <span className="title">Navigate</span>
          {footerNavLinks.map(navLinkMapper)}
          {legalLinks.map(legalLinkMapper)}
        </nav>
        <nav className="footer-section short nav">
          <span className="title">Contact</span>
          {contacts.map(contactsMapper)}
        </nav>
        <div className="footer-section short offices">
          <span className="title">Offices</span>
          {offices.map(officeMapper)}
        </div>
      </FooterMidSection>
      <FooterCopyrightSection />
    </FooterOuterWrapper>
  );
};

export default Footer;
