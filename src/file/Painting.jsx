import React from "react";
import Cards from "./Cards";
import Painter from "./painter1.jpg";
import Carp from "./carp.jpg";
//import Gardener from "./gardener.webp";
import { Link } from "react-router-dom";
import tharu from "./tharu.jpg";
//import swe from "./swe.jpg";
import varsha from "./varsha.jpg";
//import sachu from "./sachu.jpg";

const Painting = () => {
  const artists = [
    {
      title: "THARUNIKA",
      imageSrc: tharu,
      num: "9089605949",
      year: "2",
      serve: "Painting,Plumbing",
      rate: "4.8",
      address:
        "2G6V+RQ9, 4th Cross Rd, Mahalakshmipuram Layout, Mahalakshmi Layout Bangalore - 560086",
    },
    {
      title: "VARSHA",
      imageSrc: varsha,
      num: "9089605949",
      year: "2",
      serve: "Painting,Plumbing",
      rate: "4.8",
      address:
        "2G6V+RQ9, 4th Cross Rd, Mahalakshmipuram Layout, Mahalakshmi Layout Bangalore - 560086",
    },
    {
      title: "SURESH",
      imageSrc: Painter,
      num: "9189605949",
      year: "12",
      serve: "Painting",
      rate: "4.0",
      address:
        "2G6V+RQ9, 4th Cross Rd, Mahalakshmipuram Layout, Mahalakshmi LayoutBangalore - 560086",
    },
  ];
  const artists2 = [
    {
      title: "GANESH",
      imageSrc: tharu,
      num: "9089605949",
      year: "2",
      serve: "Painting,Plumbing",
      rate: "4.8",
      address:
        "2G6V+RQ9, 4th Cross Rd, Mahalakshmipuram Layout, Mahalakshmi Layout Bangalore - 560086",
    },
    {
      title: "RAMESH",
      imageSrc: Carp,
      num: "9359605949",
      year: "3",
      serve: "Painting,Gardening",
      rate: "4.2",
      address:
        "2G6V+RQ9, 4th Cross Rd, Mahalakshmipuram Layout, Mahalakshmi LayoutBangalore - 560086",
    },
    {
      title: "SHREERAM",
      imageSrc: Painter,
      num: "9189605949",
      year: "12",
      serve: "Painting,Electrian",
      rate: "3.5",
      address:
        "2G6V+RQ9, 4th Cross Rd, Mahalakshmipuram Layout, Mahalakshmi LayoutBangalore - 560086",
    },
  ];
  const artists3 = [
    {
      title: "GOPAL",
      imageSrc: tharu,
      num: "9089605786",
      year: "3",
      serve: "Painting",
      rate: "4.5",
      address: "no:6,Dr.Radha Krishna puram green ways road chennai-600028",
    },
    {
      title: "SAM",
      imageSrc: Painter,
      num: "9089671949",
      year: "9",
      serve: "Painting,Plumbing",
      rate: "4.8",
      address: "No:1 ,Cholan Street,Mylapore,Chennai-600004",
    },
    {
      title: "BASKAR",
      imageSrc: Painter,
      num: "6458605949",
      year: "10",
      serve: "Painting",
      rate: "4.6",
      address: "no:45,Mulai Street,T.Nagar,Chennai-600017",
    },
  ];
  return (
    <div className="painting">
      <div className="artist-list">
        <ul style={{ paddingTop: 50 }}>
          {artists.map((artist, index) => (
            <li key={index}>
              <Link to={`/Details/${artist.title}`} className="my">
                <Cards {...artist} />
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {artists2.map((artist, index) => (
            <li key={index}>
              <Link to={`/Details/${artist.title}`} className="my">
                <Cards {...artist} />
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {artists3.map((artist, index) => (
            <li key={index}>
              <Link to={`/Details/${artist.title}`} className="my">
                <Cards {...artist} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Painting;
