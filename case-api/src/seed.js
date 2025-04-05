const bcrypt = require("bcryptjs");
const User = require("./models/usuarios");
const Produto = require("./models/produtos"); // <- importe o model de Produto

async function seed() {
  // SEED DO USUÁRIO
  const emailTeste = "admin@fiep.org.br";
  const senhaHash = await bcrypt.hash("SilvioNaFiep2025", 10);

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

  // SEED DOS PRODUTOS
  const produtoCount = await Produto.count();

  if (produtoCount === 0) {
    await Produto.bulkCreate([
      {
        nome: "Mouse Gamer",
        descricao: "Mouse com iluminação RGB",
        preco: 149.90,
        disponivel: true,
      },
      {
        nome: "Teclado Mecânico",
        descricao: "Switch blue com LED",
        preco: 299.90,
        disponivel: true,
      },
      {
        nome: 'Monitor 24"',
        descricao: "Tela Full HD com 75Hz",
        preco: 899.90,
        disponivel: true,
      },
      {
        nome: "Fone de Ouvido",
        descricao: "Cancelamento de ruído",
        preco: 199.90,
        disponivel: false,
      },
    ]);
    console.log("✅ Produtos de teste inseridos!");
  } else {
    console.log("ℹ️ Produtos de teste já existem.");
  }
}

module.exports = seed;
