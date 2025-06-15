const express = require('express');
const app = express();
const path = require("path");

const http = require("http");

const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server);

app.set("view engine" , "ejs");
app.set(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
    console.log("connected");
});

app.get("/", function (req, res){
    res.render('hey');
});

app.listen(2000, () => {
    console.log('server is running on port 2000');
});