
import './App.css';
import { Routes, Route} from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Signup from './pages/Signup';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
        </Route>
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
