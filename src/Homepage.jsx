import React from 'react';

export const Homepage = () => {
  return (
    <div>

      <div>
        <div className='background1'>
          {/* <h1 className='iphonepro'>iPhonE 14 PRO</h1>
          <h1 className='pro'>Pro.Beyond</h1> */}
          <img className='pic2' src={require("./image/Group 38.png")}></img>
          {/* <p className='protheory'>The iPhone 14 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.54 centimetres / 6.12 inches diagonally (actual viewable area is less).</p> */}
          <p className='off'>25% off <br></br>
             on new arrivals
          </p>
          
        
        </div>
      </div>



      <div className='fragdiv'>
        <h1 className='frag'>FRAGRANCE</h1>
        <h1 className='ex'>(Exclusives)</h1>
      </div>


      <div>
        <img className='photo1' src={require("./image/ch2.png")}></img>
        <img className='photo2' src={require("./image/grp8.png")}></img>
      
      </div>
      <div>
      <img className='photo3' src={require("./image/Group 6.png")}></img>
        <img className='photo4' src={require("./image/Group 7.png")}></img>
      </div>
      <button className='button'>Shop now</button>
      <div>
      
        <img className='ph1' src={require("./image/pratik-gupta--z-WEOD0AdI-unsplash 1.png")}></img>
        <p className='cont'>The most popular perfumes are a <br></br>
            blend of timeless secrets and those <br></br>
            that have recently won our hearts, <br></br>
            ranging from summer in a bottle to <br></br>
            intensely sensual notes of love.
        </p>
      </div>


      <div>
        <img className='ph2' src={require("./image/Group 44.png")}></img>
        <h1 className='w1'>FOR WOMEN</h1>
       <h1 className='a1'>GABREILLE CHANNEL</h1>
       <p className='a2'>A silky Grasse tuberose at its best is caught on a rich, enveloping <br/>
          heart of powerful jasmine that shimmers with , young-juicy green notes. <br/>
          Fresh and orange sparkling orange blossom also makes an appearance.
       </p>
       <div className='d1'>
       <img className='photo3' src={require("./image/Group 6.png")}></img>
        <img className='photo4' src={require("./image/Group 7.png")}></img>
        <img className='photo2' src={require("./image/grp8.png")}></img>
       </div>
       <button className='button1'>Shop now</button>
       
      </div>

      <div>
      <img className='ph2' src={require("./image/Group 40.png")}></img>
        <h1 className='w12'>FOR MEN</h1>
       <h1 className='a1'>PLATINUM CHANNEL</h1>
       <p className='a2'>A silky Grasse tuberose at its best is caught on a rich, enveloping <br/>
          heart of powerful jasmine that shimmers with , young-juicy green notes. <br/>
          Fresh and orange sparkling orange blossom also makes an appearance.
       </p>
       <div className='d1'>
       <img className='photo3' src={require("./image/Group 6.png")}></img>
        <img className='photo4' src={require("./image/Group 7.png")}></img>
        <img className='photo2' src={require("./image/grp8.png")}></img>
       </div>
       <button className='button1'>Shop now</button>
      </div>
     
      <div>
      <h1 className='gift'>GIFT SET</h1>
      <img className='giftpic' src={require("./image/scarlett-alt-1MBpLk-xZ5M-unsplash 1.png")}></img>
      <button className='dis'>Discover now</button>

      </div>



      <div>
        <img className='lastpic' src={require("./image/olena-sergienko-GOVTETevRm8-unsplash 1.png")}></img>
        <h1 className='ing'>INGREDIENTS</h1>
        <img className='v1' src={require("./image/vannila.png")}></img>
        <img className='m1' src={require("./image/musk.png")}></img>
        <img className='j1' src={require("./image/jasmine.png")}></img>
        
        
        
      </div>

      <div>
      <h1 className='v2'>VANILLA</h1>
        <h1 className='m2'>MUSK</h1>
        <h1 className='j2'>JASMINE</h1>
        <p className='c1'>For your convenience, we have listed each perfume’s individual <br/>
           components below so you can pick the one that’s right for you.
        </p>
        {/* <h1 className='view'>View more...</h1> */}
        <button className='view'>View more...</button>
      </div>

      <div className='subdiv'>
        <h1 className='r1'>SUBSCRIBE TO NEWSLETTER</h1>
        <p className='r2'>Subscribe and get 10% off on new collections</p>
        <button className='r3'>Enter your Email id.</button>
      </div>

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
