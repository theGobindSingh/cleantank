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
import { ContactPageWrapper } from "@modules/contact/styles";
import { ContactModuleProps } from "@modules/contact/types";
import VisualProofSection from "@modules/contact/visual-proof";

const Contact = (_: ContactModuleProps) => {
  return (
    <ContactPageWrapper>
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
    </ContactPageWrapper>
  );
};

export default Contact;
