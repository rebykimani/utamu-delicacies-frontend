import React from 'react'

function AdminCard({meals}) {
    return (
        <div className="col" id="allCard">
          <div className="card" style={{ width: 18 + "rem" }}>
            <img src={meals.image} alt="" className="image" />
            <div className="card-body"></div>
            <div className="card__info">
              <h2>Title:{meals.name}</h2>
              <h4>Price:{meals.price}</h4>
              <h4>Description:{meals.description}</h4>
              <h4>Catgory:{meals.category}</h4>
              <div>
                <button
                  id="button"
                  onClick={() => {
                    alert("Your meals Has Been Added to Cart");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default AdminCard
