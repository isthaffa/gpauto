import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollUpButton from "../components/ScrollUp/Scrollup";
import { pageScrollUp } from "../helper/main";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    pageScrollUp();
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollUpButton />
    </>
  );
};

export default Main;
