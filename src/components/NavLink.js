import React from "react";
import { useLocation, Link } from "react-router-dom";

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      style={{ fontWeight: isActive ? "bold" : "" }} // Example style change for active link
    >
      {children}
    </Link>
  );
}

export default NavLink;
