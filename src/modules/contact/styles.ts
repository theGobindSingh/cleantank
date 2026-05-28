import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";
import Image from "next/image";

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) minmax(18rem, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 2.75rem;
  align-items: start;

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;
  }

  ${mediaQuery.phone} {
    gap: 1.25rem;
    margin-top: 2rem;
  }
`;

export const ContactFormCard = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.15rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: rgba(var(--color-primary-1000-base), 0.88);
  border: 1px solid rgba(var(--color-primary-700-base), 0.55);

  .form-intro,
  .form-actions {
    grid-column: 1 / -1;
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
    padding: 1.25rem;
  }
`;

export const ContactFormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &.wide {
    grid-column: 1 / -1;
  }
`;

export const ContactFormLabel = styled.label`
  font-family: var(--font-sans);
  font-size: var(--fs-3xs);
  font-weight: 600;
  color: var(--color-primary-200);
  text-transform: uppercase;
`;

export const contactControlStyles = `
  width: 100%;
  min-height: 3rem;
  border: 1px solid rgba(var(--color-primary-500-base), 0.35);
  border-radius: 0.375rem;
  background-color: var(--color-neutral-1000);
  color: var(--color-neutral-100);
  font-family: var(--font-sans);
  font-size: var(--fs-2xs);
  outline: none;
  padding: 0.85rem 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: rgba(var(--color-neutral-500-base), 0.75);
  }

  &:focus {
    border-color: var(--color-secondary-600);
    box-shadow: 0 0 0 3px rgba(var(--color-secondary-700-base), 0.18);
  }
`;

export const ContactFormInput = styled.input`
  ${contactControlStyles}
`;

export const ContactFormSelect = styled.select`
  ${contactControlStyles}
  cursor: pointer;
`;

export const ContactFormTextarea = styled.textarea`
  ${contactControlStyles}
  min-height: 8rem;
  resize: vertical;
`;

export const ContactDetailsPanel = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--color-primary-100);
  color: var(--color-accent-1000);

  ${mediaQuery.phone} {
    padding: 1.25rem;
  }
`;

export const ContactMethodRow = styled.div`
  display: grid;
  grid-template-columns: 2.75rem 1fr;
  gap: 0.85rem;
  align-items: start;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--color-primary-400-base), 0.55);

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .method-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 0.375rem;
    background-color: rgba(var(--color-secondary-700-base), 0.16);
    color: var(--color-secondary-800);
  }

  .method-icon svg {
    font-size: var(--fs-m);
  }

  .method-content {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .method-link {
    color: inherit;
    text-decoration: none;
    overflow-wrap: anywhere;
    transition: color 0.2s ease;
  }

  .method-link:hover {
    color: var(--color-secondary-800);
  }
`;

export const VisualProofBody = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.72fr);
  gap: 2rem;
  width: 100%;
  margin-top: 2.75rem;
  align-items: stretch;

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;
  }

  ${mediaQuery.phone} {
    gap: 1.25rem;
    margin-top: 2rem;
  }
`;

export const VisualProofImageFrame = styled.div`
  position: relative;
  width: 100%;
  min-height: 25rem;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: var(--color-primary-100);

  ${mediaQuery.nonDesktop} {
    min-height: auto;
    aspect-ratio: 16 / 9;
  }
`;

export const VisualProofImage = styled(Image)`
  position: absolute !important;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
`;

export const ProofStrip = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  ${mediaQuery.phone} {
    gap: 0.75rem;
  }
`;

export const ProofItem = styled.li`
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: 0.85rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(var(--color-neutral-700-base), 0.45);

  &:last-child {
    border-bottom: 0;
  }

  .proof-icon {
    color: var(--color-secondary-600);
    font-size: var(--fs-m);
  }
`;
