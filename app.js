const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

var items = ["Eat food"];
// var workItems = "";

app.get("/", function(req, res) {
    // res.send("Hello!");

    var today = new Date;
    var day = "";

    // if (today.getDay() == 6 || today.getDay() == 7) {
    //     // res.send("Yaya its weekend");
    //     day = "Weekend";
    //     // res.sendFile(__dirname + "/weekend.htm");
    //     res.render("list", { kindOfDay: day })
    // } else {
    //     // res.send("Boo! I have to work");
    //     day = "Weekday";
    //     // res.sendFile(__dirname + "/weekday.htm");
    //     res.render("list", { kindOfDay: day })
    // }




    // if (today.getDay() == 0)
    //     day = "Sunday";
    // else if (today.getDay() == 1)
    //     day = "Monday";
    // else if (today.getDay() == 2)
    //     day = "Tuesday";
    // else if (today.getDay() == 3)
    //     day = "Wednesday";
    // else if (today.getDay() == 4)
    //     day = "Thrusday";
    // else if (today.getDay() == 5)
    //     day = "Friday";
    // else if (today.getDay() == 6)
    //     day = "Saturday";

    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", option);
    // var day = today.toLocaleDateString("en-US");

    res.render("list", { listItem: day, addNewItems: items });
});

// app.get("/work", function(req, res) {
//     res.render("list", { listItem: "Work List", addNewItems: items });
// })

app.post("/", function(req, res) {
    var item = req.body.newItem;
    items.push(item);
    // console.log(req.body)
    // if (req.body.button == "Work List") {
    //     workItems.push(item);
    //     res.render("/work");
    // } else {
    //     items.push(item);
    //     res.render("/");
    // }

    // res.send("Item has been added");
    // res.render("list", { addNewItem: newItem })
    // console.log(items);
    res.redirect("/");
});

// app.post("/work", function(req, res) {
//     var item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});