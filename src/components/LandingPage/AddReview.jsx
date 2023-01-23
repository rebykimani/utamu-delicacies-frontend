import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

function AddReview() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [meal_id, setmeal_id] = useState("");

    const [isPending, setisPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const reviews = {meal_id, name, message};
      // console.log(review);
      setisPending(true);

      fetch("http://127.0.0.1:3000/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviews),
      })
        .then((res) => res.json())
        .then(() => {
          setName("");
          setMessage("");
          setmeal_id ("");
          setisPending(false);
          navigate("/home");
        });
    };

  return (
    <div>
    {/* <AdminHearder/> */}
<div className="p-8 bg-orange-50 ">
<h2 className="text-3xl text-gray-600 font-bold">Add a Review</h2>
<form className="p-4 flex flex-col" onSubmit={handleSubmit}>
  {/* <label className="pb-4 mt-4">Name:</label>
  <input
    className="p-2 border border-solid border-gray-300"
    type="text"
    required
    value={name}
    placeholder="Add meal name"
    onChange={(e) => setName(e.target.value)}
  /> */}
  {/* <label className="pb-4 mt-4">Message:</label>
  <input
    className="p-2 border border-solid border-gray-300 "
    type="text"
    required
    value={price}
    placeholder="Add price"
    onChange={(e) => setPrice(e.target.value)}
/>*/}
  <label className="pb-4 mt-4">Meal_ID:</label>
  <input
    className="p-2 border border-solid border-gray-300"
    type="text"
    required
    value={meal_id}
    placeholder="Add meal_id"
    onChange={(e) => setmeal_id(e.target.value)}
  />
  <label className='pb-4 mt-4'>Name:</label>
          <input className='p-2 border border-solid border-gray-300 '
          type="text"
          required
          value={name}
          placeholder="Add your name"
          onChange={(e)=>setName(e.target.value)}
      />
  <label className="mt-4 pb-4">Message: </label>
  <textarea
    className="py-10 border border-solid border-gray-300"
    required
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />

  {!isPending && (
    <button className="mx-80 p-2 mt-6 border border-gray-400 rounded-full text-gray-600 bg-orange-400">
      Add Review
    </button>
  )}
  {isPending && <button disabled>Adding Review</button>}
</form>
</div>
</div>
);
}

export default AddReview
