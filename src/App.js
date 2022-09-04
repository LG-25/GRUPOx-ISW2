import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CatalogoEventos from './views/CatalogoEventos';

// ! Comentar este componente, solamente es para pruebas

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" ></Route>
          <Route path = "/catalogoEventos" component={CatalogoEventos}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
