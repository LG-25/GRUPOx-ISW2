import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
=======
import './App.css';
import Evento_Detalles from "./views/Evento_Detalles"
>>>>>>> 2d3491d (Plantilla detalles agregada)
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Vistas 
import Evento_Detalles from "./views/Evento_Detalles"
import CatalogoEventos from './views/CatalogoEventos';
import Principal from './views/Principal';
import EditarUsuario from './views/EditarUsuario';

// ! Comentar este componente, solamente es para pruebas

function App() {
  return (
    <>
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Principal}></Route>
          <Route path = "/catalogoEventos" component={CatalogoEventos}></Route>
          <Route path = "/evento" component={Evento_Detalles}></Route>
          <Route path = "/editarUsuario" component={EditarUsuario}></Route>
=======
          <Route exact path="/" ></Route>
          <Route path = "/catalogoEventos"></Route>
          <Route path = "/evento" component={Evento_Detalles}></Route>
>>>>>>> 2d3491d (Plantilla detalles agregada)
        </Switch>
      </Router>
    </>
  );
}

export default App;
