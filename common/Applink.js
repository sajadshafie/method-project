import React from "react";

//Next link
import Link from "next/link";

//style
import style from "./style.module.scss";

//Link Global
export default function Applink({ children, href }) {
  return (
    <Link href={href} className={style.link}>
      {children}
    </Link>
  );
}
