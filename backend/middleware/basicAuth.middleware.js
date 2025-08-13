require('dotenv').config();
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export default async function basicAuth(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send({ message: 'No auth token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).send({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.redirect('/');
        } else {
            return res.redirect('/login');
        }
    }
}