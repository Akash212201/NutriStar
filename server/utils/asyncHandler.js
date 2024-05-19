const asyncHandler = (requestHandler) => async (req, resp, next) => {
    try {
        await requestHandler(req, resp, next);
    } catch (error) {
        return resp.status(error.code || 404).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = asyncHandler