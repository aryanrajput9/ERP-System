import expresss from 'express';
import { errorHandler } from './middleware/error-handler.js';
import { notFoundError } from './middleware/notFound-error.js';
import routes from './routes/inde.route.js';
import cookiparser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js'


export const app = expresss();


// Parse JSON bodies and cookies before requests reach the route controllers.
app.use(expresss.json());
app.use(cookiparser());

// Swagger UI is mounted separately from the business API under /api-docs.
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//routes
app.use("/api", routes)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running"
    });
});



//error middleware
// Convert unmatched URLs into a 404 error before the general error formatter runs.
app.use(notFoundError)//route not match
// Return all handled and unexpected failures in the API's standard error shape.
app.use(errorHandler)// global error

