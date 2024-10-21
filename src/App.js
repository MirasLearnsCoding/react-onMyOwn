import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Task from './pages/Task';



function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/task" element = {<Task/>}/>
        </Routes>
        
      </BrowserRouter>

   
  );
}

export default App;
