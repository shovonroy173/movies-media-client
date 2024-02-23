import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";
import "./payment.scss";
import { useLocation } from "react-router-dom";
const KEY = "pk_test_51N55v0SG4487ZVYHjPu1nZv0uWzyK13KJsIB6oxLWsfcYbuG85TG2sD31jmnAWLbE8l5NKiTXC7O5mrW1LE0YGxh00XlH0rs0X";
const Payment = () => {
  const location = useLocation();
  console.log(location);
  const userEmail = location.state.user
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [price , setPrice] = useState(null);
  const [name , setName] = useState(null);
  console.log(name , price);
  const handleClick = async()=>{
    const stripe = await loadStripe(KEY);
    const res = await axios.post("https://movies-media-api.onrender.com/api/payment/checkout" , {
      name , price , userEmail
    });
    const result = stripe.redirectToCheckout({
      sessionId:res.data.id
    });
    if((await result).error){
      console.log((await result).error);
    }
  }
  return (
    <div className="pay">
      <div className="payContainer">
        <div
          className="payBox"
          onClick={() => {
            setOpen1(true);
            setOpen2(false);
            setOpen3(false);
            setOpen4(false);
            setPrice(649);
            setName("Premium");
          }}
        >
          <div className="payHeader">
            <p>Premium</p>
            <p>4K + HDR</p>
            {open1 && <CheckCircleIcon className="payChecker" />}
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$649</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Video and sound quality</p>
            <p className="payPriceValue">Best</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Resolution</p>
            <p className="payPriceValue">4K (Ultra HD) + HDR</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Speacial audio (immersive sound)</p>
            <p className="payPriceValue">Included</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Supported devices</p>
            <p className="payPriceValue">TV , computer , mobile phone , tablet</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Devices your household can watch at the same time</p>
            <p className="payPriceValue">4</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Downloaded devices</p>
            <p className="payPriceValue">4</p>
            
          </div>
        </div>
        <div
          className="payBox"
          onClick={() => {
            setOpen1(false);
            setOpen2(true);
            setOpen3(false);
            setOpen4(false);
            setPrice(499);
            setName("Standard");
          }}
        >
          <div className="payHeader">
            <p>Standard</p>
            <p>1080p</p>
            {open2 && <CheckCircleIcon className="payChecker" />}
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$499</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Video and sound quality</p>
            <p className="payPriceValue">Great</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Resolution</p>
            <p className="payPriceValue">1080p (Full HD)</p>
            <hr />
          </div>
          
          <div className="payPrice">
            <p className="payPriceHeader">Supported devices</p>
            <p className="payPriceValue">TV , computer , mobile phone , tablet</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Devices your household can watch at the same time</p>
            <p className="payPriceValue">2</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Downloaded devices</p>
            <p className="payPriceValue">2</p>
            
          </div>
        </div>
        <div
          className="payBox"
          onClick={() => {
            setOpen1(false);
            setOpen2(false);
            setOpen3(true);
            setOpen4(false);
            setPrice(199);
            setName("Basic");
          }}
        >
          <div className="popular">Most Popular</div>
          <div className="payHeader">
            <p>Basic</p>
            <p>720p</p>
            {open3 && <CheckCircleIcon className="payChecker" />}
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$199</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Video and sound quality</p>
            <p className="payPriceValue">Good</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Resolution</p>
            <p className="payPriceValue">720p (HD)</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Supported devices</p>
            <p className="payPriceValue">TV , computer , mobile phone , tablet</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Devices your household can watch at the same time</p>
            <p className="payPriceValue">1</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Downloaded devices</p>
            <p className="payPriceValue">1</p>
            
          </div>
        </div>
        <div
          className="payBox"
          onClick={() => {
            setOpen1(false);
            setOpen2(false);
            setOpen3(false);
            setOpen4(true);
            setPrice(149);
            setName("Mobile");
          }}
        >
          <div className="payHeader">
            <p>Mobile</p>
            <p>480p</p>
            {open4 && <CheckCircleIcon className="payChecker" />}
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$149</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Video and sound quality</p>
            <p className="payPriceValue">Fair</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Resolution</p>
            <p className="payPriceValue">480p (HD)</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Supported devices</p>
            <p className="payPriceValue">Mobile phone , tablet</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Devices your household can watch at the same time</p>
            <p className="payPriceValue">1</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Downloaded devices</p>
            <p className="payPriceValue">1</p>
            
          </div>
        </div>
      </div>
      <button className="payBtn" disabled={!price} onClick={handleClick}>Pay Now</button>
    </div>
  );
};

export default Payment;
