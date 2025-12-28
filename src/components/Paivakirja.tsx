import { Button, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format } from 'date-fns';
import { fi } from 'date-fns/locale';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import kuva from '../images/lemmikit6.png'
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  oireLista : Oire[]
  setOireLista : (arg0 : Oire[]) => void
}

const Paivakirja : React.FC<Props> = ({oireLista, setOireLista}) : React.ReactElement => {

  useEffect(() => {

    oireLista.sort((a : Oire, b : Oire) => Number(a.pvm) - Number(b.pvm));

  }, [oireLista]);


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
    <Typography
    sx={{ color:"#7E5233", padding: "2.5%"}} >
    Pidä päiväkirjaa lemmikkisi voinnista niin saat arvokasta tietoa esimerkiksi oireiden esiintyvyydestä,
    toistuvuudesta ja kestosta. 
    </Typography> 
    <div style={{
      backgroundImage:`url(${kuva})`, 
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right", 
      backgroundSize:"60%",
      height: "700px"}}>
    <Button
        variant="contained"
        component={Link}
        to="/lisaa"
        sx={{background: "#7E5233", width: "40%", margin: "2.5%", color: "white", '&:hover': {
          backgroundColor: "#442E26"
        }}}
        >Uusi päiväkirjamerkintä
    </Button> 

    <List sx={{padding: "2.5%", width: "45%"}}>

        {oireLista.slice().reverse().map( (oire : Oire, idx : number) => {

        return (
                <ListItem key={idx}>
                <ListItemText primary={format(oire.pvm, "d.M.Y")}
                              secondary={oire.oireet}/>
                <IconButton 
                component={Link}
                to={`/poistaoire/${oire.id}`}
                edge="end">
                <DeleteIcon />
                </IconButton>
                </ListItem>
                );
        } ) }
    </List>
    </div>
  </LocalizationProvider>
    
  );
}

export default Paivakirja;