import './style.css';
import Navbar from './components/NavBar/Navbar';

import './Reset.css';

import Tasklist from './components/Tasklist/Tasklist';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Tasklist title="Pendente"/>
        <Tasklist title="Fazendo"/>
        <Tasklist title="Completa"/>
      </div>
    </div>
  );
}

export default App;
