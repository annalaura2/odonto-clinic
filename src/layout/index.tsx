import React from "react";
import { Footer } from "../components/footer";
import NavHero from "../components/header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <React.Fragment>
      <NavHero />
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
}
