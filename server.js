const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Import the bfhl route
const bfhlRoute = require("./routes/bfhl");

// Use the bfhl route
app.use("/", bfhlRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
