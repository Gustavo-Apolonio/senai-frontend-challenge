import React from "react";
import Footer from "../footer";
import Header from "../header";
import { Container, Contenter } from "./styled";

export default function Content(props) {
  return (
    <Container>
      <Header />
      <Contenter>{props.children}</Contenter>
      <Footer />
    </Container>
  );
}
