import express from "express";
import home from'./service/service';
const cors = require('cors');

const app = express();
//MIDDLEWARE
app.use(express.json())
// Enable CORS for all routes
app.use(cors());
app.use(home);

const port = 3001;
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});