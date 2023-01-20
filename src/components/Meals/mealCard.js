import React, { useEffect, useState } from "react";
import "./meal.css";
import { StyledFooterLink } from "../Footer/Footer";
import { Category } from "@mui/icons-material";

export const TopMeals = () => {
  const [top4, setTop4] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/meals")
      .then((res) => res.json())
      .then((data) => setTop4(data));
  }, []);

  console.log("meals", top4);

  return (
    <div className="top-services">
      <StyledFooterLink className="title">Breakfast Deals</StyledFooterLink>
      <div className="top-services-container">
        {top4
          .slice(0, 3)
          .filter((category) => category === "breakfast")
          .map((meal) => (
            <div className="top-service">
              <img src={meal.image} alt="" />
              <h3>{meal.name} dinner</h3>
              <h3>{meal.price}</h3>
              <p>{meal.description}</p>
            </div>
          ))}
      </div>
      <StyledFooterLink className="title">Lunch Deals</StyledFooterLink>
      <div className="top-services-container">
        {top4
          .slice(0, 3)
          .filter((category) => category === "lunch")
          .map((meal) => (
            <div className="top-service">
              <img src={meal.image} alt="" />
              <h3>{meal.name}</h3>
              <h3>{meal.price}</h3>
              <p>{meal.description}</p>
            </div>
          ))}
      </div>
      <StyledFooterLink className="title">Dinner Deals</StyledFooterLink>
      <div className="top-services-container">
        {top4
          .slice(0, 3)
          .filter((category) => category === "dinner")
          .map((meal) => (
            <div className="top-service">
              <img src={meal.image} alt="" />
              <h3>{meal.name}</h3>
              <h3>{meal.price}</h3>
              <p>{meal.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

// export default TopMeals;
