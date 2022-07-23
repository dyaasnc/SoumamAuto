import React from "react";
import Announce from "../components/Announce";
// import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TopProducts from "../components/TopProducts";
import Slider from "../components/Slider";
import ProductP from "./ProductP";

function Home() {
  return (
    <div>
      <Announce />
      <NavBar />
      <Slider />
      {/* <Categories /> */}
      <TopProducts />
      <Footer />
    </div>
  );
}

export default Home;
