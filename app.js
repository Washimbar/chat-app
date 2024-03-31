require("dotenv").config();
const express = require("express");
const connectDB = require("./src/connection/connectDB");
const path = require("path");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT
const app = express();

//request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/index.html');
})

//set view engine
app.set('view engine', 'ejs');

//set static folder
app.use(express.static(path.join(__dirname, 'public')));  

//parser cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//set up routes


//error handlers


const start = async () => { 
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error.message)
    }
}

start();