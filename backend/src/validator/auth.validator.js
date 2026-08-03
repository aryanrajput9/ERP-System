import { body } from 'express-validator'


export const registerValidator = [
    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("First name is required")
        .isLength({ min: 2, max: 30 })
        .withMessage("First name must be between 2 and 30 characters"),

    body("lastName")
        .trim()
        .notEmpty()
        .withMessage("Last name is required")
        .isLength({ min: 2, max: 30 })
        .withMessage("Last name must be between 2 and 30 characters"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email address")
        .normalizeEmail(),

    body("phone")
        .trim()
        .notEmpty()
        .withMessage("Phone number is required")
        .isMobilePhone("en-IN")
        .withMessage("Invalid phone number"),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .matches(/[A-Z]/)
        .withMessage("Password must contain at least one uppercase letter")
        .matches(/[a-z]/)
        .withMessage("Password must contain at least one lowercase letter")
        .matches(/[0-9]/)
        .withMessage("Password must contain at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage("Password must contain at least one special character"),

    body("gender")
        .notEmpty()
        .withMessage("Gender is required")
        .isIn(["Male", "Female", "Other"])
        .withMessage("Invalid gender"),

    body("dateOfBirth")
        .notEmpty()
        .withMessage("Date of birth is required")
        .isISO8601()
        .withMessage("Invalid date format"),

    body("department")
        .trim()
        .notEmpty()
        .withMessage("Department is required"),

    body("designation")
        .trim()
        .notEmpty()
        .withMessage("Designation is required"),

    body("salary")
        .notEmpty()
        .withMessage("Salary is required")
        .isFloat({ min: 0 })
        .withMessage("Salary must be greater than or equal to 0"),

    body("employmentType")
        .optional()
        .isIn(["Full-Time", "Part-Time", "Intern", "Contract"])
        .withMessage("Invalid employment type"),

    body("role")
        .optional()
        .isIn(["Admin", "Manager", "HR", "Employee"])
        .withMessage("Invalid role"),

    body("address")
        .trim()
        .notEmpty()
        .withMessage("Address is required"),
];

export const loginValidator = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email address")
        .normalizeEmail(),

    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),
];