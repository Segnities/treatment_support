const {MongoClient} = require("mongodb");
const client = new MongoClient(process.env.DB_URL);

const connectToDatabase = async ()=> {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        return "done.";
    } catch (e) {
        console.log(e)
    } finally {
        await client.close();
    }
}

module.exports = {connectToDatabase};