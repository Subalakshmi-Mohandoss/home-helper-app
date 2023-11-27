import React from "react";
import Cards from "./Cards";
import Painter from "./painter1.jpg";
import Carp from "./carp.jpg";
import { Link } from "react-router-dom";
import Gardener from "./gardener.webp";

const Caring = () => {
  return (
    <div className="painting">
      <ul style={{ paddingTop: 50 }}>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="SAM"
              imageSrc={
                "https://www.bookmybai.com/files/Thumbs/CID_199160_637689426722670590-199160-Photo-.jpeg"
              }
              num="9089605949"
              year="2"
              serve="Caring"
              rate="4.8"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="SHEELA"
              imageSrc={
                "https://www.bookmybai.com/files/Thumbs/Rupali_Avale_3462512423.jpg"
              }
              num="9286800949"
              year="8"
              serve="Caring"
              rate="4.3"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="THARU"
              imageSrc={
                "https://www.bookmybai.com/files/Thumbs/Rekha_Subhash_Kasdekar_82237.jpg"
              }
              num="9189605949"
              year="12"
              serve="Caring"
              rate="4.0"
            />
          </Link>
        </li>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="DINA"
              imageSrc={
                "https://www.bookmybai.com/files/Thumbs/CID_228481_638249536602935860-228481-PHOTO.jpeg"
              }
              num="9359605949"
              year="3"
              serve="Caring"
              rate="4.2"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="HELEN"
              imageSrc={
                "https://thumbs.dreamstime.com/b/portrait-indian-business-woman-15923252.jpg"
              }
              num="7410005949"
              year="4"
              serve="Caring"
              rate="4.7"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="MEENA"
              imageSrc={
                "https://tse1.mm.bing.net/th?id=OIP.XaealK91W-m9TVxe90H7vwHaHc&pid=Api&P=0&h=180"
              }
              num="6239605949"
              year="6"
              serve="Caring"
              rate="4.8"
            />
          </Link>
        </li>
        <li>
          <Link to="/Details" className="my">
            <Cards
              title="KIKI"
              imageSrc={
                "https://d36tnp772eyphs.cloudfront.net/blogs/1/2016/03/India17real.jpg"
              }
              num="7789605949"
              year="2"
              serve="Caring"
              rate="4.6"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="SHILPA"
              imageSrc={
                "https://tse2.mm.bing.net/th?id=OIP.3fvdtwxgQycTc7dvs4jPEgHaKH&pid=Api&P=0&h=180"
              }
              num="9989605949"
              year="8"
              serve="Caring"
              rate="4.1"
            />
          </Link>
          &emsp;&emsp;
          <Link to="/Details" className="my">
            <Cards
              title="SARA"
              imageSrc={
                "https://s3-ap-southeast-1.amazonaws.com/scrollstorage/1434464084-1187_1.png"
              }
              num="7078960549"
              year="3"
              serve="Caring"
              rate="4.0"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Caring;
