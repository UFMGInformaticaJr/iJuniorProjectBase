import { api } from "../../../api";

export async function forgotPassword(email: any) {
  try {
    await api.post("/users/resetPassword", email);
    localStorage.setItem("email", email);
  } catch (err: any) {
    console.log(err);
  }
}
