import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Evento_Detalles from "./views/Evento_Detalles"
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
import SignUpUsuario from './views/SignUpUsuario';
import RegistroEvento from './views/RegistroEvento';
import SignupEntidad from './views/SignupEntidad';

// ! Comentar este componente, solamente es para pruebas

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Principal}></Route>
          <Route path = "/catalogoEventos" component={CatalogoEventos}></Route>
          <Route path = "/evento" component={Evento_Detalles}></Route>
          <Route path = "/editarUsuario" component={EditarUsuario}></Route>
          <Route path = "/SignUpUsuario" component={SignUpUsuario}/>
          <Route path = "/RegistroEvento" component={RegistroEvento}></Route>
          <Route path="/SignupEntidad" component={SignupEntidad}></Route>
          <Route exact path="/" ></Route>
          <Route path = "/catalogoEventos"></Route>
          <Route path = "/evento" component={Evento_Detalles}></Route>
        </Switch>
      </Router>
    </>
  );
}


export default App;
