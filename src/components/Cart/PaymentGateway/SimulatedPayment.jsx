import React from "react";
import "./SimulatedPayment.scss";
import { notifyError, notifySuccess } from "../../../utils/notify";
import { useAuth0 } from "@auth0/auth0-react";
import {useAppContext} from "../../../utils/context"

function SimulatedPayment({ amount }) {
  const {setCartItems} = useAppContext()
  const { user } = useAuth0();
  const simulatePayment = () => {
    if (!user) {
      notifyError("Please login to proceed payment!");
      return;
    }
    const options = {
      key: "rzp_test_dw7QcgR9B6Y84N",
      amount: amount * 100, // Amount in paise (example: 100 paise = 1 INR)
      currency: "INR",
      name: "Shopper'sHub",
      description: "Simulated Payment",
      image: "../logo.png",
      handler: function (response) {
        if (response.razorpay_payment_id) {
          notifySuccess("Payment Successful!");
          setCartItems([])
        } else {
          notifyError("Payment failed!");
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <button className="checkout-cta" onClick={simulatePayment}>
        Checkout
      </button>
    </div>
  );
}

export default SimulatedPayment;
