const express = require("express");
const app = express();

const users = [{
    name: "Aditya",
    Height: "630"
}];

app.get("/", function(req, res) {
    let info = users[0].Height;
    let number = 0;

    while (info != 0) {
       
            number++;
            info = Math.floor(info / 10);
        
    }

    res.send(number.toString());
});

app.listen(3001, () => {
    console.log("server is running");
});
