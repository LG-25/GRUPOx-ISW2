import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Evento_Detalles from "./views/Evento_Detalles"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CatalogoEventos from './views/CatalogoEventos';
import EditarUsuario from './views/EditarUsuario';

// ! Comentar este componente, solamente es para pruebas

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" ></Route>
          <Route path = "/catalogoEventos" component={CatalogoEventos}></Route>
          <Route path = "/evento" component={Evento_Detalles}></Route>
          <Route path = "/editarUsuario" component={EditarUsuario}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
