export const errFormatResponseUtil = (err) => {
  return { message: err?.message, statusText: err?.statusText, status: err?.status };
};

export const errFormat500ResponseUtil = () => {
  return {
    message: 'The server was unable to complete your request.',
    statusText: '',
    status: 500,
  };
};
