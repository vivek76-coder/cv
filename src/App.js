import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home.jsx';
import Contact from './component/Contact.jsx';
import Project from './component/Project.jsx';
import About from './component/About.jsx';
import Usestate from './component/Usestate.jsx';
import TestPriceCalculator  from './component/TestCalculator.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/usestate' element={<Usestate />} />
        <Route path='testcalculator' element={<TestPriceCalculator />} />
        <Route path='/*' element="ghjghjghj" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
