import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default value is "All, which is defined in the item list"

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // Update selectedCategory based on the dropdown selection
  }

  const filteredItems = items.filter(item => {
    if (selectedCategory === "All") {
      return true; // Show all items if "All" is selected
    } else {
      return item.category === selectedCategory; // Show items only from the selected category
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
