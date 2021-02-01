import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import users from './Users/index.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/users/", users)

mongoose.connect("mongodb://localhost/academy1", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(5000, console.log("Listening go port 5000...")))