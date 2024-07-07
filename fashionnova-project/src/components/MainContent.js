import React from "react";
import Card from "./Card";


function MainContent() {
  return (
    <main className="App-main">
      <h2>Shop by Category</h2>
      <div className="App-categories">
        <Card name="Dresses" image="https://via.placeholder.com/150" />
        <Card name="Tops" image="https://via.placeholder.com/150" />
        <Card name="Jeans" image="https://via.placeholder.com/150" />
        <Card name="Shoes" image="https://via.placeholder.com/150" />
      </div>
    </main>
  );
}

export default MainContent;
