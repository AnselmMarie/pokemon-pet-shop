export const errFormatResponseUtil = (err) => {
  return { message: err?.statusText, status: err?.status };
};

export const errFormat500ResponseUtil = () => {
  return { statusText: 'The server was unable to complete your request.', status: 500 };
};
