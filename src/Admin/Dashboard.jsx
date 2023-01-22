import React, { useState, useEffect } from "react";
import AdminHearder from "./AdminHearder";
import AdminCard from "./AdminCard";
// import AddNewMeal from "./AddNewMeal";
import { Link } from "react-router-dom";

function Dashboard() {
  const [meals, setMeals] = useState([]);

  const baseUrl = "http://127.0.0.1:3000/meals";

  const productFetcher = () => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMeals(data);
      });
  };

  useEffect(productFetcher, []);

  let cards = meals.map((meal) => (
    <AdminCard
      image={meal.image}
      name={meal.name}
      price={meal.price}
      category={meal.category}
      description={meal.description}
      key={meal.id}
    />
  ));

  const filterItems = (categItem) => {
    const updatedProducts = meals.filter((curElem) => {
      return curElem.category === categItem;
    });
    setMeals(updatedProducts);
    // console.log(updatedProducts);
  };

  // const handleAddData = (data) => {
  //   fetch(baseUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((newMeal) => setMeals([...meals, newMeal]));
  // };
  return (
    <div>
      <AdminHearder />
      <div className="bg-orange-50">
        <br></br>
        <br></br>

        <div className="flex justify-evenly">
        <Link to="/addNewMeal" className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300 p-3">Add Meal</Link>
          <button className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300"
          onClick={() => filterItems("MEALS")}
          >
            All
          </button>
          <button className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300"
          onClick={() => filterItems("breakfast")}
          >
            BreakFast
          </button>
          <button className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300"
          onClick={() => filterItems("lunch")}
          >
            Lunch
          </button>
          <button className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300"
          onClick={() => filterItems("shakes")}
          >
            Beverage
          </button>
          <button className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300"
          onClick={() => filterItems("dinner")}
          >
            Dinner
          </button>
        </div>
        <br></br>
        <br></br>
      </div>
      <div className="row">{cards}</div>
    </div>
  );
}

export default Dashboard;
