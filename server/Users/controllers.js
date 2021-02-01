import User from './model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    const {email, password} = req.body
    try{
        const userExisted = await User.findOne({email: email})
        if(!userExisted) return res.status(400).json("Are you sure you are signed up?")
        const validPass = await bcrypt.compare(password, userExisted.password)
        if(!validPass) return res.status(400).json("Wrong password")

        const token = jwt.sign({email: userExisted.email, id: userExisted._id}, process.env.AUTH_PASS, {expiresIn: '15m'})
        res.json({user: userExisted, token})
    }
    catch(err){
        res.status(403).json("Something goes wrong!" + err.message)
    }
}

export const createUser = async (req, res) => {
    const {password, username, email} = req.body
    const hashedPass = await bcrypt.hash(password, 10)
    const user = new User({username, email, password: hashedPass});

    user.save().then(() => {
        const token = jwt.sign({email: email, password: hashedPass}, process.env.AUTH_PASS, {expiresIn: '15m'})
        return res.json({user, token})
            }).catch((err) => res.status(409).json(err.message))
}