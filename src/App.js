import "./resources/css/app.css";
import { NavBar } from "./includes/navBar";
import { SearchBar } from "./includes/searchBar";
import { ItemListContainer } from "./includes/itemListContainer";
import { useState } from "react";

function App() {


  return (
    <div className="container p-5">
      <SearchBar />
      <hr />
      <NavBar />
      <hr />
      <ItemListContainer content="Hello World, this is cubiC Ecommerce" />
    </div>
  );
}

export default App;
