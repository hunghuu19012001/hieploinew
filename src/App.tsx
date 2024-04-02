
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Hondapage from './pages/Sanpham/Honda/Hondapage';
// import Contact from './pages/Contact/Contact';
import Homepage from './pages/Homepage/Homepage';
import Yamahapage from './pages/Sanpham/Yamaha/Yamahapage';

function App() {

  return (
    <div id='font'>
      <BrowserRouter>
          <Routes>
          <Route path='' element={<Homepage/>}/>
              <Route path='/xe-honda' element={<Hondapage/>}/>
              <Route path='/xe-yamaha' element={<Yamahapage/>}/>
              <Route path='/xe-điện' element={<Hondapage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
