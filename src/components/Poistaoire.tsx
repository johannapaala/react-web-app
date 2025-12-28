import {  Button, Typography } from '@mui/material';
import React, { } from 'react';
import { Link, NavigateFunction, useNavigate, useParams } from 'react-router-dom';

interface Props {
  oireLista : Oire[]
  setOireLista : (arg0 : Oire[]) => void
}

const Poistaoire : React.FC<Props> = ({ oireLista, setOireLista }) : React.ReactElement => { 

  const navigate : NavigateFunction = useNavigate();

  const { id } = useParams<any>();

  const vahvistaPoisto = () : void => {
  
      setOireLista([...oireLista.filter((oire : Oire) => oire.id !== id)]);

      navigate("/paivakirja");
  }


  return (
    <>

    <Typography
        sx={{padding: "2.5%", color: "#7E5233"}}
        >Haluatko varmasti poistaa merkinnän?</Typography>

        <Button
            variant="contained"
            fullWidth={true}
            onClick={vahvistaPoisto}
            sx={{background: "#7E5233", width: "45%", margin: "2.5%", color: "white", '&:hover': {
              backgroundColor: "#442E26"
            }}}
        >Poista merkintä</Button>  

        <Button
            fullWidth={true}
            component={Link}
            to="/paivakirja"
            sx={{background: "#7E5233", width: "45%", margin: "2.5%", color: "white", '&:hover': {
              backgroundColor: "#442E26"
            }}}
        >Peruuta</Button>    
</>
    
  );
}

export default Poistaoire;