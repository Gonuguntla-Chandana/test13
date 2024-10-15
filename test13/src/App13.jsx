import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Login from './Login';
import About from './About';
import Signup from './Signup';
function App(){
  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;