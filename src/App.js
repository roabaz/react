import "./resources/css/app.css";
import { NavBar } from "./components/navBar";
import { SearchBar } from "./components/searchBar";
import { ItemListContainer } from "./components/itemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Count} from "./components/count"
function App() {
  return (
    <BrowserRouter>
      <div className="container p-5">
        <SearchBar />
        <hr />
        <NavBar />
        <hr />
        <Count/>

        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />}/>
          <Route path="/:gender/:category" element={<ItemListContainer />}/>
          <Route path="/:gender" element={<ItemListContainer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
