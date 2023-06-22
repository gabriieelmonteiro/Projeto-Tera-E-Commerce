import HeaderLogin from "../organisms/HeaderLogin";
import Footer from "../organisms/Footer";

import React from "react";

export default function DefaultLogin(props) {
  return (
    <div>
      <HeaderLogin />
      {props.children}
      <Footer />
    </div>
  );
}
