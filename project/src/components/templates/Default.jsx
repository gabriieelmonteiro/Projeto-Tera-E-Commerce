import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import React from "react";

export default function Default(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
