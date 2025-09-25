import React from "react";
import TableWithPagination from "../components/TableWithPagination";
import PortalDemo from "../components/PortalDemo";
import PasswordStrength from "../components/PasswordStrength";

export default function Utilities() {
  return (
    <div>
      <h2>Utilities</h2>
      <TableWithPagination />
      <PortalDemo />
      <PasswordStrength />
    </div>
  );
}
