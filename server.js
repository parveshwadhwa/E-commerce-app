const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Health check endpoint
app.get('/health', (req, res) => res.status(200).send('OK'));

// Stripe payment endpoint
app.post('/payment', async (req, res) => {
  try {
    const { token, amount } = req.body;

    const charge = await stripe.charges.create({
      source: token.id,
      amount,
      currency: 'usd',
    });

    res.status(200).send({ success: charge });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).send({ error });
  }
});

// Serve React build for production
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
