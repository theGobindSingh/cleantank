import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";
import Image from "next/image";

export const ContactPageWrapper = styled.div`
  padding-top: 2rem;
`;

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
  padding: 0;
  border-radius: 0.25rem;
  background: none;
  border: none;

  .form-intro,
  .form-actions {
    grid-column: 1 / -1;
    padding-bottom: 2rem;
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
    .form-intro,
    .form-actions {
      padding-bottom: 1.25rem;
    }
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

export const contactControlStyles = css`
  width: 100%;
  min-height: 2.7rem;
  border: 1px solid rgba(var(--color-primary-400-base), 0.28);
  border-radius: 0.25rem;
  background-color: var(--color-neutral-1100, #fff);
  color: var(--color-neutral-100);
  font-family: var(--font-sans);
  font-size: var(--fs-2xs);
  outline: none;
  padding: 0.78rem 0.9rem;
  transition:
    border-color 0.18s ease,
    box-shadow 0.17s ease;

  &::placeholder {
    color: rgba(var(--color-neutral-500-base), 0.55);
    font-weight: 400;
  }

  &:focus {
    border-color: var(--color-secondary-500);
    box-shadow: 0 0 0 2.5px rgba(var(--color-secondary-700-base), 0.08);
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
  gap: 1.45rem;
  padding: 1.55rem 1.25rem 1.6rem 1.25rem;
  border-radius: 0.65rem;
  background: var(--color-primary-100);
  color: var(--color-primary-1000);
  box-shadow: 0 0.5px 20px 0 rgba(30, 34, 54, 0.1);
  min-width: 0;
`;

export const ContactMethodRow = styled.div`
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: 1.1rem;
  align-items: start;
  padding-bottom: 0.85rem;
  margin-bottom: 0.5rem;
  border: none;

  .method-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(83, 116, 235, 0.09);
    color: var(--color-primary-1000);
    opacity: 1;
  }

  .method-icon svg {
    font-size: 1.18rem;
  }

  .method-icon svg {
    font-size: 1.18rem;
  }

  .method-content {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.18rem;
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2.4rem;
  width: 100%;
  margin-top: 2.75rem;

  @media (min-width: 900px) {
    flex-direction: row;
    gap: 2.25rem;
  }

  ${mediaQuery.phone} {
    gap: 1.15rem;
    margin-top: 2rem;
  }
`;

export const VisualProofImageFrame = styled.div`
  position: relative;
  width: 100%;
  min-height: 21rem;
  overflow: hidden;
  border-radius: 0.7rem;
  background: none;
  box-shadow: 0 2.5px 18px 0 rgba(var(--color-neutral-900-base), 0.045);

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
  grid-template-columns: 2rem 1fr;
  gap: 0.7rem;
  align-items: center;
  padding: 0.65rem 0;
  border: none;

  .proof-icon {
    color: var(--color-secondary-600);
    font-size: 1.18rem;
    opacity: 0.82;
  }
`;
