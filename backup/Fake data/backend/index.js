const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://jananisuresh1016:Janani1010@cluster11.4caudsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster11";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const DataCollection = client.db("fakeDB").collection("fakedatascoll");

    app.post("/data", async (req, res) => {
      const data = req.body;
      const result = await DataCollection.insertOne(data);
      res.send(result);
    });
    app.get("/alldatas", async (req, res) => {
      const fakedatascoll = DataCollection.find();
      const result = await fakedatascoll.toArray();
      res.send(result);
    });
    app.get("/data/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await DataCollection.findOne(filter);
    });
    //authentication page
    const users = [];

    app.post("/api/register", (req, res) => {
      const { email, password } = req.body;
      if (users.find((users) => users.email === email)) {
        return res.status(400).json({ message: "User Already Exists" });
      }
      users.push({ email, password });
      res.status(201).json({ message: "User Registered Successfully" });
    });

    app.post("/api/login", (req, res) => {
      const { email, password } = req.body;
      const user = users.find(
        (users) => users.email === email && users.password === password
      );
      if (!user) {
        res.status(400).json({ message: "Invalid Email or Password" });
      }
      res.status(201).json({ token: "dummy-token" });
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //     await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`connected to mongoDB  ${port}`);
});
