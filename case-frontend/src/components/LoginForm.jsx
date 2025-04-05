import { useState } from "react";
import { login } from "../services/api";

function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    try {
      const data = await login(email, senha);
      localStorage.setItem("token", data.token);
      onLoginSuccess();
    } catch (err) {
      if (err.response?.status === 429 && err.response.data?.error) {
        // Limite de tentativas excedido
        setErro(err.response.data.error);
      } else if (err.response?.data?.error) {
        // Erros comuns: usuário ou senha inválidos
        setErro(err.response.data.error);
      } else {
        // Erro inesperado
        setErro("Erro inesperado ao tentar login.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <label>
        E-mail:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Senha:
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </label>

      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;