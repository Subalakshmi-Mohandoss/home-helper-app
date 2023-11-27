import React from "react";
import Cards from "./Cards";
import Painter from "./painter1.jpg";
import Carp from "./carp.jpg";
import Gardener from "./gardener.webp";
import { Link } from "react-router-dom";

const Plumb = () => {
  return (
    <div className="painting">
      <ul style={{ paddingTop: 50 }}>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="MAYA"
              imageSrc={Painter}
              num="9089605949"
              year="2"
              serve="Painting,Plumbing"
              rate="4.8"
            />
          </Link>
          &emsp;&emsp;
          <Cards
            title="RIYA"
            imageSrc={Painter}
            num="9286800949"
            year="8"
            serve="Plumbing"
            rate="4.3"
          />
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="SIYA"
              imageSrc={Painter}
              num="9189605949"
              year="12"
              serve="Plumbing"
              rate="4.0"
            />
          </Link>
        </li>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="SEETHA"
              imageSrc={Carp}
              num="9359605949"
              year="3"
              serve="Plumbing"
              rate="4.2"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="ANJALI"
              imageSrc={Gardener}
              num="7410005949"
              year="4"
              serve="Plumbing"
              rate="4.7"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="MANJU"
              imageSrc={Painter}
              num="6239605949"
              year="6"
              serve="Plumbing"
              rate="4.8"
            />
          </Link>
        </li>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="THARUNIKA"
              imageSrc={Carp}
              num="7789605949"
              year="2"
              serve="Plumbing"
              rate="4.6"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="HELEN"
              imageSrc={Gardener}
              num="9989605949"
              year="8"
              serve="Plumbing"
              rate="4.1"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="MANI"
              imageSrc={Painter}
              num="7078960549"
              year="3"
              serve="Plumbing"
              rate="4.0"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Plumb;
