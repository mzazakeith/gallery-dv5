require("dotenv").config();
let config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: `mongodb+srv:/deploy-user:QviknVGYr5tURxTt@cluster0.xaakrlf.mongodb.net/darkroom?retryWrites=true&w=majority`,
    development: `mongodb+srv://deploy-user:QviknVGYr5tURxTt@cluster0.xaakrlf.mongodb.net/darkroom-dev?retryWrites=true&w=majority`,
    test: `mongodb+srv://deploy-user:QviknVGYr5tURxTt@cluster0.xaakrlf.mongodb.net/darkroom-test?retryWrites=true&w=majority`,
}
module.exports = config;
