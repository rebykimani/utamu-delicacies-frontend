import React,{useState, useEffect} from "react";
import AdminHearder from "./AdminHearder";
import AdminCard from "./AdminCard";
function Dashboard() {
  // const [meals, setMeals] = useState();
  // const [mealsList, setMealslist] = useState([]);
  // const baseUrl = "http://127.0.0.1:3000";

  // useEffect(() => {
  //   // const baseUrl = "https://polar-tundra-37099.herokuapp.com/products";
  //   fetch(baseUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMealslist(data);
  //     });
  // }, []);

  // const filterItems = (categItem) => {
  //   const updatedProducts = mealsList.filter((curElem) => {
  //     return curElem.category === categItem;
  //   });
  //   setMealslist(updatedProducts);
  // };

  // const allProduct = mealsList.map((productObject) => {
  //   return <AdminCard key={productObject.id} product={productObject} />;
  // });

  // function handleSearching(search) {
  //   setMealslist((productListData) =>
  //     productListData.filter((products) => products.category.includes(search))
  //   );
  // }

  // const handleAddData = (data) => {
  //   fetch(baseUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((newProduct) => setMeals([...meals, newProduct]));
  // };
  return (

    <div>
      <AdminHearder/>
    <div className="bg-orange-50">
      <br></br>
      <br></br>

      <div className="flex justify-evenly">
       <button className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300">
        All
       </button>
       <button className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300">
        BreakFast
       </button>
       <button className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300">
        Lunch
       </button>
       <button className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300">
        Beverage
       </button>
       <button className="rounded-full bg-orange-400 h-10 w-32 hover:bg-orange-300">
        Dinner
       </button>
      </div>
      <br></br>
      <br></br>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="h-80 max-h-full max-w-fit w-80"
            src={require("./chicken.jpg")}
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Piau & rice
            </h5>
            <h2>10$</h2>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Rice pilau is a fragrant tasty one-pot dish made with caramelized beef with rice and potato cooked in a rich and delicious meat or chicken
          </p>
          <div className="flex space-x-4 ">
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-400 dark:focus:ring-orange-300"
          >
            Add Meal
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-400 dark:focus:ring-orange-300"
          >
            Delete
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-400 dark:focus:ring-orange-300"
          >
            Modify
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
}

export default Dashboard;
