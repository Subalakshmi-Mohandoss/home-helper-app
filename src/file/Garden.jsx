import React from "react";
import Cards from "./Cards";
import Painter from "./painter1.jpg";
import Carp from "./carp.jpg";
import Gardener from "./gardener.webp";
import { Link } from "react-router-dom";
const Garden = () => {
  return (
    <div className="painting">
      <ul style={{ paddingTop: 50 }}>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="KUMAR"
              imageSrc={
                "https://img.freepik.com/premium-photo/young-indian-poor-man-standing-nature-background_75648-3206.jpg"
              }
              num="9089605949"
              year="2"
              serve="Gardening,Plumbing"
              rate="4.8"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="MUTHU"
              imageSrc={
                "https://as2.ftcdn.net/v2/jpg/04/02/59/03/1000_F_402590304_xP4B00SlaaigA02D0xUVufnwHX3LijZV.jpg"
              }
              num="9286800949"
              year="8"
              serve="Gardening"
              rate="4.3"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="SURESH"
              imageSrc={
                "https://thumbs.dreamstime.com/b/portrait-indian-man-local-morning-market-hospet-karnata-karnataka-south-india-125687042.jpg"
              }
              num="9189605949"
              year="12"
              serve="Gardening"
              rate="4.0"
            />
          </Link>
        </li>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="VELU"
              imageSrc={Carp}
              num="9359605949"
              year="3"
              serve="Painting,Gardening"
              rate="4.2"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="DOLU"
              imageSrc={
                "https://media.istockphoto.com/id/939194718/photo/old-age-indian-man-portrait-at-outdoor.jpg?s=612x612&w=0&k=20&c=874l6agIVEXT22fjC6LfdFpjf6J_AZjH-XtRRsAWIao="
              }
              num="7410005949"
              year="4"
              serve="Gardening"
              rate="4.7"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="BOLU"
              imageSrc={
                "https://thumbs.dreamstime.com/b/june-paschim-vihar-delhi-uncle-standing-field-uncle-standing-field-256129805.jpg"
              }
              num="6239605949"
              year="6"
              serve="Gardening"
              rate="4.8"
            />
          </Link>
        </li>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="NOBITA"
              imageSrc={Carp}
              num="7789605949"
              year="2"
              serve="Gardening"
              rate="4.6"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="BEN"
              imageSrc={Gardener}
              num="9989605949"
              year="8"
              serve="Gardening"
              rate="4.1"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="PRIYA"
              imageSrc={Painter}
              num="7078960549"
              year="3"
              serve="Gardening"
              rate="4.0"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Garden;
