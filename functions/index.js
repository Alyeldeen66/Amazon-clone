const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")(
  "sk_test_51KxVIXHHeWXsQnXDD6TDzMexzGYNhHjd8FS89nNSCps89PWxddNZES28VhfMQqz2QNM26ljdJDZxcWyiY01qUMQh00AFm6RhPg"
);

//API

//App config
const app = express();

//MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, responce) => responce.status(200).send("hello world"));
app.post("/payments/create", async (request, responce) => {
  const total = request.query.total;
  console.log("payment request recieved ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
  });
  responce.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

//(http://localhost:5001/clone-93e35/us-central1/api)
