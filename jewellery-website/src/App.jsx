import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Collection1 from "./Components/Collection1";
import Customer from "./Components/Customer-title";
import Customerchoice from "./Components/Customer-choice";
import Banner from "./Components/Banner";
import Company from "./Components/Company";
import Bestselling from "./Components/Bestselling";
import Items from "./Components/Items";
import Design from "./Components/Design";
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
      <Navbar modeValue={modeValue} setModeValue={setModeValue} />
      <div className="row">
        <div className="cols-12">
          <Carousel modeValue={modeValue} />
        </div>
      </div>
      <div className="container">
        <div className="row row-gap-4 mt-4">
          <Collection1 imgSrc="rings" />
          <Collection1 imgSrc="diamond" />
          <Collection1 imgSrc="earrings" />
          <Collection1 imgSrc="radiance" />
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <Customer modeValue={modeValue} title="Customer Choice" />
          </div>
        </div>
        <div className="row mt-3">
          <Customerchoice
            title="Alpha S Unisex Pendent"
            price="₹5,166"
            ratings="6"
            modeValue={modeValue}
            imgSrc="chain"
          />
          <Customerchoice
            title="Rivka Ring"
            price="₹6,732"
            ratings="12"
            modeValue={modeValue}
            imgSrc="customerring"
          />
          <Customerchoice
            title="Radiating Imperial Ring"
            price="₹22,839"
            ratings="4"
            modeValue={modeValue}
            imgSrc="customearring"
          />
          <Customerchoice
            title="Grace Nose Stud"
            price="₹7,149"
            ratings="3"
            modeValue={modeValue}
            imgSrc="cs-4"
          />
        </div>
        <div className="row mt-5">
          <Banner />
        </div>
        <div className="row mt-3 mb-3">
          <Customer modeValue={modeValue} title="Popular Collection" />
        </div>
        <div className="row row-gap-3 mt-3">
          <Company imgSrc="popular1" />
          <Company imgSrc="popular2" />
          <Company imgSrc="popular3" />
          <Company imgSrc="popular4" />
          <Company imgSrc="popular5" />
          <Company imgSrc="popular6" />
          <Company imgSrc="popular7" />
          <Company imgSrc="popular8" />
          <Company imgSrc="popular9" />
          <Company imgSrc="popular10" />
          <Company imgSrc="popular11" />
          <Company imgSrc="popular12" />
        </div>
        <div className="row mt-5">
          <Customer modeValue={modeValue} title="Best Selling" />
        </div>
        <div className="row mt-4">
          <Bestselling
            modeValue={modeValue}
            title="Alpha S Unisex Pendent"
            price="₹5,166"
            imgSrc="bestsale1"
          />
          <Bestselling
            modeValue={modeValue}
            title="Alphabet A Unisex Pendent"
            price="₹5,938"
            imgSrc="bestsale2"
          />
          <Bestselling
            modeValue={modeValue}
            title="Feya Earring"
            price="₹6,593"
            imgSrc="bestsale3"
          />
          <Bestselling
            modeValue={modeValue}
            title="Blooming Flower Ring"
            price="₹9,473"
            imgSrc="bestsale4"
          />
        </div>
        <div className="row mt-5">
          <Customer modeValue={modeValue} title="All Categories" />
        </div>
        <div className="row gap-4">
          <Items imgSrc="categori1" />
          <Items imgSrc="categori2" />
          <Items imgSrc="categori3" />
          <Items imgSrc="categori4" />
          <Items imgSrc="categori5" />
          <Items imgSrc="categori6" />
          <Items imgSrc="categori7" />
          <Items imgSrc="categori8" />
          <Items imgSrc="categori9" />
          <Items imgSrc="categori10" />
        </div>
        <div className="row mt-4">
          <Customer modeValue={modeValue} title="Designs Of The Month" />
        </div>
        <div className="row mt-3 row-gap-4">
          <Design
            modeValue={modeValue}
            title="Siobhan Ring"
            price="₹12,509"
            rPrice="₹15,249"
            offer="Save 18%"
            imgSrc="design1"
          />
          <Design
            modeValue={modeValue}
            title="Rylay Solitaire Earring"
            price="₹164,687"
            imgSrc="design2"
          />
          <Design
            modeValue={modeValue}
            title="Norahi Pendent"
            price="₹69,444"
            rPrice="₹15,249"
            imgSrc="design3"
            offer="Save 2%"
          />
          <Design
            modeValue={modeValue}
            title="Spencer Watch Charm"
            price="₹3,782"
            imgSrc="design4"
          />
          <Design
            modeValue={modeValue}
            title="Sloan Watch Charm"
            price="₹4,463"
            imgSrc="design5"
          />
          <Design
            modeValue={modeValue}
            title="Tempest Ring"
            price="₹9,473"
            imgSrc="design6"
          />
          <Design
            modeValue={modeValue}
            title="Nathali Earring"
            price="₹29,505"
            rPrice="₹30,061"
            offer="Save 2%"
            imgSrc="design7"
          />
          <Design
            modeValue={modeValue}
            title="Stella Watch Charm"
            price="₹4,599"
            imgSrc="design8"
          />
        </div>
      </div>
      <Footer modeValue={modeValue} />
    </div>
  );
}

export default App;
