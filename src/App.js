import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Task from './pages/Task';
import Mission from './pages/Mission';



function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/task" element = {<Task/>}/>
          <Route path = "/mission" element = {<Mission/>}/>
        </Routes>
        
      </BrowserRouter>

   
  );
}

export default App;
