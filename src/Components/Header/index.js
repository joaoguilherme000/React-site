import logo from '../../Assets/logo.svg';
import './index.css'
import '../../Style/App.css'

export default function Header (){
    return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className='config'>Configurações</button>
    </header>
    );
}

