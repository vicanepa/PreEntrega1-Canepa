import Navbar from "../components/layouts/navbar/NavBar";
import ItemListConteiner from "../components/pages/itemListContainer/ItemListContainer";
import { ItemDetail } from "../components/pages/itemDetail/ItemDetail";
import Cart from "../components/pages/cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListConteiner />} />
      <Route path="/category/:name" element={<ItemListConteiner />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/ItemDetail/:id" element={<ItemDetail />} />
      <Route path="*" element={<h2>404 not found</h2>} />

    </Routes>
  </BrowserRouter>
}

export default App;
