import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./payment.scss";
const Payment = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
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
          }}
        >
          <div className="payHeader">
            <p>Premium</p>
            <p>4K + HDR</p>
            {open1 && <CheckCircleIcon className="payChecker" />}
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
        </div>
        <div
          className="payBox"
          onClick={() => {
            setOpen1(false);
            setOpen2(true);
            setOpen3(false);
            setOpen4(false);
          }}
        >
          <div className="payHeader">
            <p>Premium</p>
            <p>4K + HDR</p>
            {open2 && <CheckCircleIcon className="payChecker" />}
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
        </div>
        <div
          className="payBox"
          onClick={() => {
            setOpen1(false);
            setOpen2(false);
            setOpen3(true);
            setOpen4(false);
          }}
        >
          <div className="payHeader">
            <p>Premium</p>
            <p>4K + HDR</p>
            {open3 && <CheckCircleIcon className="payChecker" />}
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
        </div>
        <div
          className="payBox"
          onClick={() => {
            setOpen1(false);
            setOpen2(false);
            setOpen3(false);
            setOpen4(true);
          }}
        >
          <div className="payHeader">
            <p>Premium</p>
            <p>4K + HDR</p>
            {open4 && <CheckCircleIcon className="payChecker" />}
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
          <div className="payPrice">
            <p className="payPriceHeader">Monthly Price</p>
            <p className="payPriceValue">$600</p>
            <hr />
          </div>
        </div>
      </div>
      <button className="payBtn">Pay Now</button>
    </div>
  );
};

export default Payment;
