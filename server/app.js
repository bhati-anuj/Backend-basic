import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working ");
});

app.post("/form", (req, res) => {
  const obj = {
    email: "anuj@gmail.com",
    password: 1234,
  };

  if (req.body.email === obj.email) {
    if (req.body.password *1 === obj.password) {
      res.send("You are logged in");
    } else {
      res.send("Password is incorrect");
    }
  } else {
    res.send("Email is incorrect");
  }
});

app.put("/formupdate", (req, res) => {
  console.log(req.body);
  console.log(req.query);

  const obj = {
    id: 123,
    name: "kamal",
  };
  console.log(typeof (req.query.id * 1));
  console.log(typeof obj.id);
  if (req.query.id * 1 === obj.id) {
    res.send(req.body);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
