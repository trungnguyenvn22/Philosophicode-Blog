import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </div>
  );
};

export default HomePage;
