import Header from "./Components/Header/header"
import About from "./Components/About/about"
import Contact from "./Components/Contact/contact"
import ResumeSpa from "./Components/ResumeSpa/spa"
import Functionalities from "./Components/Functionalities/index"
import { Route,BrowserRouter,Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="size_cont">
    
    <Header/>
    <div className='as3_cont'>
      <Routes>
   <Route exact path="/about" element={<About/>}/>
   <Route exact path="/contact" element={ <Contact/>}/>
   <Route exact path="/res" element={ <ResumeSpa/>}/>
   <Route exact path="/fun" element={ <Functionalities/>}/>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
