"use client";

import Button from "@components/button";
import { iconButtonStyles } from "@components/button/styles";
import type { InteractionVariant } from "@components/button/types";
import { iconProps } from "@components/icon";
import { useLenis } from "lenis/react";
import { XIcon } from "lucide-react";
import Image from "next/image";
import type { MouseEvent } from "react";
import { useRef } from "react";

interface DocumentDialogProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  openLabel: string;
  closeLabel: string;
  // Shown in the dialog's top bar, beside the close button.
  caption?: string | null | undefined;
  variant?: InteractionVariant | undefined;
}

/**
 * A button that opens a certificate image in a modal dialog over the scrim.
 * Escape, the close button or a click on the scrim closes it.
 */
const DocumentDialog = ({
  src,
  alt,
  width,
  height,
  openLabel,
  closeLabel,
  caption,
  variant = "outlined",
}: DocumentDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lenis = useLenis();

  const handleOpen = () => {
    dialogRef.current?.showModal();
    lenis?.stop();
  };
  const handleClose = () => {
    dialogRef.current?.close();
  };
  // Fires for Escape too, so Lenis always restarts.
  const handleClosed = () => {
    lenis?.start();
  };
  // A click on the dialog itself, not its content, is a click on the scrim.
  const handleScrimClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) handleClose();
  };

  return (
    <>
      <Button variant={variant} onClick={handleOpen}>
        {openLabel}
      </Button>
      {/* eslint-disable-next-line jsx-a11y-x/click-events-have-key-events, jsx-a11y-x/no-noninteractive-element-interactions -- the scrim click is a pointer shortcut; Escape and the close button cover keyboards */}
      <dialog
        ref={dialogRef}
        aria-label={alt}
        onClose={handleClosed}
        onClick={handleScrimClick}
        className="m-auto max-h-[90dvh] w-[min(90vw,56rem)] max-w-none overflow-hidden rounded-sm border border-border bg-surface p-0 text-fg backdrop:bg-primary-900/60"
      >
        <div className="flex items-center justify-end gap-4 border-b border-border p-2">
          {caption && (
            <p className="me-auto ps-2 text-(length:--fs-small) text-pretty text-fg-muted">
              {caption}
            </p>
          )}
          <button
            type="button"
            aria-label={closeLabel}
            onClick={handleClose}
            className={iconButtonStyles}
          >
            <XIcon {...iconProps} className="size-5" />
          </button>
        </div>
        <div
          data-lenis-prevent
          className="max-h-[calc(90dvh-3.5rem)] overflow-y-auto p-4"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1024px) 56rem, 90vw"
            className="h-auto w-full"
          />
        </div>
      </dialog>
    </>
  );
};

export default DocumentDialog;
