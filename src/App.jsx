import Navbar from "./components/layouts/navbar/NavBar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
import Cart from "./components/pages/cart/Cart";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./components/pages/checkout/Checkout";
import CartContextProvider from "./context/CardContext";

function App() {

  const location = useLocation();
  const state = location.state;
  
  return (
    <CartContextProvider>
      <Navbar />
      <Routes location={state?.backgroundLocation || location}>
      <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>

      {state?.backgroundLocation && (
        <div className="modal-overlay">
          <Routes>
            <Route path="/itemDetail/:id" element={<ItemDetail />} />
          </Routes>
        </div>
      )}
    </CartContextProvider>
  );
}
export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
