import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Collection1 from "./Components/Collection1";
import Collection2 from "./Components/Collection2";
import Customer from "./Components/Customer-title";
import Customerchoice from "./Components/Customer-choice";
import Banner from "./Components/Banner";
import Popular from "./Components/Popular-title";
import Company from "./Components/Company";
import Company2 from "./Components/Company2";
import Bestselltitle from "./Components/Bestsell-title";
import Bestselling from "./Components/Bestselling";
import Categories from "./Components/Categorietitle";
import Items from "./Components/Items";
import Items2 from "./Components/Items2";
import Month from "./Components/Month-title";
import Design from "./Components/Design";
import Design2 from "./Components/Design2";
import Footer from "./Components/Footer";
import "../src/App.css";

function App() {
  let [modeValue, setModeValue] = useState(false);

  return (
    <div
      className={`${
        modeValue ? "dark-mode-body-dark" : "dark-mode-body-light"
      }`}
    >
      <Navbar modeValue={modeValue} setModeValue={setModeValue}></Navbar>
      <Carousel modeValue={modeValue}></Carousel>
      <Collection1></Collection1>
      <Collection2></Collection2>
      <Customer modeValue={modeValue}></Customer>
      <Customerchoice modeValue={modeValue}></Customerchoice>
      <Banner></Banner>
      <Popular modeValue={modeValue}></Popular>
      <Company></Company>
      <Company2></Company2>
      <Bestselltitle modeValue={modeValue}></Bestselltitle>
      <Bestselling modeValue={modeValue}></Bestselling>
      <Categories modeValue={modeValue}></Categories>
      <Items></Items>
      <Items2></Items2>
      <Month modeValue={modeValue}></Month>
      <Design modeValue={modeValue}></Design>
      <Design2 modeValue={modeValue}></Design2>
      <Footer modeValue={modeValue}></Footer>
    </div>
  );
}

export default App;
