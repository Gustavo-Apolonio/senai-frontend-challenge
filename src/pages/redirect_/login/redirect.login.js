import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paragraph } from "./styled";

export default function RedirectLogin() {
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigation("/login");
    }, 2000);
  }, [navigation]);

  return <Paragraph>Redirecting...</Paragraph>;
}
