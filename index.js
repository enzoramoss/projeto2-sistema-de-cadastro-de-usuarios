const prompt = require("prompt-sync")()
const Usuario = require("./class/Usuario")

const usuarios = []

while (true) {
  const nome = prompt("Digite o nome do usuário: ")
  const idade = Number(prompt("Digite a idade do usuário: "))
  const email = prompt("Digite o email do usuário: ")
  const ativo = prompt("Usuário ativo? [S/N]: ")
  const usuario = new Usuario(nome, idade, email)
  usuario.ativo = ativo
  console.log(usuario.boasVindas)
  usuarios.push(usuario)
  const resposta = prompt("Deseja adicionar outro usuário? [S/N]: ").toUpperCase()
  if (resposta !== "S" && resposta !== "N") {
    console.log("Dado incorreto!")
    process.exit()
  }
  if (resposta === "N") break
}

usuarios.forEach(usuario => usuario.mostrarDados())

console.log(`Total de usuários criados: ${Usuario.totalUsuarios}`)
