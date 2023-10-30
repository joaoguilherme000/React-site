import './index.css'
import userIcone from '../../Assets/user.svg'

export default function Janela () {
    return (
        <div className='content'>
            <img src={userIcone} className="userIcone" alt="UserIcone" />
            <form name="cadastro" className='janela'>

                <label for="usuario" className='nome'>Nome: </label>
                <input type="text" name="usuario" id="usuario" className="nome-input"/>

                <label for="senha" className='senha'>Senha: </label>
                <input type="password" name="senha" id="senha" required className="senha-input"/>

                <input type="submit" value="Entrar" className='entrar'/>
            </form>
            <h5><a href='index.html'>Esqueci a senha?</a></h5>
        </div>
    );
}