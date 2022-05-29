import React from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Announce />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
