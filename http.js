var http = require("http");

http.createServer(function (request, response) {
    let date_ob = new Date();
    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();
   response.end(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
}).listen(8989);

// Console will print the message
console.log('Node Server Application running at http://127.0.0.1:8989')