import React from "react";
import Cards from "./Cards";
import Painter from "./painter1.jpg";
import Carp from "./carp.jpg";
import Gardener from "./gardener.webp";
import { Link } from "react-router-dom";

const Carpent = () => {
  return (
    <div className="painting">
      <ul style={{ paddingTop: 50 }}>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="RAMESH"
              imageSrc={Painter}
              num="9089605949"
              year="2"
              serve="Carpenter,Plumbing"
              rate="4.8"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="MANI"
              imageSrc={Painter}
              num="9286800949"
              year="8"
              serve="Carpenter"
              rate="4.3"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="SURYA"
              imageSrc={Painter}
              num="9189605949"
              year="12"
              serve="Carpenter"
              rate="4.0"
            />
          </Link>
        </li>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="THARUNIKA"
              imageSrc={Carp}
              num="9359605949"
              year="3"
              serve="Carpenter,Painting,Gardening"
              rate="4.2"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="HELEN"
              imageSrc={Gardener}
              num="7410005949"
              year="4"
              serve="Carpenter,Painting"
              rate="4.7"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="KARTHICK"
              imageSrc={Painter}
              num="6239605949"
              year="6"
              serve="Carpenter"
              rate="4.8"
            />
          </Link>
        </li>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="MAX"
              imageSrc={Carp}
              num="7789605949"
              year="2"
              serve="Carpenter"
              rate="4.6"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="RAMESH"
              imageSrc={Gardener}
              num="9989605949"
              year="8"
              serve="Carpenter"
              rate="4.1"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="MUTHU"
              imageSrc={
                "https://tse1.mm.bing.net/th?id=OIP.8By1ib0mKXq0AwXBYZgzGAHaE8&pid=Api&P=0&h=180"
              }
              num="7078960549"
              year="3"
              serve="Carpenter"
              rate="4.0"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Carpent;
