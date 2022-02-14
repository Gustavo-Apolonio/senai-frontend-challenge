import React from "react";

import Logo from "../../assets/images/logo-senai.jpg";
import { Container } from "./styled";

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo SENAI" />
      <h1>Portal Educacional SENAI</h1>
    </Container>
  );
}
