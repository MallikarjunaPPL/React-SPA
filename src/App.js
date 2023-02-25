import Header from "./Components/Header"
import About from "./Components/About"
import Contact from "./Components/Contact"
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
    </Routes>
    </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
