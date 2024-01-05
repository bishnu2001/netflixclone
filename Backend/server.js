const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const connectdb = require('./config/db');
connectdb();
const port = 4500;
const useroutes=require('./routes/Userroutes')
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/user",useroutes)
// app.get('/', (req, res) => {
//     res.send('Server ready');
// });
app.listen(port, () => {
    console.log(`Server run at ${port}`);
});