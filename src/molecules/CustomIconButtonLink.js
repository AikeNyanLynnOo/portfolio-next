import Link from "next/link";
import React from "react";

function CustomIconButtonLink({ children, href }) {
  return (
    // <Link href={href}>
    <button class="Btn">
      <span class="svgContainer">{children}</span>
      <span class="BG"></span>
    </button>
    // </Link>
  );
}

export default CustomIconButtonLink;
