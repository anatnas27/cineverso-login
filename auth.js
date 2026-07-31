// Simulação de autenticação JWT

function login(usuario, senha) {
    if (usuario === "admin" && senha === "123") {
        return {
            sucesso: true,
            token: "jwt-token-exemplo"
        };
    }

    return {
        sucesso: false,
        mensagem: "Usuário ou senha inválidos."
    };
}

module.exports = { login };
