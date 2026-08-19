

export const asyncHandler = (handler) => {
    return (req, res, next) => {
        // Express does not consistently catch rejected async handlers, so forward every rejection explicitly.
        Promise.resolve(handler(req, res, next)).catch(next);
    };
};