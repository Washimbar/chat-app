require("dotenv").config();
const express = require("express");
const connectDB = require("./src/connection/connectDB");

const PORT = process.env.PORT
const app = express();

app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/index.html');
})

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