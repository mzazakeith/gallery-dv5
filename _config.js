require("dotenv").config();
let config = {}

let DB_USERNAME= process.env.DB_USERNAME
let DB_PASSWORD= process.env.DB_PASSWORD

// Update to have your correct username and password
config.mongoURI = {
    production: `mongodb+srv:/${DB_USERNAME}:${DB_PASSWORD}@cluster0.xaakrlf.mongodb.net/darkroom?retryWrites=true&w=majority`,
    development: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.xaakrlf.mongodb.net/darkroom-dev?retryWrites=true&w=majority`,
    test: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.xaakrlf.mongodb.net/darkroom-test?retryWrites=true&w=majority`,
}
module.exports = config;
