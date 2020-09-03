import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Navbar from './views/Navbar';
import Services from './views/Services'
import Conferences from './views/Conferences'
import Contact from './views/Contact'
import About from './views/About'

function App() {
  return (
    <div className="App">
      {/* Barra superior de navegación */}
      <Navbar />

      {/* Routas de navegación */}
      <Router>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/conferences'>
          <Conferences />
        </Route>
        <Route path='/service'>
          <Services />
        </Route>
        {/* Rota para que redireccione a la pagina principal 
            Pendiente por Revicion de la Perra de Caliche
        <Route path='/'>
          <App />
        </Route>*/}
      </Router>
    </div>
  );
}

export default App;
