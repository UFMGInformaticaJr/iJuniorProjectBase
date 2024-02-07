import { api } from "../../../api";
/* corpo da requisição
const data = {
    email: email,
    name: fullName,
    password: password,
    cpf_cnpj: cpfFormatado,
    role: "commonUser",
    cep: cepFormatado,
    state: state,
    street: street,
    neighborhood: district,
    addressNumber: adressNumber,
    plan: "free",
    receiveNewsletter: newsletter,
  };
*/
export async function createUser(body: any) {
  try {
    await api.post("/users/create", body);
    alert("Usuário criado com sucesso!");
  } catch (err: any) {
    alert("Erro ao criar usuário, tente novamente!");
    console.log(err);
  }
}
