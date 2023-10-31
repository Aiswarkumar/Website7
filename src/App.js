import './App.css';
import React, { useState, usestate } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Product } from "./Product";
import { Homepage } from "./Homepage"
import { Cart } from './Cart';



const App = () => {
  const [cart, setcart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>


          <Route path="/" element={<Navigation  cart={cart}></Navigation>}>
            <Route index element={<Homepage></Homepage>}></Route>
            <Route path="Product" element={<Product cart={cart} setcart={setcart}></Product>}></Route>

            <Route path="Cart" element={<Cart cart={cart} setcart={setcart} />}></Route>


          </Route>
        </Routes>





      </BrowserRouter>



    </div>
  );
}

export default App;
