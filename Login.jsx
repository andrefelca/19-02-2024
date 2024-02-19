var login = "andre";
var senha = "1234";

var txtLogin = document.getElementById("txtLogin");
var txtSenha = document.getElementById("txtSenha");

export const fazerLogin = (e) => {
    if (txtLogin.value == login && txtSenha.value == senha) {
        console.log("Acesso liberado");
    } else {
        console.log("Login ou senha inválidos");
    }
}