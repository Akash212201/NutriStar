import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import './App.css';
import HeroSlider from './components/HeroSlider';
import Blogs from './components/Blogs';
import DealsDay from './components/DealsDay';
import Brands from './components/Brands';
import Footer from './components/Footer';
import Header from './components/Header';
import TopCategories from './components/TopCategories';

const App =()=> {
  return (
    <Router>
      <Header/>
      <HeroSlider />
      <TopCategories/>
      <Brands />
      
      <Blogs/>
      <Footer/>
      
    </Router>
  );
}

export default App;
