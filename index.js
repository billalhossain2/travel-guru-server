const hotelsData = require("./data/hotels.json");
const spotsData = require("./data/spots.json");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Travel guru app is running on the port ${port}`);
});

//get all hotels
app.get("/hotels", (req, res) => {
  res.send(hotelsData);
});

//get a single hotel
app.get("/hotels/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);
  const hotel = hotelsData.find((hotel) => hotel.id === paramsId);
  if (hotel) {
    res.send(hotel);
  } else {
    res.send("Not found hotel with the id you are searching");
  }
});

//get all spots
app.get("/spots", (req, res) => {
  res.send(spotsData);
});

//get a single spot
app.get("/spots/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);

  const spot = spotsData.find((spot) => spot.id === paramsId);

  if (spot) {
    res.send(spot);
  } else {
    res.send("Not found the spot that you are searching");
  }
});

app.listen(port, () => {
  console.log(`Travel guru app is running on the port ${port}`);
});
