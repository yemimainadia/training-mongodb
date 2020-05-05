const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://root:root@gadget-products-niflh.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function main() {
    try {
        await client.connect();

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
* Print the names of all available databases
* @param {MongoClient} client A MongoClient that is connected to a cluster
*/
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


//save json 

var fs = require('fs');
fs.readFile('products.json', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
    var json = JSON.parse(data);



    db.configurations.insert(json, function (err, doc) {
        console.log(data);
        if (err) throw err;
    });
});

