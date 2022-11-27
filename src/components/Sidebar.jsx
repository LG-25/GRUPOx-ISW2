import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
//import ListItemIcon from '@mui/material/ListItemIcon';
//import ListItemText from '@mui/material/ListItemText';


export function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const ruta = (texto) => {
    if (texto === 'Catalogo Eventos') {
      return "../catalogoEventos"
    }
    else if (texto === 'Eventos Inscritos') {
      return "../misEventosUsuarioI"
    }
    else if (texto === 'Modificar datos') {
      return "editarUsuarioI"
    }
    else if (texto === 'Cerrar sesión') {
      return '#'
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <small className="text-muted px-3">Gestion Eventos</small>
        {['Catalogo Eventos', 'Eventos Inscritos'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <a href={ruta(text)} onClick={() => {
                            if (text === 'Cerrar sesión') {
                              sessionStorage.removeItem("user");
                              window.location.href = '/';
                            }}}>{text}</a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      <small className="text-muted px-3">Usuario</small>
        {['Modificar datos', 'Cerrar sesión'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <a href={ruta(text)} onClick={() => {
                            if (text === 'Cerrar sesión') {
                              sessionStorage.removeItem("user");
                              window.location.href = '/';
                            }}}>{text}</a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><button type="button" className="btn btn-outline-dark m-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
</svg>
              </button></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}