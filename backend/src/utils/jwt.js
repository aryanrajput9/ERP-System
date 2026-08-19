import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { randomUUID } from 'crypto'



export const jwtToken = {
    // Access tokens are short-lived and sent with protected API requests.
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
    // Prefix employee IDs so their business role is visible without exposing credentials.
    createEmployeId() {
        return `EMP${randomUUID()}`
    },
    createManagerId() {
        return `MGR${randomUUID()}`
    },
    createHrId() {
        return `HR${randomUUID()}`
    },
    verifyAccessToken(payload) {
        return jwt.verify(payload, env.accessToken)
    },
    verifyRefreshToken(payload) {
        return jwt.verify(payload, env.refreshToken)
    }
};