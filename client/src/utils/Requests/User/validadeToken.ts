import { api } from "../../../api";

export async function ValidateToken(body: any) {
  try {
    await api.post("/users/validateToken", body);
  } catch (err: any) {
    console.log(err);
  }
}
