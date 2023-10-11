import './Style.css';
import logo from './components/img/java.png';
import './Reset.css';
import TituloTopBar from './components/text/TituloTopBar';

export default function App() {
  return (
    <div className="app-container">
      <div className="top-bar">
        <TituloTopBar/>
      </div>
      <body className="content">
          <div className='model'>
            <img alt="logo" src={logo} />
          </div>
      </body>
    </div>
  );
}