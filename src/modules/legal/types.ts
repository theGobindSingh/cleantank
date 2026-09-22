export interface LegalClause {
  heading: string;
  body: string;
}

export interface LegalPageMeta {
  chip?: string | undefined;
  title: string;
  description?: string | undefined;
}

export interface LegalPageModuleProps extends LegalPageMeta {
  intro?: string | undefined;
  clauses: LegalClause[];
}
