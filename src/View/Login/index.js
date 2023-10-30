import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header';
import Janela from '../../Components/Janela';



const Login = () => {
  return (
    <>
    <Header/>
    <Janela/>
    <Outlet/>
    </>
  )
};

export default Login;