import { AppBar, CssBaseline, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Valikko : React.FC = () : React.ReactElement => {


  return (
    <CssBaseline>
      <AppBar position= "static" sx={{backgroundColor: "#442E26", marginBottom: "30px"}}>
      <Typography 
            component="div"
            variant="h5" 
            sx={{fontSize: "32px", textAlign: "center", padding: 2, color: "#DADADE"}}
            >Huolenpitoa kaikenkarvaisille
      </Typography>
        <Toolbar sx={{backgroundColor: "#7E5233", padding: "0px", margin: "0px"}} >
              <List sx={{display: "flex", flexDirection: "row", 
                        width:"100%", padding: "0px", margin: "0px"}}>
                  <ListItemButton
                    sx={{width: "25%", margin: 0}}
                    component={Link}
                    to="/">
                    <ListItemText primary="Pääsivu" sx={{fontSize: "5px", textAlign: 'center', color: "#DADADE", ":active": {color: "#442E26"}}} />
                  </ListItemButton>
                  <ListItemButton
                    sx={{width: "25%", margin: 0}}
                    component={Link}
                    to="/profiili">
                    <ListItemText primary="Profiili" sx={{fontSize: "5px", textAlign: 'center', color: "#DADADE"}} />
                  </ListItemButton>
                  <ListItemButton
                    sx={{width: "25%", margin: 0}}
                    component={Link}
                    to="/paivakirja">
                    <ListItemText primary="Päiväkirja" sx={{fontSize: "5px", textAlign: 'center', color: "#DADADE"}} />
                  </ListItemButton>
                  <ListItemButton
                    sx={{width: "25%", margin: 0}}
                    component={Link}
                    to="/lomake">
                    <ListItemText primary="Neuvonta" sx={{fontSize: "5px", textAlign: 'center', color: "#DADADE"}} />
                  </ListItemButton>
              </List>
      </Toolbar>
        
      </AppBar>

    </CssBaseline>
    
  );
}

export default Valikko;