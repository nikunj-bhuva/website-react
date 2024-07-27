import React from "react";
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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Collection1></Collection1>
      <Collection2></Collection2>
      <Customer></Customer>
      <Customerchoice></Customerchoice>
      <Banner></Banner>
      <Popular></Popular>
      <Company></Company>
      <Company2></Company2>
      <Bestselltitle></Bestselltitle>
      <Bestselling></Bestselling>
      <Categories></Categories>
      <Items></Items>
      <Items2></Items2>
      <Month></Month>
      <Design></Design>
      <Design2></Design2>
      <Footer></Footer>
    </div>
  );
}

export default App;
