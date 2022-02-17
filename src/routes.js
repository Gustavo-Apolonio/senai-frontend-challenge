import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import RedirectLogin from "./pages/redirect_/login/redirect.login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectLogin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
