import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const [foods, setFoods] = useState([]);
  const [selectedFoodType, setSelectedFoodType] = useState("Breakfast");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/whoafridi/Play-with-JavaScript/master/foods.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const filterResult = (item) => {
  //   if(item === 'all'){
  //     setFoods(foods);
  //     return;
  //   }
  // const result = foods.filter((food) => food.type === item);
  // console.log(result);
  // setFoods(result);

  const selectedFoods = foods.filter((food) => food.type === selectedFoodType);
  console.log(foods);
  console.log(selectedFoods);

  return (
    <div>
      <nav>
        <div className="nav_box">
          <span>
            <Link className="nav" to="/">
              Home
            </Link>
          </span>
        </div>
      </nav>
      Categorywise filtering practice
      <div>
        <ul>
          <li
            onClick={() => setSelectedFoodType("Breakfast")}
            // onClick={()=>filterResult('Breakfast')}
            className="nav-item"
          >
            <span
              className={
                selectedFoodType === "Breakfast"
                  ? "active nav-link"
                  : "nav-link"
              }
            >
              Breakfast
            </span>
          </li>
          <li
            onClick={() => setSelectedFoodType("Lunch")}
            //  onClick={()=>filterResult('Lunch')}
            className="nav-item"
          >
            <span
              className={
                selectedFoodType === "Lunch" ? "active nav-link" : "nav-link"
              }
            >
              Lunch
            </span>
          </li>
          <li
            onClick={() => setSelectedFoodType("Dinner")}
            // onClick={()=>filterResult('Dinner')}

            className="nav-item"
          >
            <span
              className={
                selectedFoodType === "Dinner" ? "active nav-link" : "nav-link"
              }
            >
              Dinner
            </span>
          </li>
        </ul>
      </div>
      <div className="row">
        {selectedFoods.length === 0 ? (
          <>
            <p>loading ...</p>
          </>
        ) : (
          <>
            {selectedFoods.map((food) => (
              <li className="list" key={food.id} name={food.name} id={food.id}>
                {food.name} {food.shortDescription}
              </li>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
