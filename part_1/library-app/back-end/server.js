const express = require("express");
const cors = require("cors");
const bookRouter =require("./routers/route/book")
const app = express();

app.use(express.json())
app.use(cors());


app.use("/" , bookRouter)

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
