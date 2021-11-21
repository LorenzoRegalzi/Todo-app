const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://user:user@cluster0.lxo6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
let db = null;



export async function connectDB() {
    if(db) return db;
    let client = await MongoClient.connect(uri, {useNewUrlParser: true});
    db = client.db();
    console.info("Got DB", db);
    return db;
}

connectDB();