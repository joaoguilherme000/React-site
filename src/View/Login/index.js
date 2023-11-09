import Header from '../../Components/Header';

import '../../Style/Janela.css'

import userIcone from '../../Assets/user.svg'
import { useNavigate } from 'react-router-dom';

import React, {useState} from 'react';

function Janela ({ handleLogin }) {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleLoginClick = () => {
    handleLogin();
  };

  return (
      <div className='content'>
          <img src={userIcone} className="userIcone" alt="UserIcone" />
          <form name="cadastro" className='janela'>

              <label for="usuario" className='nome'>Nome: </label>
              <input type="text" name="usuario" value={nome} onChange={(e) => setNome(e.target.value)} className='nome-input'/>

              <label for="senha" className='senha'>Senha: </label>
              <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} className='senha-input'/>

              <input type="submit" value="Entrar" className='entrar' onClick={handleLoginClick} />
          </form>
          <h5><a href='index.html'>Esqueci a senha?</a></h5>
      </div>
  );
}

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Dashboard');
  };

  return (
    <>
    <Header/>
    <Janela handleLogin={handleLogin} />
    </>
  )
};

export default Login;