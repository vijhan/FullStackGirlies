import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Pm2hrP9sM0O5bzsP9mGc6XjrEetTZabX3gKwOh6CHd9Wlo2ArEIwJBKDzyaJuO2SYDg82DpFdj52wsgYUnmGoSb00NNWzYWP8"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const response = await fetch(
          "http://localhost:3001/create-payment-intent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: 1000, // Amount in cents
            }),
          }
        );

        const data = await response.json();
        const { clientSecret } = data;

        const confirmResult = await stripe.confirmCardPayment(clientSecret, {
          payment_method: id,
        });

        if (confirmResult.paymentIntent.status === "succeeded") {
          setPaymentStatus("Payment successful!");
        } else {
          setPaymentStatus("Payment failed!");
        }
      } catch (error) {
        setPaymentStatus(`Payment error: ${error.message}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </form>
  );
};

const StripeContainer = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeContainer;
