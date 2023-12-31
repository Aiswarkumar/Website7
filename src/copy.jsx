import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';



export const Navigation = ({ cart }) => {
    return (
        <div>
            <ul className='Navbar'>
                <li><img className='pic1' src={require("./image/hipster-perfume-shop-logo-09d9a8 1.png")}></img></li>
                {/* <li><h2 className='iphone'>iPhone</h2></li> */}
                <li><Link to="/" className='remove1'>HOME</Link></li>
                <li><Link to="Product" className='remove2'>PRODUCT</Link></li>
                <li><Link to="Cart" className='remove3'>Cart</Link></li>
                {/* <li><Link to="cart" className='remove3'><img className='cart' src={require("./image/white-shopping-cart-icon-9-removebg-preview.png")}></img> <h1 className='lengthing'>{cart.length }</h1><h1 className='carting'>CART</h1></Link></li> */}
                {/* <li><Link to="
                /about" className='about'>ABOUT</Link></li> */}
                
                {/* <li><input className='input' placeholder='search......'></input></li> */}

            </ul>

           <Outlet/>
        </div>
    )
}