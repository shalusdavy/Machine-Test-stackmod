const express = require('express');
const cors = require("cors");
require('dotenv').config();
const connectToDatabase =require("./dataBase")
const taskRouter = require("./taskRouter")


const app = express();
const PORT = process.env.PORT || 3004;
app.use(cors());

connectToDatabase();

app.use("/tast", taskRouter,);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


