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
import SignUpUsuario from './views/SignUpUsuario';
import SignupEntidad from './views/SignupEntidad';
import Evento_Detalles from './views/Evento_Detalles';
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
          <Route path = "/SignUpUsuario" component={SignUpUsuario}/>
          <Route path="/SignupEntidad" component={SignupEntidad}></Route>
          <Route path = "/catalogoEventos"></Route>
          <Route path = "/evento" component={Evento_Detalles}></Route>
        
        </Switch>
      </Router>
    </>
  );
}

export default App;
