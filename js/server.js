const express = require('express')
const {MongoClient} = require('mongodb');

const app = express()
const port = 3000


// Connection URL and database name
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'Recipe_Meal_Planner';

//insert a document
async function createDocument() {
    const client = new MongoClient(url);
    try {
      await client.connect();
      console.log("Connected to the database");
  
      const db = client.db(dbName);
  
      const collection = db.collection("Signup");
  
      // Create a new document
      const newUser = new User({username, email, password});
  
      // Insert the document into the collection
      const result = await collection.insertOne(newUser);
      console.log("Created document:", result.insertedId);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      await client.close();
      console.log("Disconnected from the database");
    }
}

//read documents
// async function readDocument(res) {
//   const client = new MongoClient(url);
//   try {
//     await client.connect();
//     console.log("Connected to the database");

//     const db = client.db(dbName);

//     const collection = db.collection("Signup");

//     // Insert the document into the collection
//     const result = await collection.find().toArray();

//     res.json(result);
//     console.log("Created document:", result.insertedId);
//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     await client.close();
//     console.log("Disconnected from the database");
//   }
// }

// Update a document
// async function updateDocument() {
//     const client = new MongoClient(url);
//     try {
//       await client.connect();
//       console.log("Connected to the database");
  
//       const db = client.db(dbName);
  
//       const collection = db.collection("Signup");
  
//       // update
//       const filter = { name: 'John Doe' };
  
 
//       const update = { $set: { phone: "0123456789" } };
  
//   // Update the document
//       const result = await collection.updateOne(filter, update);
//       console.log('Updated document:', result.modifiedCount);
//     } catch (err) {
//       console.error("Error:", err);
//     } finally {
//       await client.close();
//       console.log("Disconnected from the database");
//     }
// }
// //delete a document
// async function deleteDocument() {
//     const client = new MongoClient(url);
//     try {
//       await client.connect();
//       console.log("Connected to the database");
  
//       const db = client.db(dbName);
  
//       const collection = db.collection("Signup");
  
//       // update
//       const filter = { name: 'Ved' };
    
//     // Delete the document
//     const result = await collection.deleteOne(filter);
//     console.log(result);
//     console.log('Deleted document:', result.deletedCount);
//     } catch (err) {
//       console.error("Error:", err);
//     } finally {
//       await client.close();
//       console.log("Disconnected from the database");
//     }
// }


app.get('/', (req, res) => {
    res.send('Hello Sakshi is here')
})

app.get('/create',async (req, res) => {
    await createDocument();
    res.send('inserted')
})

// app.get('/read', (req, res) => {
//     readDocument(res);
// })

// // app.get('/update',async (req, res) => {
// //     await updateDocument();
// //     res.send('Updated')
// // })

// app.get('/delete',async (req, res) => {
//     await deleteDocument();
//     res.send('Deleted')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



