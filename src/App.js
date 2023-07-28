import "bulma/css/bulma.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Contacto from "./components/Contacto/Contacto";
import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/Checkout/Checkout";
import LogoTitulo from "./img/Auto Total Logo.png";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";

function App() {
  return (
    <div>
      <BrowserRouter>

        <CartProvider>
          <Navbar img={LogoTitulo} />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<Error />} />
          </Routes>
          
          <Footer />
        </CartProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;