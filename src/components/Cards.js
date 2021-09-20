import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Industries We Serve</h1>
      <hr class="hr1" />
      <p className="head1">
        As industries converge and new industries emerge, we are re-imagining
        our strategy,solutions, and platforms as well
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text1="Telecom"
              text="Currently, India is the world’s second-largest telecommunications market with a subscriber base of 1.16 billion and has registered strong growth in the last decade.

              "
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text1="FBSI"
              text="We offer all-inclusive solutions in Telecom and Wireless Networks in wide range of technologies including 5G, 4G (LTE)."
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text1="eCommerce"
              text="We provide custom eCommerce solutions and development services to businesses that want 
              to expand or transform their online business."
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
