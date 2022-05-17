import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({ id }, "sagsdfgsdfgddf", {
        expiresIn: '30d'
    })
}

export default generateToken