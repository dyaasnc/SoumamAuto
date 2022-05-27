import React from "react";
import Announce from "../components/Announce";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Announce />
      <NavBar />
      <Slider />
    </div>
  );
}

export default Home;
