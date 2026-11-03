import { UploadField } from "@payloadcms/ui";
import type { UploadFieldServerProps } from "payload";
import { logoFolderId } from "../logo-hooks";
import LogoUploadDrawer from "./drawer";

/** Payload's upload field, with uploads made through it locked to Client logos. */
const LogoField = async ({
  clientField,
  path,
  payload,
  permissions,
  readOnly,
  schemaPath,
}: UploadFieldServerProps) => {
  return (
    <LogoUploadDrawer folderID={await logoFolderId(payload)}>
      <UploadField
        field={clientField}
        path={path}
        permissions={permissions}
        readOnly={readOnly ?? false}
        {...(schemaPath && { schemaPath })}
      />
    </LogoUploadDrawer>
  );
};

export default LogoField;
