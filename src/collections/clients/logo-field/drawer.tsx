"use client";

import { BulkUploadProvider, useBulkUpload, useModal } from "@payloadcms/ui";
import { useEffect, type MouseEvent, type ReactNode } from "react";
import "./drawer.css";

interface Props {
  folderID: number;
  children: ReactNode;
}

/**
 * Keeps the bulk upload's folder on Client logos. Payload clears it each time
 * the drawer closes, so it is set again whenever it drifts.
 */
const LockedFolder = ({ folderID, children }: Props) => {
  const bulkUpload = useBulkUpload();
  const { openModal } = useModal();
  const { folderID: current, setFolderID } = bulkUpload;

  const lockFolder = () => {
    if (current !== folderID) setFolderID(folderID);
  };
  useEffect(lockFolder, [current, folderID, setFolderID]);

  // "Create new" on a single upload field opens the plain document drawer,
  // which has no way to preset a folder; send it to the bulk upload drawer.
  const redirectCreateNew = (event: MouseEvent) => {
    const { target } = event;
    if (!(target instanceof Element)) return;
    if (!target.closest(".upload__createNewToggler")) return;
    event.preventDefault();
    event.stopPropagation();
    bulkUpload.setCollectionSlug("media");
    bulkUpload.setMaxFiles(1);
    openModal(bulkUpload.drawerSlug);
  };

  return <div onClickCapture={redirectCreateNew}>{children}</div>;
};

/** Gives the logo field its own bulk upload drawer, so other fields keep a free folder choice. */
const LogoUploadDrawer = (props: Props) => {
  return (
    <BulkUploadProvider drawerSlugPrefix="client-logo">
      <LockedFolder {...props} />
    </BulkUploadProvider>
  );
};

export default LogoUploadDrawer;
