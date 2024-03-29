import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, resp, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, "sagsdfgsdfgddf")
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.error(error)
            resp.status(401)
            throw new Error('Not authorized , token failed')
        }
    }
    if (!token) {
        resp.status(401)
        throw new Error('Not authorized , not token')
    }
})

const admin = (req, resp, next) => {
    if (req.user && req.user.isAdmin) {
        next()
    } else {
        resp.status(401)
        throw new Error('You Dont Have That Permission')
    }
}
export { protect, admin }