import express from 'express';
import { MongoClient } from "mongodb";
// import Connection from './mongoFile.js';
import cors from 'cors'
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 8080;
const url = "mongodb://localhost:27017";
app.use(
    cors({ origin: "*" })
)

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());



// MongoClient.connect(process.env.MONGO, (err, res) => {
//     if (err) throw err;
//     const myDatabase = res.db('mydb');


//     const insertData = async (value) => {
//         const checkMain = await myDatabase.collection('users').findOne({ email: value.email })
//         console.log(checkMain)
//         if (checkMain?.email !== value.email) {
//             myDatabase.collection('users').insertOne(value, (err) => {
//                 if (err) throw err;
//                 console.log("inserted successfully")
//                 res.close();
//             })
//         }
//     }
//     app.post('/adduser', (req, resdata) => {
//         insertData(req?.body?.data);
//         resdata.send({ status: 'true' })

//     })



// })




MongoClient.connect(process.env.MONGO, (err, db)=> {
    if (err) throw err;
    var dbo = db.db("mydb");
    //Find all documents in the customers collection:
    dbo.collection("users").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log('hello')
      result.map((val)=> {
        console.log(val)})
      db.close();
    });
  });
  


  app.get('/', (err, response) => {
    response.send("Hello World")
})



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});