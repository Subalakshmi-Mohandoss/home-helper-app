// CategoryPage.js
import React from "react";
import CardComponent from "./CardComponent";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  console.log("Category:", category);

  // Replace the following with your actual data
  const categoryData = {
    painter: [
      { title: "Painter Card 1", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4tLlXqnERh_rYMDACz93yEE6jTJEWIkGuw&usqp=CAU" },
      { title: "Painter Card 2", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4tLlXqnERh_rYMDACz93yEE6jTJEWIkGuw&usqp=CAU" },
    //   {<CardComponent title="Care Taker" imageSrc={Care} />},

      // Add more painter cards as needed
    ],
    carpenter: [
      { title: "Carpenter Card 1", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4tLlXqnERh_rYMDACz93yEE6jTJEWIkGuw&usqp=CAU" },
      { title: "Carpenter Card 2", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4tLlXqnERh_rYMDACz93yEE6jTJEWIkGuw&usqp=CAU" },
      // Add more carpenter cards as needed
    ],
    plumber: [
      { title: "Plumber Card 1", imageSrc: "url_to_image_1" },
      { title: "Plumber Card 2", imageSrc: "url_to_image_2" },
      // Add more plumber cards as needed
    ],
    caretaker: [
      { title: "Care Taker Card 1", imageSrc: "url_to_image_1" },
      { title: "Care Taker Card 2", imageSrc: "url_to_image_2" },
      // Add more caretaker cards as needed
    ],
    gardener: [
      { title: "Gardener Card 1", imageSrc: "url_to_image_1" },
      { title: "Gardener Card 2", imageSrc: "url_to_image_2" },
      // Add more gardener cards as needed
    ],
  };

  const cards = categoryData[category] || [];

  return (
    <div>
      <h1>{category} Cards</h1>
      <div className="grid1">
        {cards.map((card, index) => (
          <CardComponent key={index} title={card.title} imageSrc={card.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
