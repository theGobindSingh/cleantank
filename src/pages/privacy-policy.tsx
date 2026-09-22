import LegalPageModule from "@modules/legal";
import {
  privacyPolicyClauses,
  privacyPolicyMeta,
} from "@modules/legal/constants";

const PrivacyPolicyPage = () => {
  return (
    <LegalPageModule {...privacyPolicyMeta} clauses={privacyPolicyClauses} />
  );
};

export default PrivacyPolicyPage;
