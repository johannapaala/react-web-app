import { Button, Typography } from '@mui/material';
import React, { } from 'react';
import { Link, NavigateFunction, useNavigate, useParams } from 'react-router-dom';

interface Props {
  profiilit : Profiili[]
  setProfiilit : (arg0 : Profiili[]) => void
}


const Poista : React.FC<Props> = ({ profiilit, setProfiilit }) : React.ReactElement => { 

  const navigate : NavigateFunction = useNavigate();

  const { id } = useParams<any>();

  const poistettavaProfiili : Profiili | undefined = profiilit.find((profiili : Profiili) => {
      return profiili.id === id;
  });

  const vahvistaPoisto = () : void => {
  
      setProfiilit([...profiilit.filter((profiili : Profiili) => profiili.id !== id)]);

      navigate("/profiili");
  }


  return (
    <>

    <Typography
        sx={{padding: "2.5%", color: "#7E5233"}}
        >Haluatko varmasti poistaa lemmikin {poistettavaProfiili!.nimi} profiilin?</Typography>

        <Button
            variant="contained"
            fullWidth={true}
            onClick={vahvistaPoisto}
            sx={{background: "#7E5233", width: "45%", margin: "2.5%", color: "white", '&:hover': {
              backgroundColor: "#442E26"
            }}}
        >Poista profiili</Button>  

        <Button
            fullWidth={true}
            component={Link}
            to="/profiili"
            sx={{background: "#7E5233", width: "45%", margin: "2.5%", color: "white", '&:hover': {
              backgroundColor: "#442E26"
            }}}
        >Peruuta</Button>    
</>
    
  );
}

export default Poista;