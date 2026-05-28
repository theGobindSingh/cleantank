import {
  contactFormFields,
  contactGoogleFormConfig,
  contactMethods,
  contactSubmitText,
  reachOutSectionMeta,
  visualProofImage,
  visualProofImageAlt,
  visualProofItems,
  visualProofSectionMeta,
} from "@modules/contact/constants";
import ReachOutSection from "@modules/contact/reach-out";
import { ContactModuleProps } from "@modules/contact/types";
import VisualProofSection from "@modules/contact/visual-proof";
import { Fragment } from "react";

const Contact = (_: ContactModuleProps) => {
  return (
    <Fragment>
      <ReachOutSection
        {...reachOutSectionMeta}
        fields={contactFormFields}
        gFormConfig={contactGoogleFormConfig}
        methods={contactMethods}
        submitText={contactSubmitText}
      />
      <VisualProofSection
        {...visualProofSectionMeta}
        image={visualProofImage}
        imageAlt={visualProofImageAlt}
        proofItems={visualProofItems}
      />
    </Fragment>
  );
};

export default Contact;
