import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import './App.css';
import RegistrationForm from './pages/RegistrationForm';
import HomePage from './pages/HomePage';
import PlayerContainer from './pages/PlayerContainer';
import ReactPlayer from 'react-player';
import BlogCardBox from './components/BlogCardBox';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Blogs from './components/Blogs';
import DealsCard from './components/DealsCard';
import DealsDay from './components/DealsDay';
import Brands from './components/Brands';
import Footer from './components/Footer';
import Header from './components/Header';
import TopCategories from './components/TopCategories';

function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <HeroSlider />
      <TopCategories/>
      <Brands />
      <DealsDay />
      <Blogs/>
      <Footer/>
      <div className="App relative mx-6 flex justify-center items-center h-screen ">
       
      {/* <PlayerContainer src="assets/Video.mp4" subtitlesSrc="assets/subtitles.vtt"/> */}
      {/* <div className='w-[800px] h-[450px] overflow-hidden rounded-xl shadow-xl'>
      <ReactPlayer 
      url='<assets/2.mp3>' 
      width="100%"
      height="100%"/>
      </div> */}
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
