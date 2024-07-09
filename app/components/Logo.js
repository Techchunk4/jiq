import React from "react";
import Link from "next/link";

const Logo = () => (
  <Link href="/">
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref="/logo.svg#logo" />
    </svg>
  </Link>
);

export default Logo;
