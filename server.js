const express = require('express');
const cors = require('cors');
const path = require('path');
const data = require('./data');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// REST API endpoints
app.get('/api/company',      (req, res) => res.json(data.company));
app.get('/api/gap',          (req, res) => res.json(data.nationalGap));
app.get('/api/marketing',    (req, res) => res.json(data.marketingMix7P));
app.get('/api/revenue',      (req, res) => res.json(data.revenue2025));
app.get('/api/distribution', (req, res) => res.json(data.distribution));
app.get('/api/hayami',       (req, res) => res.json(data.hayami));
app.get('/api/swot',         (req, res) => res.json(data.swot));

// Interactive Hayami calculator — audience can change inputs live!
app.post('/api/hayami/calculate', (req, res) => {
  const { output, input, labor, wage, rawPrice, otherInputs, outputPrice } = req.body;
  const cf = output / input;
  const laborCoef = labor / input;
  const outputValue = cf * outputPrice;
  const valueAdded = outputValue - otherInputs - rawPrice;
  const laborIncome = laborCoef * wage;
  const profit = valueAdded - laborIncome;
  const margin = outputValue - rawPrice;
  res.json({
    conversionFactor: +cf.toFixed(5),
    outputValue: +outputValue.toFixed(2),
    valueAdded: +valueAdded.toFixed(2),
    valueAddedRatio: +((valueAdded / outputValue) * 100).toFixed(2),
    laborIncome: +laborIncome.toFixed(2),
    profit: +profit.toFixed(2),
    profitRate: +((profit / valueAdded) * 100).toFixed(2),
    margin: +margin.toFixed(2)
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running → http://localhost:${PORT}`));