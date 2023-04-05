import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './Pages/HomePage';
import About from './Pages/AboutPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Department from './Pages/DepartmentPage';
import Doctors from './Pages/DoctorsPage';
import News from './Pages/NewsPage';
import Contact from './Pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/department' Component={Department} />
          <Route path='/doctors' Component={Doctors} />
          <Route path='/news' Component={News} />
          <Route path='/contact' Component={Contact} />
        </Routes>
        <Footer/>
    </>
    </BrowserRouter> 
  );
}

export default App;
