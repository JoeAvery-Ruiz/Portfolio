import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import { Routes, Route } from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div><Navbar/>
      <Routes>
   <Route path = '/about' element={<AboutMe/>}/>
   <Route path = '/contact' element={<Contact/>}/>
   <Route path = '/projects' element={<Projects/>}/>
   <Route path = '/resume' element={<Resume/>}/>
  
      </Routes>
    </div>
  );
}

export default App;
