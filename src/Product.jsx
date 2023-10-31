import React from 'react';
import prod from './AllData';

export const Product = ({ cart, setcart }) => {
    function adddetail(data) {
        setcart([...cart, data])
    }
    return (
        <div className='rover'>
            {/* <div className='flexhead'>
                <img className='pics' src={require("./image/1024px-Noun_Project_list_icon_119366_cc.svg-removebg-preview.png")}></img>
                <h2 className='heads'>iPhone miniTab</h2>
                <h2 className='heads'>Sell</h2>
                <h2 className='heads'>Best seller</h2>
                <h2 className='heads'>Mobile</h2>
                <h2 className='heads'>Today Deals</h2>
                <h2 className='heads'>Customer Service</h2>
                <h2 className='heads'>New Releases</h2>
                <h2 className='heads'>Electronics </h2>
                <h2 className='heads'>Prime</h2>
                <h2 className='heads'>Pay</h2>
            </div> */}
            {

                prod.map((data) =>
                    <div className='flexproduct'>
                        <div>
                            <img src={data.img} alt="" width="400px" />
                        </div>
                        <div className='doubleflex'>
                            <div>
                            {/* <h1>{data.id}</h1> */}

                            <p className='content'>{data.content}</p>



                            <p className='lining'>{data.line}</p>
                            {/* <img className='stars' src={data.star} alt="" width="100px" /> */}

                            {/* <div className='thinline'></div> */}

                            <h2 className='price'>Price : {data.price}/-</h2>
                            {/* <h2 className='mrp'>MRP : 130000</h2> */}
                            <h2 className='alltax'>(Inclusive of all taxes)</h2>

                            <ul className='component'>
                                <li>Long-lasting</li>
                                <li>24-hour freshness</li>
                                <li>Premium fragrance</li>
                                <li>Perfect for everyday use</li>
                                
                                <li>Warm & woody</li>
                                {/* <li>Bank Offer</li>
                                <li>Get GST invoice and save up to 28% on business purchases.</li> */}

                            </ul>
                            <button className='addtocart' onClick={() => adddetail(data)}>Add to cart</button>

                            </div>
                                
                        </div>
                    </div>)


            }

<div className='footer1'>

<div className='foot1'>
  <h1 className='ab1'>The Perfume Shop</h1>
  <p className='ab2'>
      The most popular perfumes are a <br/>
      blend of timeless secrets and <br/>
      those that have recently won our <br/>
      hearts, ranging from summer in a <br/>
      bottle to intensely sensual notes
      of love.
  </p>
</div>

<div className='foot2'>
  <h1 className='follow'>Follow us on</h1>
  <h3 className='insta'>Instagram</h3>
  <h3 className='insta'>Facebook</h3>
  <h3 className='insta'>Twitter</h3>

</div>

<div className='foot3'>
  <h1 className='help'>Help</h1>
  <h3 className='pay'>Payments</h3>
  <h3 className='pay'>Cancellation & Return</h3>
  <h3 className='pay'>Terms & Conditions</h3>
  <h3 className='pay'>Privacy Policy</h3>
  <h3 className='pay'>FAQs</h3>
 
</div>

</div>

<div className='copyrights'>
<p className='copy1'>2023 Copyright / The Perfume Shop / All rights reserved.</p>

</div>


{/* <div className='footer'>
        <div className='flexing'>

          <div>
            <h1 className='large'>Shop and Learn</h1>
            <h2 className='small'>Store</h2>
            <h2 className='small'>Mac</h2>
            <h2 className='small'>iPad</h2>
            <h2 className='small'>iPhone</h2>
            <h2 className='small'>Watch</h2>
            <h2 className='small'>AirPods</h2>
            <h2 className='small'>TV & Home</h2>
            <h2 className='small'>AirTag</h2>
            <h2 className='small'>Gift Cards</h2>
          </div>


          <div>
            <h1 className='large'>Entertainment</h1>
            <h2 className='small'>Apple One</h2>
            <h2 className='small'>Apple TV+</h2>
            <h2 className='small'>Apple Music</h2>
            <h2 className='small'>Apple Arcade</h2>
            <h2 className='small'>Apple Podcasts</h2>
            <h2 className='small'>Apple Books</h2>
            <h2 className='small'>App Store</h2>
           
          </div>



          <div>
            <h1 className='large'>Apple Store</h1>
            <h2 className='small'>Find a Store</h2>
            <h2 className='small'>Genius Bar</h2>
            <h2 className='small'>Today at Apple</h2>
            <h2 className='small'>Apple Camp</h2>
            <h2 className='small'>Apple Trade In</h2>
            <h2 className='small'>Ways to Buy</h2>
            <h2 className='small'>Recycling Programme</h2>
            <h2 className='small'>Order Status</h2>
            <h2 className='small'>Shopping Help</h2>
            
          </div>

          <div>
            <h1 className='large'>About Apple</h1>
            <h2 className='small'>Newsroom</h2>
            <h2 className='small'>Apple Leadership</h2>
            <h2 className='small'>Career Opportunities</h2>
            <h2 className='small'>Investors</h2>
            <h2 className='small'>Ethics & Compliance</h2>
            <h2 className='small'>Events</h2>
          </div>



        </div>
      </div> */}

        </div>
    )
}
