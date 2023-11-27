import React from "react";
import Dcard from "./Dcard";
import tharu from "./tharu.jpg";
const Details = (title, imageSrc, num, year, serve, rate) => {
  return (
    <div
      style={{
        color: "black",
      }}
    >
      <div
        className="helo"
        style={{
          margin: -2,
          padding: 0,
          width: 2050,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
        }}
      >
        <ul>
          <li>VERIFIED EXPERTS &emsp; </li>
          <li style={{ height: 50 }}>
            &emsp;&emsp;&emsp;&#9733; &#9733; &#9733; &#9733; &#9733;
            <br></br>
            REVIEWED BY MILLIONS &emsp;
          </li>
          <li>FREE QUOTES</li>
        </ul>
      </div>
      <div
        style={{
          margin: -2,
          padding: 0,
          width: 2050,
          height: 102,
          fontSize: "italic",
          fontWeight: "bold",
          fontSize: 20,
          backgroundColor: "rgb(230, 227, 249)",
          color: "rgb(46, 37, 104)",
        }}
      >
        <br></br>
        <br></br>
        &emsp;HOMERX
      </div>
      <div className="app-conta" style={{ height: 800, marginTop: 0 }}>
        <div className="half-pag">
          <div className="boxe" style={{ marginLeft: 200, marginTop: 70 }}>
            {/* <Dcard
              title={title}
              imageSrc={imageSrc}
              num={num}
              year={year}
              serve={serve}
              rate={rate}
              place="2G6V+RQ9, 4th Cross Rd, Mahalakshmipuram Layout, Mahalakshmi Layout
              Bangalore - 560086"
            /> */}
            <Dcard
              title="THARUNIKA"
              imageSrc={tharu}
              num="9089605949"
              year="2"
              serve="Painting,Plumbing"
              rate="4.8"
              place="2G6V+RQ9, 4th Cross Rd, Mahalakshmipuram Layout, Mahalakshmi Layout
              Bangalore - 560086"
            />
          </div>
        </div>
        <div className="half-pag white-background">
          <center>
            <div
              className="boxe"
              style={{
                color: "black",
                fontSize: 40,
                textAlign: "left",
                marginTop: 70,
              }}
            >
              <p style={{ color: "black", fontSize: 30 }}>About</p>
              <p className="gh">
                We are Global Swimming Academy, Personal Instructor and Coach
                Firms in Bangalore. We are into service from almost 4 years
                having a very rich experience in this field. We know exactly
                what customer wants and how to cater to it. We are extremely
                happy to provide you exquisite services through HomeRX.
              </p>
              <p className="ph">Age : 28</p>
              <p className="ph">
                Language : Tamil,English,Hindi,Malayalam,Telugu
              </p>
              <p className="ph">Education : 12th</p>
              <hr width="900"></hr>
              <p style={{ color: "black", fontSize: 30 }}>Reviews</p>
              <p style={{ fontSize: 25, color: "grey", fontSize: 25 }}>
                Customer Reviews &#11088;&#11088;&#11088;&#11088;&#11088;
              </p>
              <p className="ph">SHANKAR</p>
              <p className="gh">
                “I have been taking lessons at Global Swimming Academy for a few
                months now and I am so glad that I did. They have helped me
                improve my technique and get faster in the water. The staff is
                amazing, they are very friendly and professional. I would
                recommend this place to anyone who wants to learn how to swim! ”
              </p>
              <p className="ph">SUBA</p>
              <p className="gh">
                “Genuinely amazing experience from start to finish!”
              </p>
              <hr width="900"></hr>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Details;
