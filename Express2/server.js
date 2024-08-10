const express = require("express");
const Stripe = require("stripe");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const stripe = Stripe("process.env.SECRET_KEY");

app.use(bodyParser.json());
app.use(cors());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
