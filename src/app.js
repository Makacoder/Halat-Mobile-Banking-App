const express = require('express')
const dotenv = require('dotenv')
const app = express();
dotenv.config()
const port = process.env.PORT || 2025;

app.listen(port, console.log(`App is listening on port ${port}`));

