const Router = require("express");
const registerSchema = require("../schema/register-schema");
const validateRequestSchema = require("../middleware/validate-request-schema");

const rootRouter = Router();

rootRouter.post(
  "/register",
  registerSchema,
  validateRequestSchema,
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions

    res.sendStatus(201);
  }
);

module.exports = rootRouter;
