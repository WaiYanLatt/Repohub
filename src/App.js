import {  Route, Routes ,} from "react-router-dom";
import Home from "./views/pages/Home";
import Story from "./views/pages/Story";
import Service from "./views/pages/Service";
import Contact from "./views/pages/Contact";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";


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
          <Footer/>
    </div>
  )
}

export default App;