const express = require('express');
const app = express();
const http = require('http');
const dotenv = require('dotenv');
const conectdb = require('./src/db/dbconect');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const routes = require("./src/routers/index");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);
app.use(cookieParser());

dotenv.config({
    path: './.env'
});




conectdb();
http.createServer(app).listen(process.env.PORT || 4000, () => {
    console.log(`server listening on ${process.env.PORT}`);
})