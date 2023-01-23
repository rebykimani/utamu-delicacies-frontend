import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHearder from "./AdminHearder";

function ModifyMeal() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setisPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const meal = { image, name, price, category, description };
    console.log(meal);
    setisPending(true);

    fetch("http://127.0.0.1:3000/meals", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meal),
    })
      .then((res) => res.json())
      .then(() => {
        setImage("");
        setName("");
        setPrice("");
        setCategory("");
        setDescription("");
        setisPending(false);
        navigate("/dashboard");
      });
  };

  return (
    <div>
      <AdminHearder />
      <div className="p-8">
        <h2 className="text-3xl text-gray-600 font-bold">Modify Meal</h2>
        <form className="p-4 flex flex-col" onSubmit={handleSubmit}>
          <label className="pb-4 mt-4">Meal Name:</label>
          <input
            className="p-2 border border-solid border-gray-300"
            type="text"
            required
            value={name}
            placeholder="Update Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="pb-4 mt-4">Meal Price:</label>
          <input
            className="p-2 border border-solid border-gray-300 "
            type="text"
            required
            value={price}
            placeholder="update price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label className="pb-4 mt-4">Meal Category:</label>
          <input
            className="p-2 border border-solid border-gray-300"
            type="text"
            required
            value={category}
            placeholder="update category"
            onChange={(e) => setCategory(e.target.value)}
          />
          {/* <label className='pb-4 mt-4'>Article Author:</label>
                  <input className='p-2 border border-solid border-gray-300 '
                  type="text"
                  required
                  value={author}
                  placeholder="Add your name"
                  onChange={(e)=>setAuthor(e.target.value)}
              /> */}
          <label className="mt-4 pb-4">Meal Description: </label>
          <textarea
            className="py-10 border border-solid border-gray-300"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {!isPending && (
            <button className="mx-80 p-2 mt-6 border border-gray-400 rounded-full text-gray-600">
              Update Meal
            </button>
          )}
          {isPending && <button disabled>Updating Meal</button>}
        </form>
      </div>
    </div>
  );
}

export default ModifyMeal;
