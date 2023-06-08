// Dependencies //
require('dotenv').config();
const dbUri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

// Main Code //
class Database{
    #dbUri;
    #dbName;
    #route;

    constructor(route = "???"){
        this.#dbUri = dbUri;
        this.#dbName = dbName;
        this.#route = route;
    }

    async connect(){
        try {
            await mongoose.connect(this.#dbUri, {
                dbName: this.#dbName,
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            .then(() => {
               console.log(this.#route + " Estabilished connection with Mongo") 
            });
        } catch(error){
            console.error(error.message);
            process.exit(1);
        }
    }
}

module.exports = Database;