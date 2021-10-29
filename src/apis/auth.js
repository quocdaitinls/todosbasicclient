import API from "./index";

export const apiSignin = (data) => API.post("/api/auth/signin", data);
export const apiSignup = (data) => API.post("/api/auth/signup", data);
export const apiSignout = () => API.post("/api/auth/signout");

export const apiGetCurrentUser = () => API.get("/api/auth/currentuser");
