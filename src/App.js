import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CatalogoEventos from './views/CatalogoEventos';
import Principal from './views/Principal';
import EditarUsuario from './views/EditarUsuario';
import RegistroEvento from './views/RegistroEvento';
import SignUpUsuario from './views/SignUpUsuario';
import SignupEntidad from './views/SignupEntidad';
import LoginUsuario from './views/LoginUsuario';
import InicioEntidad from './views/InicioEntidad';
import InicioUsuario from './views/InicioUsuario';

import Evento_Detalles from './views/Evento_Detalles';
import Entidad_EventoDetalles from './views/Entidad_EventoDetalles';
import MisEventosUsuario from './views/MisEventosUsuario';
// ! Comentar este componente, solamente es para pruebas

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Principal}></Route>
          <Route path = "/catalogoEventos" component={CatalogoEventos}></Route>
          <Route path = "/catalogoEventos"></Route>
          <Route path = "/evento" component={Evento_Detalles}></Route>
          <Route path = "/editarUsuario" component={EditarUsuario}></Route>
          <Route path = "/RegistroEvento" component={RegistroEvento}></Route>
          <Route path = "/SignUpUsuario" component={SignUpUsuario}/>
          <Route path=  "/SignupEntidad" component={SignupEntidad}></Route>
          <Route path = "/catalogoEventos"></Route>
          <Route path = "/evento" component={Evento_Detalles}></Route>
          <Route path = "/LoginUsuario" component={LoginUsuario}></Route>
          <Route path = "/InicioEntidad" component={InicioEntidad}></Route>
          <Route path=  "/InicioUsuario" component={InicioUsuario}></Route>
          <Route path = "/DetalleEventoEntidad" component={Entidad_EventoDetalles}></Route>
          <Route path = "/misEventos" component={MisEventosUsuario}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
