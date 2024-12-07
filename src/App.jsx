import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Errors from './pages/Errors'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/productos' element={<Productos />} />
        <Route path='/contacto' element={<Contacto />} /> 
        <Route path='*' element={<Errors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

