import React from 'react'
import './Product.css'
import { AiFillCaretDown } from "react-icons/ai";
import {BsFillPersonFill } from "react-icons/bs";
import {BsCart2 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import figma from './figma/figma.jpeg'; 
import shoe1 from './figma/shoe1.png';
import {HiMenu} from "react-icons/hi";
import {CgMenuGridR} from "react-icons/cg";
import s from './figma/s.png';
import bag from './figma/bag.png';
import wallet from './figma/wallet.png';
import ss from './figma/ss.png';
import ss1 from './figma/ss1.png';
import ss2 from './figma/ss2.png';
import ss3 from './figma/ss3.png';
import {FaFacebookF } from "react-icons/fa";
import{FaTwitter} from "react-icons/fa";
import im1 from './figma/im1.png';
import im2 from './figma/im2.png';
import im3 from './figma/im3.png';
import im4 from './figma/im4.png';
import { AiOutlineHeart } from "react-icons/ai";




function Product(){
    return(
        <div>
        <div>
        <div> 
            <label className='aa'>EN</label> 
            <AiFillCaretDown size='12'/> 
            <label className='ab'>USD</label> 
            <AiFillCaretDown size='12'/> 
            <label className='bc'></label> 
            < BsFillPersonFill size='12'/> 
            <label>My Profile</label> 
            <label className='bc1'></label> 
            <BsCart2/> 
            <label className='bc1'>Items</label> 
            <label className='bc2'>$0.00</label> 
            <AiOutlineSearch/> 
            </div> 
            <hr></hr>
            <div >
           <nav>
           <div >
            <div>
            <label className='a1'></label>
            <div className='ms'>  
            <img src={figma} width='50' height='50' className='ms1'/>
            <label className='bc3'>E-Comm</label>
           <label className='bc4'>HOME</label> 
           <label className='bc5'>BAGS</label> 
           <label className='bc5'>SNEAKERS</label> 
           <label className='bc5'>BELT</label> 
           <label className='bc5'>CONTACT</label>
           </div> 
           </div>
           </div>
           </nav>
           </div>
          <br/>
          <div>
         <div  className='title'><p className='di'>Home</p>
         <p>/Hot Deal</p></div>
         </div>
         <br/>
         <br/>
         <br/>
         <div > 
         <div className='j'> 
          <label>Hot Deals</label><br/><br/> 
          <label >Nike </label> 
          <label className='bc9'>2</label><br/><br/> 
          <label className='ks' >Airmax</label> 
          <label className='kk'>48</label><br/><br/> 
          <label >Nike </label> 
          <label className='c6'>14</label><br/><br/> 
          <label >Adidas</label> 
          <label className='c9'>15</label><br/><br/> 
          <label >Vans </label> 
          <label className='c7'>23</label><br/><br/> 
          <label >All Stars </label> 
          <label className='c8'>1</label><br/><br/> 
          <label >Adidas</label> 
          <label className='c9'>95</label><br/><br/> 
          </div>
          </div>
          <br/>
           <div className='prices-part'>
          <p className='prices'>PRICES</p>
          <p className='rang'>Ranger:<span className='ranger'>$13.99-25.99</span></p>
          <input type={'range'}/>
          </div>
          <br/>
          <div className='circlepath'>
          <p className='color'>COLOR </p>
          <div className='c0'>
         <span className='circle'></span>
          <span class="c1"></span>
           <span class="c2"></span>
           <span class="c3"></span>
           <span class="c4"></span>
           <span class="c5"></span></div>
         </div>
         <br/>
         <div className='ll'> 
          <div className='la'> 
          <label className='d2'>BRAND</label><br/><br/> 
          <label>Nike</label> 
          <label className='d3'>99</label><br/><br/> 
          <label className='d4'>Nike</label> 
          <label className='d5'>99</label><br/><br/> 
          <label >Adidas</label> 
          <label className='d6'>99</label><br/><br/> 
          <label >Siemens</label> 
          <label className='d7'>99</label><br/><br/> 
          </div> 
          </div> 
          <br/> 
          <div className='d8'> 
           <div className='d9'> 
          <label className='e1'>MORE</label> 
          </div>
          </div>
          <div className='banner'>
          <h3 className='text'>Adidas Men Running</h3>
          <h3 className='text1'>Sneakers</h3>
          <p className='text2'>perfomance and design.Taken right to the edge.</p>
          <span className='text3'>SHOP NOW</span>
          </div>
          <div >
          <img className='img' src={shoe1} alt='img'/>
          </div>
          <br/>
          <div className='e3'> 
          <div className='e4'> 
          <label className='rr'>13</label> 
          <label className='e5'> Items</label> 
          <label className='e6'>Sort By</label>
          <label className='e7'>Name</label> 
          <label className='e8'></label> 
          <AiFillCaretDown/> 
           <labe1 className="e6">Show</labe1> 
          <label className='e8'></label> 
          <label>12</label> 
          <AiFillCaretDown/> 
          <label className='e9'></label> 
          <CgMenuGridR color='aqua'/>
          <label className='e8'></label> 
          < HiMenu color='grey'/>
          </div> 
          </div> 
          <br/>
          <br/> 
          <div className='grid'>
            <div className='list-grid'>
            <span><img className='im' src={s} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span><br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          
          <div className='list-grid'>
            <span><img className='im' src={bag} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={wallet} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={ss} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className='list-grid'>
            <span><img className='im' src={ss1} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>

  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={ss2} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span><br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={ss3} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im1' src={ss3} alt='nike'/><p className='h'>HOT</p></span>
            <div className='ov'><AiOutlineHeart className='heart' color='aqua' size={25} />
            <BsCart2 className='cart' color='aqua' size={25} />
            </div>
            <p className='t1'>Nike Air Max 270 React</p>
          <p>
          <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
          </p>
          <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={bag} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          </div><br/>
          <div >
          <div> 
     <div className='js'> 
         <label className='js1'>1</label> 
         <label className='js2'>2</label> 
         <label className='js3'>3</label> 
         <label className='js2'>4</label> 
         <label className='js2'>5</label> 
     </div> 
 </div>
 </div>
 <br/><br/>
 <br/>
 <div className='footer'>
 <div className='footer1'>
   <div className='foot'>
   <img src={figma} width='50' height='50' className='ms1'/>
            <label className='bck'>E-Comm</label>
   <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p><br/></div>
   <div className='foot'>
   <span className='f-t1'>Follow Us</span>
   <p><p className='para1'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p><FaFacebookF  color='blue'className='facebook' /><FaTwitter color='aqua' className='facebook'/></p></div>
   <div className='foot'>
 <span className='f-t1'>Contact Us</span>
 <br/>
 <p className='para2'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p></div>
 </div>
 <div className='info-all'>
 <div className='info-part'>
   <label className='sa'>Information</label>
   <ul>About Us</ul>
   <ul>Information</ul>
   <ul>Privacy Policy</ul>
   <ul>Terms & Conditions</ul>
</div>
<div className='info-part'>
   <label className='sa'>Service</label>
   <ul>About Us</ul>
   <ul>Information</ul>
   <ul>Privacy Policy</ul>
   <ul>Terms & Conditions</ul>
</div>
<div className='info-part'>
   <label className='sa'>My Account</label>
   <ul>About Us</ul>
   <ul>Information</ul>
   <ul>Privacy Policy</ul>
   <ul>Terms & Conditions</ul>
</div>
<div className='info-part'>
   <label className='sa'>Our Offers</label>
   <ul>About Us</ul>
   <ul>Information</ul>
   <ul>Privacy Policy</ul>
   <ul>Terms & Conditions</ul>
</div>
</div>
<hr className='hr'></hr>
<div className='image'>
 <div className='copyri8'>© 2018 Ecommerce theme by www.bisenbaev.com
  </div>
  <div>
    <div>
     <img src={im1}  className='size'/>
     <img src={im2}  className='size1'/>
     <img src={im3}  className='size2'/>
     <img src={im4}  className='size3'/>
     </div></div>

   </div>
   
 </div>
         
    
    
     
          
          
         
          
 
   </div> 
   </div>  
)
}
export default Product;