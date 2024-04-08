const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB URI
const uri = "mongodb+srv://hausofjas:password!@inventory.fqyk8sj.mongodb.net/?retryWrites=true&w=majority&appName=Inventory";

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

// Middleware
app.use(express.json());

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const inventoryCollection = client.db("inventoryDB").collection("items");

    // Get all inventory items
    app.get('/inventory', async (req, res) => {
      const items = await inventoryCollection.find().toArray();
      res.json(items);
    });

    // Get a single inventory item by ID
    app.get('/inventory/:id', async (req, res) => {
      try {
        const item = await inventoryCollection.findOne({ _id: new ObjectId(req.params.id) });
        if (!item) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // POST a new inventory item
    app.post('/inventory', async (req, res) => {
      try {
        const newItem = await inventoryCollection.insertOne(req.body);
        res.status(201).json(newItem);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    // Update an inventory item by ID
    app.put('/inventory/:id', async (req, res) => {
      try {
        const updatedItem = { $set: req.body };
        const result = await inventoryCollection.updateOne({ _id: new ObjectId(req.params.id) }, updatedItem);
        if (result.modifiedCount === 0) {
          return res.status(404).json({ message: 'Item not found or no changes made' });
        }
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // Delete an inventory item by ID
    app.delete('/inventory/:id', async (req, res) => {
      try {
        const result = await inventoryCollection.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
}

run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
