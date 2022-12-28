const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";

app.get('/', (req, res) => {
  res.send(`
    <form id="form">
      <label for="customer">Select customer:</label><br>
      <select id="customer">
        <option value="customer1">Customer 1</option>
        <option value="customer2">Customer 2</option>
        <option value="customer3">Customer 3</option>
      </select><br>
      <button type="button" onclick="selectSlot()">Select parking slot</button>
      <br><br>
      <span id="result"></span>
    </form>
  `);
});

function saveToDatabase(customer, slot) {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("test").collection("parking");
    // Insert the customer name and parking slot into the database
    collection.insertOne({ customer: customer, slot: slot });
