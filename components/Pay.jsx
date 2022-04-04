import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Pay = () => {
  const KEY =
    "pk_test_51KkiDeAUFaW3s2nQRhJZ6vn0YcIoAfos8Q8ulVMRb2ihdtrGWoUaek2QEnbBbv5jcK2mOpTE36hj6sKyji0Zrkli00jPqIuVHH";

  const [stripeToken, setStripeToken] = useState(null);
  useEffect(() => {
    try {
      const res = axios.post("http://localhost:5000/api/checkout/payment", {
        amount: 2000,
        tokenId: stripeToken.id,
      });
    } catch (error) {
      console.log(error);
    }
  }, [stripeToken]);

  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StripeCheckout
        description="your total is 1000 USD"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        billingAddress
        ShippingAddress
        name="shop24seven"
      >
        <button>Pay</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;