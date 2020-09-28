const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI,
    nodeENV: process.env.NODE_ENV
}