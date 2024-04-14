require("dotenv").config();
let config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: `mongodb+srv:/${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xaakrlf.mongodb.net/darkroom?retryWrites=true&w=majority`,
    development: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xaakrlf.mongodb.net/darkroom-dev?retryWrites=true&w=majority`,
    test: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xaakrlf.mongodb.net/darkroom-test?retryWrites=true&w=majority`,
}
module.exports = config;
