import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import HomePage from './pages/HomePage';
import LoginUser from './pages/login/LoginUser';
import RegisterUser from './pages/login/RegisterUser';
import SellerRegister from './pages/login/SellerRegister';
import ForgotPassword from './pages/login/ForgetPassword';

const App =()=> {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/user/signup' element={<RegisterUser />} />
      <Route path='/login' element={<LoginUser />} />
      <Route path='/seller/signup' element={<SellerRegister/>} />
      <Route path='/forgetpassword' element={<ForgotPassword/>} />
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
