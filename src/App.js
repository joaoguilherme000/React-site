import './style.css';
import Navbar from './components/NavBar/Navbar';
import './Reset.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ul className='lista'>
        <li>Aprenderemos React</li>
        <li>Aprenderemos Componentes</li>
      </ul>
    </div>
  );
}

export default App;
