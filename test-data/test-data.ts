export default {
  validUser: {
    username: process.env.VALID_USERNAME!,
    password: process.env.VALID_PASSWORD!,
  },
  invalidUser: {
    username: process.env.INVALID_USERNAME!,
    password: process.env.INVALID_PASSWORD!,
  },
  invalidLoginMessage: 'Warning: No match for E-Mail Address and/or Password.',
};
