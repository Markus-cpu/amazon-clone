const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')
('sk_test_51HefQzIfycZzeT9LKV0txSFDm6GoH3AqRPA5b48sj' +
    '2onak3DNEp3m2Df2vIodW2Cnzzrn6Klu3a0t3T3mzTePiah00q1gn0lfN')

// App

// - App config
const app = express()

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (req, res) => res.status(200).send('Hello World!'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total

    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // субъединицы валюты (subunits of the currency)
        currency: 'usd',
    })

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/clone-17b50/us-central1/api



