const express = require("express");
const app = express();
const port = process.env.PORT || 4500;
const cors = require("cors");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const uploads = multer({ storage });
app.get("/", (req, res) => {
  res.send("hi abarna");
  res.status(200).json({ success: true, message: "connected" });
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://Jananisuresh:Janani1010@backendfood.bnjbiah.mongodb.net/?retryWrites=true&w=majority&appName=backendfood";

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
    const ProductCollection = client.db("foodDB").collection("foodproductlist");

    app.post("/product", uploads.single("image"), async (req, res) => {
      try {
        const { image, title, ds, price, quantity } = req.body;
        const imagePath = req.file ? `/uploads/${req.file.filename}` : image;

        const foodObj = {
          image: imagePath,
          title,
          ds,
          price,
          quantity,
        };
        const result = await ProductCollection.insertOne(foodObj);
        res.send(result);
      } catch {
        res.status(400).send({ message: "Error in adding food" });
      }
    });
    app.get("/allproducts", async (req, res) => {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const skip = (page - 1) * limit;
      const total = await ProductCollection.countDocuments();
      const totalpages = Math.ceil(total / limit);

      const foodproductlist = ProductCollection.find()
        .skip(skip)
        .limit()
        .toArray();
      res.json({
        foodproductlist,
        totalpages,
        currentpage: page,
      });
    });
    app.get("/product/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await ProductCollection.findOne(filter);
      res.send(result);
    });
    app.patch("/product/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const update = req.body;
      const updateDoc = { $set: { ...update } };
      const option = { upsert: true };
      const result = await ProductCollection.updateOne(
        filter,
        updateDoc,
        option
      );
      res.send(result);
    });
    app.delete("/product/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await ProductCollection.deleteOne(filter);
      res.send(result);
    });
    app.delete("/foods", async (req, res) => {
      const { ids } = req.body;
      const objIds = ids.map((id) => new ObjectId(id));
      const result = await ProductCollection.deleteMany({
        _id: { $in: objIds },
      });
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
  console.log(`connected successfully ${port}`);
});
