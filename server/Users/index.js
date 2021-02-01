import express from 'express'
const router = express.Router()
import {login, createUser} from "./controllers.js"

router.post("/login", login)
router.post("/register", createUser)

export default router