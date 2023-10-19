import React, { Fragment } from "react";
import HeaderPage from "./HeaderPage";
import HomeBanner from "../../module/home/HomeBanner";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <HeaderPage></HeaderPage>
      <HomeBanner></HomeBanner>
      {children}
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;
