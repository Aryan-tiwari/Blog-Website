const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
let database;
async function connect(){
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    // const client = await MongoClient.connect('mongodb+srv://aditya:aditya@cluster0.fqhf1bw.mongodb.net/?retryWrites=true&w=majority');
    database = client.db('blog');
}
function getDb(){
    if(!database){
        throw {message: 'database not connected'};
    }
    return database;
}

module.exports={
    connectToDatabase:connect,
    getDb:getDb
}