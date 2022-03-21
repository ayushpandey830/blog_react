import React from 'react';
import "./Orders.css";
import CachedIcon from "@material-ui/icons/Cached";
import NearMeIcon from "@material-ui/icons/NearMe";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
export default function Orders() {
  return (
    <div className="orders">
      <table>
        <tr className="t-row1 t-row2">
          <th className="checkbox-table">
            <input type="checkbox" name="" id="" />
          </th>
          <th>ORDER</th>
          <th>DATE</th>
          <th>CUSTOMER</th>
          <th>TOTAL</th>
          <th>STATUS</th>
          <th>ITEMS</th>
          <th>LOCATION</th>
          <th>PAYMENT TYPE</th>
        </tr>
        <tr className="t-row1">
          <th className="checkbox-table">
            <input type="checkbox" name="" id="" />
          </th>
          <th className="order">
            {" "}
            <div className="arrow">
              <NearMeIcon />
            </div>{" "}
            #143567
          </th>
          <th className="date">22/01/2021</th>
          <th className="customer">Dominik Lamakani</th>
          <th className="total">$129.00</th>
          <th>
            <div className="status-table color-r">Refunded</div>
          </th>
          <th>1</th>
          <th>
            <img src="l1.png" alt="" />
          </th>
          <th className="payment">
            <CachedIcon style={{ color: "grey", padding: "3px" }} />{" "}
            Subscription
          </th>
        </tr>{" "}
        <tr className="t-row1">
          <th className="checkbox-table">
            <input type="checkbox" name="" id="" />
          </th>
          <th className="order">
            {" "}
            <div className="arrow">
              <NearMeIcon />
            </div>{" "}
            #227799
          </th>
          <th className="date">22/01/2021</th>
          <th className="customer">Mark Cameron</th>
          <th className="total">$89.00</th>
          <th>
            <div className="status-table color-a">Approved</div>
          </th>
          <th>2</th>
          <th>
            <img src="l2.png" alt="" />
          </th>
          <th className="payment">
            <CachedIcon style={{ color: "grey", padding: "3px" }} />
            Subscription
          </th>
        </tr>{" "}
        <tr className="t-row1">
          <th className="checkbox-table">
            <input type="checkbox" name="" id="" />
          </th>
          <th className="order">
            {" "}
            <div className="arrow">
              <NearMeIcon />
            </div>{" "}
            #143567
          </th>
          <th className="date">22/01/2021</th>
          <th className="customer">Carolyn McNeail</th>
          <th className="total">$89.00</th>
          <th>
            <div className="status-table color-a">Approved</div>
          </th>
          <th>2</th>
          <th>
            <img src="l3.png" alt="" />
          </th>
          <th className="payment">
            <img src="one1.png" alt="" style={{ padding: "3px" }} /> One-Time
          </th>
        </tr>{" "}
        <tr className="t-row1">
          <th className="checkbox-table">
            <input type="checkbox" name="" id="" />
          </th>
          <th className="order">
            {" "}
            <div className="arrow">
              <NearMeIcon />
            </div>{" "}
            #664491
          </th>
          <th className="date">22/01/2021</th>
          <th className="customer">Brian Halligan</th>
          <th className="total">$59.00</th>
          <th>
            <div className="status-table color-p">Pending</div>
          </th>
          <th>1</th>
          <th>
            <img src="l4.png" alt="" />
          </th>
          <th className="payment">
            {" "}
            <img src="one1.png" alt="" style={{ padding: "3px" }} /> One-Time
          </th>
        </tr>{" "}
        <tr className="t-row1">
          <th className="checkbox-table">
            <input type="checkbox" name="" id="" />
          </th>
          <th className="order">
            {" "}
            <div className="arrow">
              <NearMeIcon />
            </div>{" "}
            #780044
          </th>
          <th className="date">22/01/2021</th>
          <th className="customer">Cool Robot</th>
          <th className="total">$39.00</th>
          <th>
            <div className="status-table color-r">Refunded</div>
          </th>
          <th>1</th>
          <th>
            <img src="l5.png" alt="" />
          </th>
          <th className="payment">
            <CachedIcon style={{ color: "grey", padding: "3px" }} />{" "}
            Subscription
          </th>
        </tr>{" "}
        <tr className="t-row1">
          <th className="checkbox-table">
            <input type="checkbox" name="" id="" />
          </th>
          <th className="order">
            {" "}
            <div className="arrow">
              <NearMeIcon />
            </div>{" "}
            #786512
          </th>
          <th className="date">21/01/2021</th>
          <th className="customer">Sergio Gonnelli</th>
          <th className="total">$59.00</th>
          <th>
            <div className="status-table color-a">Approved</div>
          </th>
          <th>1</th>
          <th>
            <img src="l6.png" alt="" />
          </th>
          <th className="payment">
            {" "}
            <img src="one1.png" alt="" style={{ padding: "3px" }} /> One-Time
          </th>
        </tr>{" "}
        <tr className="t-row1">
          <th className="checkbox-table">
            <input type="checkbox" name="" id="" />
          </th>
          <th className="order">
            <div className="arrow">
              <NearMeIcon />
            </div>{" "}
            #664679
          </th>
          <th className="date">21/01/2021</th>
          <th className="customer">James Gill</th>
          <th className="total">$89.00</th>
          <th>
            <div className="status-table color-a">Approved</div>
          </th>
          <th>1</th>
          <th>
            <img src="l7.png" alt="" />
          </th>
          <th className="payment">
            <CachedIcon style={{ color: "grey", padding: "3px" }} />{" "}
            Subscription
          </th>
        </tr>{" "}
        <tr className="t-row1">
          <th className="checkbox-table">
            <input type="checkbox" name="" id="" />
          </th>
          <th className="order">
            <div className="arrow">
              <NearMeIcon />
            </div>{" "}
            #112467{" "}
          </th>
          <th className="date">21/01/2021</th>
          <th className="customer">Alex Brooks</th>
          <th className="total">$129.00</th>
          <th>
            <div className="status-table color-r">Approved</div>
          </th>
          <th>2</th>
          <th>
            <img src="l8.png" alt="" />
          </th>
          <th className="payment">
            <CachedIcon style={{ color: "grey", padding: "3px" }} />{" "}
            Subscription
          </th>
        </tr>
      </table>

      <div className="footer">
        <p className='footer-content'>
          Showing <strong>1</strong> to <strong>10</strong> of {" "}
          <strong>467</strong> results
        </p>

        <div className="button">
          {" "}
          <button className='button-1'> <ArrowBackIcon /> Previous</button>
          <button className='button-2'>Next <ArrowForwardIcon /></button>
        </div>
      </div>
    </div>
  );
}
