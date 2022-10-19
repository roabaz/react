import "./resources/css/app.css";
import { SubBar } from "./components/subBar";
import { ItemListContainer } from "./components/itemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartDetail } from "./components/cartDetail";
import { CartProvider } from "./context/cartContext";
function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="container p-5">
        <SubBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cartDetail" element={<CartDetail />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/:gender/:category" element={<ItemListContainer />} />
          <Route path="/:gender" element={<ItemListContainer />} />
        </Routes>

        <footer className='bg-dark p-5 m-5 text-light text-center'>
                Todos los derechos reservados - Cubic Ecommerce 2022
            </footer>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
