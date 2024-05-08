import Link from "next/link";
import React from "react";

function CustomIconButtonLink({ children, href }) {
  return (
    <Link href={href} target="_blank">
      <button class="Btn">
        <span class="svgContainer p-1.5">{children}</span>
        <span class="BG"></span>
      </button>
    </Link>
  );
}

export default CustomIconButtonLink;
