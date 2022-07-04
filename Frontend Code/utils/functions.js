export const formatErrorResponse = (errorResponse) => ({
  error:
    errorResponse?.response?.data ||
    errorResponse?.message ||
    "An error occurred",
  isError: true,
});

export const formatSuccessResponse = (data) => ({
  data,
  isError: false,
});
