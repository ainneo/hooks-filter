import React, { useState, useEffect } from "react";
import items from "./data/items.json";

const Items = () => {
  //working with 4 pcs of state
  const [products, setProducts] = useState(items); //products
  const [category, setCategory] = useState("all"); //cateagory
  const [min, setMin] = useState(""); //min price
  const [max, setMax] = useState(""); //max price
  console.log(products);

  //listens for changes on the DOM to update the state
  //event handeler - filter function
  //e = event target value when select changes
  //checks each cases, finds matching case and updates the data to e.target value
  const handleFilterChange = (e, filterType) => {
    switch (filterType) {
      case "category":
        setCategory(e.target.value);
        break;
      case "min":
        setMin(e.target.value);
        break;
      case "max":
        setMax(e.target.value);
        break;
      default:
        break;
    }
  };

  // UseEffect function basiclly sets the UI and changes it
  // UseEffect function
  // UI initial start - render/filters updates when state/criteria is changed
  useEffect(() => {
    //data
    let filteredProducts = items;
    //if category is not all then set filteredProducts to filter and show product
    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }
    //if min is not an emtpy string, set filteredProducts to filter and show min
    if (min !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price > min
      );
    }
    //if max is not an emtpy string, set filteredProducts to filter and show max
    if (max !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price < max
      );
    }
    setProducts(filteredProducts);
    //variable being listened for change
  }, [category, min, max]);

  //render UI
  return (
    <React.Fragment>
      <form className="filter">
        <label>Category:</label>
        <select
          name="category"
          id="category"
          onChange={(e) => handleFilterChange(e, "category")}
        >
          {" "}
          {/*listens for when input field is changed*/}
          <option value="all">All</option>
          <option value="jacket">Jackets</option>
          <option value="pant">Pants</option>
          <option value="shoe">Shoes</option>
          <option value="hat">Hats</option>
        </select>
        <input
          type="number"
          name="minPrice"
          min="80"
          max="800"
          onChange={(e) => handleFilterChange(e, "min")}
          placeholder="Min Price - Type Here"
        />
        <input
          type="number"
          name="maxPrice"
          max="600"
          min="300"
          onChange={(e) => handleFilterChange(e, "max")}
          placeholder="Max Price - Type Here"
        />
      </form>

      {/* card UI component  */}
      <div className="master--card">
        {products.map((item, index) => {
          return (
            <div key={index} className="card">
              <h2 className="title">{item.title}</h2>
              <img src={item.cover} alt={""} />
              <p className="description">{item.description}</p>
              <p className="price">${item.price}</p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Items;

// Notes:
// Container/Logic:
// 4 pcs of state - changing data
// event handler filter function - updates state according to input value
// UI component:
// useEffect function - UI initial start - renders/filters updates when state/criteria is changed
// return/render UI - map data into UI
