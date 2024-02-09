import React, { useState, useEffect } from "react";
import axios from 'axios';
import { CssBaseline } from "@material-ui/core";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import ProductView from "./components/ProductView/ProductView";
import Searchresult from "./components/ProductSearch/SearchResult";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import loadingImg from "./assets/loader.gif";
import "./style.css";

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await axios.get('http://localhost:3001/api/book/list');

    setProducts(data);
  };

  const fetchCart = async (book_id) => { 
    const response = await axios.get(`http://localhost:3001/api/book/${book_id}`);
    setCart(response.data);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await axios.post('http://localhost:3001/api/book/order/add', productId, quantity); 

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await axios.post('http://localhost:3001/api/book/order/add');

    setCart(response.cart);
  };
  const handleRemoveFromCart = async (lineItemId) => {
    const response = await axios.post('http://localhost:3001/api/book/order/add');

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await axios.post('http://localhost:3001/api/book/order/add');

    setCart(response.cart);
  }; 
  return (
    <div>
      {products.length > 0 ? (
        <>
          <Router>
            <div style={{ display: "flex" }}>
              <CssBaseline />
              <Navbar
                totalItems={cart.total_items}
                handleDrawerToggle={handleDrawerToggle}
              />
              <Switch>
                <Route exact path="/">
                  <Products
                    products={products}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                </Route>
                <Route exact path="/cart">
                  <Cart
                    cart={cart}
                    onUpdateCartQty={handleUpdateCartQty}
                    onRemoveFromCart={handleRemoveFromCart}
                    onEmptyCart={handleEmptyCart}
                  />
                </Route>
        
                <Route path="/product-view/:id" exact> 
                  <ProductView />
                </Route>
                <Route path="/search" exact> 
                  <Searchresult />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </>
      ) : (
        <div className="loader">
          <img src={loadingImg} alt="Loading" /> 
        </div>
      )}
    </div>
  );
};

export default App;
