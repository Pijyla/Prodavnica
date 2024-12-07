import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Products from './components/Products';
import Faq from './components/Faq';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">

            <Router>
            <Header />
            <main>
                <div className="container">
                    <Routes>
                      <Route path="/" element={<ProductList />} />
                      <Route path="/product/:id" element={<ProductDetails />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/faq" element={<Faq />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                    </div>
                </main>
              <Footer />
            </Router>
    </div>
  );
}

export default App;
