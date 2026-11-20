import { site } from "@/site";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import Link from "@components/link";
import WhatsappLink from "@components/whatsapp-link";
import type { Dictionary } from "@i18n";
import { telHref } from "@utils/phone";

interface ContactBarProps {
  labels: Dictionary["contact"];
}

/** Phones only: Call and WhatsApp fixed to the bottom of the screen. Its height is --contact-bar-height (defaults.css). */
const ContactBar = ({ labels }: ContactBarProps) => {
  return (
    <CommonFullWidthWrapper
      element="nav"
      wrapperProps={{ "aria-label": labels.title }}
      wrapperClassName="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden"
      className="grid grid-cols-2 gap-3"
    >
      <Link
        href={telHref(site.phone)}
        variant="filled"
        className="justify-center"
      >
        {labels.call}
      </Link>
      <WhatsappLink
        labels={labels}
        variant="outlined"
        className="justify-center"
      >
        {labels.whatsapp}
      </WhatsappLink>
    </CommonFullWidthWrapper>
  );
};

export default ContactBar;
