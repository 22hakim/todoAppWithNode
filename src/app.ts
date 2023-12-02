import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"
import bodyParser from "body-parser"

const config = require("../../config/config.dev.json");
const app: Express = express()
const PORT: string | number = config.PORT
const uri: string = config.MONGO_URL || "";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(todoRoutes)

console.log(uri);

mongoose.connect(uri)
mongoose.connection.once('open',() => { 
    app.emit('ready'); 
});

app.on('ready', function() { 
    app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`); 
  });
});  