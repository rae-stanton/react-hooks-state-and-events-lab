import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    setIsDark((prevMode) => !prevMode);
  }

  return (
    <>
      {isDark ? (
        <div className="App dark">
          <header>
            <h2>Shopster</h2>
            <button onClick={handleClick}>Light Mode</button>
          </header>
          <ShoppingList items={itemData} />
        </div>
      ) : (
        <div className="App light">
          <header>
            <h2>Shopster</h2>
            <button onClick={handleClick}>Dark Mode</button>
          </header>
          <ShoppingList items={itemData} />
        </div>
      )}
    </>
  );
}

export default App;
