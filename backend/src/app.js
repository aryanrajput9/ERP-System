import expresss from 'express';
import { errorHandler } from './middleware/error-handler.js';
import { notFoundError } from './middleware/notFound-error.js';
import routes from './routes/inde.route.js';
import cookiparser from 'cookie-parser'


export const app = expresss();


app.use(expresss.json());
app.use(cookiparser())

//routes
app.use("/api", routes)



//error middleware
app.use(notFoundError)//route not match
app.use(errorHandler)// global error

