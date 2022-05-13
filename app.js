import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";

const showBackground = true;

const background = (
  <img className="background" alt="alt" src="/images/ocean.jpg" />
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}
