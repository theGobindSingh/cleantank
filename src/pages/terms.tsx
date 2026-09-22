import LegalPageModule from "@modules/legal";
import { termsClauses, termsMeta } from "@modules/legal/constants";

const TermsPage = () => {
  return <LegalPageModule {...termsMeta} clauses={termsClauses} />;
};

export default TermsPage;
