import React, { useState, useEffect } from "react";
import items from "./components/items.json";

const Items = () => {
  //set and setState being initialized
  const [products, setProducts] = useState(items);
  const [category, setCategory] = useState("all");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  //e = event for the value when select changes
  const handleFilterChange = (e, filterType) => {
    //changes state
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
  //initial render then updates when state/criteria is changed
  useEffect(() => {
    let filteredProducts = items;

    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }
    if (min !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price > min
      );
    }
    if (max !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price < max
      );
    }
    setProducts(filteredProducts);
    //variable being listened for change
  }, [category, min, max]);
  return (
    <React.Fragment>
      <form className="filter">
        <label for="category">Choose a category:</label>
        <select
          name="category"
          id="category"
          onChange={(e) => handleFilterChange(e, "category")}
        >
          {" "}
          {/*listens for when input field is changed*/}
          <option value="all">All</option>
          <option value="jacket">Jackets</option>
          <option value="jean">Jeans</option>
          <option value="pant">Pants</option>
          <option value="dress">Dresses</option>
          <option value="shoe">Shoes</option>
          <option value="sock">Socks</option>
          <option value="swimwear">Swimwear</option>
          <option value="handbag">Hand Bag</option>
          <option value="formalwear">Formal Wear</option>
          <option value="sweater">Sweater</option>
          <option value="hat">Hats</option>
          <option value="baby">Baby</option>
        </select>
        <input
          type="number"
          name="minPrice"
          onChange={(e) => handleFilterChange(e, "min")}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          onChange={(e) => handleFilterChange(e, "max")}
          placeholder="Max Price"
        />
      </form>
      <div className="master--card">
        {/*state*/}
        {products.map((item, key) => {
          return (
            <div className="card">
              <h2 className="title">{item.title}</h2>
              <img src={item.cover} alt={item.title} />

              <p>Polo Ralph Lauren</p>
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
