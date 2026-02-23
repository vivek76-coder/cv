import Nav from "./component/navbar/Nav.jsx"
import Footer from "./component/footer/Footer.jsx"
import Home from "./component/main/Home.jsx"
import About from "./component/main/About.jsx"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='Home' element="<h1>hello</h1>"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
