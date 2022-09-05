import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
          <Route path="/SignupEntidad" component={SignupEntidad}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
