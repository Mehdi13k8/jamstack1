import React from "react"
import PaypalExpressBtn from 'react-paypal-express-checkout';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM
//const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const onSuccess = (payment) => {
  // 1, 2, and ... Poof! You made it, everything's fine and dandy!
      console.log("Payment successful!", payment);
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
}

const onCancel = (data) => {
  // The user pressed "cancel" or closed the PayPal popup
  console.log('Payment cancelled!', data);
  // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
}

const onError = (err) => {
  // The main Paypal script could not be loaded or something blocked the script from loading
  console.log("Error!", err);
  // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
  // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
}

let env = 'sandbox'; // you can set this string to 'production'
let currency = 'EUR'; // you can set this string from your props or state  
let total = 1;  // this is the total amount (based on currency) to charge
// Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

const client = {
  sandbox:    'ATftPyYXzJIMmE5_djLhb3D2sY2neMhwG0ISH9hy1hnPMEo7QKjrb0vNHesbYrTGKYX7U-3fXAMyfcRL',
  production: 'YOUR-PRODUCTION-APP-ID',
}


const PostLink = ({ post  }) => (
  <div>
    {(function() {
        if (window.location.pathname == "/article/" && window.location.hash.substr(1) == "") {
          return <PaypalExpressBtn client={client} currency={'EUR'} total={post.sale_price} />;
        }
        else if (window.location.pathname == "/article/"  && (window.location.hash.substr(1) == "j/" || window.location.hash.substr(1) == "/j")) {
          return <PaypalExpressBtn client={client} currency={'EUR'} total={post.sale_price} />;
        }
        else if (window.location.pathname == "/article/"  && (window.location.hash.substr(1) == "h/" || window.location.hash.substr(1) == "/h")) {
          return <PaypalExpressBtn client={client} currency={'EUR'} total={post.sale_price} />;
        }
        else if (window.location.pathname == "/article/"  && (window.location.hash.substr(1) == "b/" || window.location.hash.substr(1) == "/b")) {
          return <PaypalExpressBtn client={client} currency={'EUR'} total={post.sale_price} />;
        }
        else {
            return <PaypalExpressBtn client={client} currency={'EUR'} total={post.data.sale_price} />;
        }
      })()}
  </div>
)

export default PostLink