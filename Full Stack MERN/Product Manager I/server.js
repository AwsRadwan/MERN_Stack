const express = require("express");
const cors = require('cors');
const app = express();


// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the Products routes function from our Product.routes.js file
const AllMyProductRoutes = require("./server/routes/Product.routes");
AllMyProductRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
