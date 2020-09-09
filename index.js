const express = require("express");
const app = express();

const port = 5000;

//Body parser
app.use(express.urlencoded(
    {
        extended: false
    }
));

//Listen on port 5000
app.listen(port, () => {
    console.log(`
    Server is ready and listening on port 500
    Visit http://localhost:5000 in your browser
    `);
});

//Create the home route
app.get("/", (req, res) => {
    res.send("Welcome to your own express server! A basic one!");
});

//Mock API endpoints
app.get("/users", (req, res) => {
    res.json(
        [
            {
                name: "Dilshad",
                location: "Faisalabad"
            },
            {
                name: "Russell",
                location: "Peshawar"
            }
        ]
    );
});

//Mock API end point to post a user to the server
app.post("/user", (req, res) => {
    //Get the name & the location of the user from the body of the request by destructuring.
    const { name, location } = req.body;
    res.send(
        {
            status: "User created successfully!",
            name,
            location //THis is the same as location: location
        }
    );
});