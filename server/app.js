import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

main().catch((err) => console.log(err));
async function main() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/basicBackend")
    .then(() => console.log("Database is active"))
    .catch((err) => console.log(err));


    const userSchema = mongoose.Schema({
      email : String,
      password: String,
    })

    const anujSchema = mongoose.Schema({
      email : String,
      password:String,
    })

    const USER = await mongoose.model("User",userSchema) 
    const ANUJ = await mongoose.model("anuj",anujSchema)


  const app = express();
  const port = 8000;
  app.use(bodyParser.urlencoded({ extended: "true" }));
  app.use(cors());
  app.use(express.json());

  app.get("/", async (req, res) => {
    const users = await USER.find()
    res.json(users);
  });



  app.post("/form", async(req, res) => {
   

    // const user = await USER.create(req.body)
    console.log(req.body.email);
    const anuj = await ANUJ.create(req.body)
    // res.json(user);
  res.json("Logged In")

 
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
}
