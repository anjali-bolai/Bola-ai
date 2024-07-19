const { authenticator } = require('otplib');

const secret = 'JZTTAI3XNBPEMU3NGVBXI2ZPJE4TEYLJJB3GWTD5IRRXIMCCLZJA';
const token = authenticator.generate(secret);

console.log('Generated OTP token:', token);