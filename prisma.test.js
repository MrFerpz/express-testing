const index = require("./index")

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", index);


test("new car created", done => {
    request(app)
    .post("/cars")
    .type("form")
    .send({ 
        brand: "Ford",
        model: "Fiesta",
        year: 2009
        })
    .then(() => {
        request(app)
        .get("/cars")
        .expect([{ brand: "Ford", model: "Fiesta", year: 2009 }], done)
    })})