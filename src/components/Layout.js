import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
