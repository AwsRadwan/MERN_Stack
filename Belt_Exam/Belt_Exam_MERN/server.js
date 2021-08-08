const express = require("express");
var cors = require('cors');
const app = express();
const port = 8000;
app.use(cors());

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the Tasks routes function from our Task.routes.js file
const AllMyTaskRoutes = require("./server/routes/task.routes");
AllMyTaskRoutes(app);

app.listen(port, () => console.log(`The server is all fired up on port:0 ${port}`));
