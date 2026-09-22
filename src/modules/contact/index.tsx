import {
  contactFormFields,
  contactGoogleFormConfig,
  contactMethods,
  contactSubmitText,
  enquiryTypeItems,
  officesGstin,
  officesIsoWording,
  officesList,
  officesPan,
  officesSectionMeta,
  presenceEmergencyLine,
  presenceImage,
  presenceImageAlt,
  presenceSectionMeta,
  presenceStates,
  presenceTechnicalRepresentativesLine,
  reachOutSectionMeta,
} from "@modules/contact/constants";
import OfficesSection from "@modules/contact/offices";
import PresenceSection from "@modules/contact/presence";
import ReachOutSection from "@modules/contact/reach-out";
import { ContactPageWrapper } from "@modules/contact/styles";
import { ContactModuleProps } from "@modules/contact/types";

const Contact = (_: ContactModuleProps) => {
  return (
    <ContactPageWrapper>
      <ReachOutSection
        {...reachOutSectionMeta}
        enquiryTypes={enquiryTypeItems}
        fields={contactFormFields}
        gFormConfig={contactGoogleFormConfig}
        methods={contactMethods}
        submitText={contactSubmitText}
      />
      <OfficesSection
        {...officesSectionMeta}
        offices={officesList}
        gstin={officesGstin}
        pan={officesPan}
        isoWording={officesIsoWording}
      />
      <PresenceSection
        {...presenceSectionMeta}
        image={presenceImage}
        imageAlt={presenceImageAlt}
        states={presenceStates}
        technicalRepresentativesLine={presenceTechnicalRepresentativesLine}
        emergencyLine={presenceEmergencyLine}
      />
    </ContactPageWrapper>
  );
};

export default Contact;
