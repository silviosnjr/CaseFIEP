const bcrypt = require("bcryptjs");
const User = require("./models/usuarios");

async function seed() {
  const emailTeste = "teste@email.com";
  const senhaHash = await bcrypt.hash("123456", 10);

  const [usuario, created] = await User.findOrCreate({
    where: { email: emailTeste },
    defaults: {
      nome: "Usuário Teste",
      senha: senhaHash,
    },
  });

  if (created) {
    console.log("✅ Usuário de teste criado!");
  } else {
    console.log("ℹ️ Usuário de teste já existe.");
  }
}

module.exports = seed;
