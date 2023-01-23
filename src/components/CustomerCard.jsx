import React from "react";
import "./Cards.css";
import { useParams, useNavigate } from "react-router-dom";

function CustomerCard({ name, price, image, category, description, }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = () => {
    console.log(id);
    fetch("http://127.0.0.1:3000/meals" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/dashboard");
      });
  };

  return (
    <div className="col" id="allCard">
      <div className="card" style={{ width: 25 + "rem" }}>
        <img src={image} alt="" className="image" />
        <div className="card-body"></div>
        <div className="card__info">
          <h2>Title:{name}</h2>
          <h2>Price:{price}</h2>
          <h5>Catgory:{category}</h5>
          <h4>Description:{description}</h4>
          <div>
            <div className="flex space-x-4">
              <button
                className="bg-sky-700 p-2 border border-gray-400 rounded-full text-white hover:bg-orange-300 "
                // onClick={handleClick}
              >
               Book A Meal
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
