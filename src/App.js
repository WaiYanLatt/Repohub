import { Link, Route, Routes , NavLink } from "react-router-dom";
import Home from "./views/pages/Home";
import Story from "./views/pages/Story";
import Service from "./views/pages/Service";
import Contact from "./views/pages/Contact";
import Navbar from "./assets/components/Navbar";


const App = (props) => {
  return(
    <div>
          <Navbar/>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="story" element={<Story/>}/>
             <Route path="service" element={<Service/>}/>
             <Route path="contact" element={<Contact/>}/>
          </Routes>
    </div>
  )
}

export default App;