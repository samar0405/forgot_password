import http from "./config";
const auth = {
  sign_in: (data) => http.post("/auth/login", data),
  sign_up: (data) => http.post("/auth/register", data),
  forgot: (data) => http.post("/auth/forgot-password", data),
  verify_forgot: (data) => http.post("/auth/varify-forgot-password", data),
};
export default auth;
