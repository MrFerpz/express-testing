//// index.js
const express = require("express");
const index = express.Router();
const { newCar, findAllCars } = require('./prisma');

const array = [];

index.get("/", (req, res) => {
  res.json({ name: "frodo" });
});

index.get("/test", (req, res) => res.json({ array }));

index.post("/test", (req, res) => {
  array.push(req.body.item);
  res.send('success!');
});

index.post("/cars", async function (req, res) {
    const brand = req.body.brand;
    const model = req.body.model;
    const year = req.body.year;
    await newCar(brand, model, year);
    res.send("boom! new car added!")
})

index.get("/cars", async function (req, res) {
    const cars = await findAllCars();
    res.json(cars)
})

module.exports = index;