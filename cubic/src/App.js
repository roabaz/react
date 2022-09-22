import "./App.css";
import { NavBar } from "./includes/navBar";
import { SearchBar } from "./includes/searchBar";
import { Main } from "./includes/main";


function App() {
  return (
    <div className="container p-5">
      
          <SearchBar/>
          <hr/>
          <NavBar/>
          <hr/>
          <Main content="Hello World, this is cubiC Ecommerce"/>
      </div>
  );
}

export default App;
