// importing

import express from "express";
import mysql from "mysql";
import Pusher from "pusher";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 9000;

var pusher = new Pusher({
  appId: "1085459",
  key: "7c15da29a10ee685fbb6",
  secret: "69c95e33fba8da5223f7",
  cluster: "ap2",
  encrypted: true,
});

// middleware
app.use(express.json());

app.use(cors());

// (req, res, next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Headers", "*")
//     next()
// }
// DB config

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// ????

// api routes

app.get("/", (req, res) => res.status(200).send("hello World"));

// app.get("/mzj/list", (req, res) => {
//   const data = [
//     { id: 1, name: "buddhi" },
//     { id: 2, name: "imash" },
//   ];
//   res.status(200).send(data);
// });
// app.post("/mzj/new", (req, res) => {
//   const mzj = req.body;

//   pusher.trigger("messages", "inserted", mzj);
//   res.status(201).send(mzj);
// });

// app.get('/messages/sync', (req, res)= >{
//     M
// })

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
