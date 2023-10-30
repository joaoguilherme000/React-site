import './index.css'
import userIcone from '../../Assets/user.svg'
import './index.scss'

import { Link } from "react-router-dom";

import React, {useState} from 'react';

export default function Janela () {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <div className='content'>
            <img src={userIcone} className="userIcone" alt="UserIcone" />
            <form name="cadastro" className='janela'>

                <label for="usuario" className='nome'>Nome: </label>
                <input type="text" name="usuario" value={nome} onChange={(e) => setNome(e.target.value)} className='nome-input'/>

                <label for="senha" className='senha'>Senha: </label>
                <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} className='senha-input'/>
            </form>
            
            <Link to="/Dashboard">Entrar</Link>
            <h5><a href='index.html'>Esqueci a senha?</a></h5>
        </div>
    );
}