import Link from "next/link";
import React from "react";

function CustomIconButtonLink({ children, href }) {
  return (
    <Link href={href} target="_blank">
      <button class="Btn">
        <div class="svgContainer p-1.5">{children}</div>
        <div class="BG"></div>
      </button>
    </Link>
  );
}

export default CustomIconButtonLink;
