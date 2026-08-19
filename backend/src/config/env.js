import dotenv from 'dotenv';


dotenv.config();


// Read a configured value while allowing non-sensitive development defaults where supplied.
export const required = (name, fallback) => {

    const value = process.env[name] ?? fallback

    if (value === undefined) throw Error(404, `ENV missing ${name}`);

    return value


};

export const env = {
    // Access and refresh tokens deliberately use different secrets and lifetimes.
    port: parseInt(required("PORT", 5000)),
    mongoUrl: required("MONGO_URL"),
    saltRound: Number(required("BCRYPT_SALT_ROUNDS")),
    accessToken: required("ACCESS_TOKEN_SECRET"),
    refreshToken: required("ReFRESH_TOKEN_SECRET"),
    accessTokenExpires: "15min",
    refreshTokenExpires: "7d"
};

