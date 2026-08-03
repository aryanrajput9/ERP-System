import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { randomUUID } from 'crypto'



export const jwtToken = {
    generateAccessToken(payload) {
        return jwt.sign(payload, env.accessToken, {
            expiresIn: env.accessTokenExpires,
        });
    },

    generateRefreshToken(payload) {
        return jwt.sign(payload, env.refreshToken, {
            expiresIn: env.refreshTokenExpires,
        });
    },
    createEmployeId() {
        return `EMP${randomUUID()}`
    },
    verifyAccessToken(payload) {
        return jwt.verify(payload, env.accessToken)
    },
    verifyRefreshToken(payload) {
        return jwt.verify(payload, env.refreshToken)
    }
};