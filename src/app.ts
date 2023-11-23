import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

const uri: string = process.env.MONGO_URL || "";
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(uri)
        .then(()=>{console.log(`Server running on http://localhost:${PORT}`)})
        .catch(error => {throw error})