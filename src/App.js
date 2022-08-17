import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import { BrowserRouter,Routes, Route,Navigate } from 'react-router-dom'
import Pro from './Components/Pro';
import Education from './Components/Education';


function App(props) {


  return <>
  {/* <div className='App container'> */}
    
    
    
     <BrowserRouter>
     <Home />  
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='eduction' element={<Education/>}/>
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Pro data={props.data}/>}/>
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Navigate to='/about' />} />
      </Routes>
    </BrowserRouter>
  {/* </div> */}
   
  </>
}

export default App;
