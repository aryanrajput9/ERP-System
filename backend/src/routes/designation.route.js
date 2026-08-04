import { Router } from 'express'
import { designationController } from '../module/designation/controller/designation.controller.js';


const designationRoute = Router();


designationRoute.post(
    "/",
    designationController.createDesignationController
);

designationRoute.get(
    "/",
    designationController.getAllDesignationController
);

designationRoute.get(
    "/:id",
    designationController.getDesignationByIdController
);

designationRoute.patch(
    "/:id",
    designationController.editDesignationByIdController
);

designationRoute.delete(
    "/:id",
    designationController.deleteDesignationByIdController
);




// POST    /api/designation
// GET     /api/designation
// GET     /api/designation/:id
// PATCH   /api/designation/:id
// DELETE  /api/designation/:id

export default designationRoute