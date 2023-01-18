import React, { useEffect, useState } from "react";
import "./meal.css";
import { StyledFooterLink } from "../Footer/Footer";

export const TopMeals = () => {
  const [top5, setTop5] = useState([]);

  useEffect(() => {
    fetch("https://eptome-parlor.herokuapp.com/service_types")
      .then((res) => res.json())
      .then((data) => setTop5(data));
  }, []);

  return (
    <div className="top-services">
      <StyledFooterLink className="title">Breakfast Deals</StyledFooterLink>
      <div className="top-services-container">
        {top5.slice(0, 3).map((service) => (
          <div className="top-service">
            <img src={service.imageURL} alt="" />
            <h3>{service.service_type_name}</h3>
            <p>{service.service_type_description}</p>
          </div>
        ))}
      </div>
      <StyledFooterLink className="title">Lunch Deals</StyledFooterLink>
      <div className="top-services-container">
        {top5.slice(0, 3).map((service) => (
          <div className="top-service">
            <img src={service.imageURL} alt="" />
            <h3>{service.service_type_name}</h3>
            <p>{service.service_type_description}</p>
          </div>
        ))}
      </div>
      <StyledFooterLink className="title">Dinner Deals</StyledFooterLink>
      <div className="top-services-container">
        {top5.slice(0, 3).map((service) => (
          <div className="top-service">
            <img src={service.imageURL} alt="" />
            <h3>{service.service_type_name}</h3>
            <p>{service.service_type_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMeals;
