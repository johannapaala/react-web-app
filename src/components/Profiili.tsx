import { Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import kuva from '../images/lemmikit5.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const Profiili : React.FC<Props> = ({profiilit, setProfiilit}) : React.ReactElement => {

  const laskeIka = (syntymaAika: Date | undefined) => {
    if (!syntymaAika) {
      return null;
    }
    const nykyinenVuosi = new Date().getFullYear();

    const syntymaVuosi = syntymaAika.getFullYear();
  
    const ika = nykyinenVuosi - syntymaVuosi;
  
    return `${ika} vuotta`;
  };

  return (
    <>
    <Typography
    sx={{ color:"#7E5233", padding: "2.5%"}} >
    Tallenna tärkeät tiedot lemmikistäsi muistiin.
  </Typography> 
    <div style={{
      backgroundImage:`url(${kuva})`, 
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right", 
      backgroundSize:"60%",
      height: "700px"}}>

    <Button variant="contained"
            component={Link}
            to="/luoProfiili"
            sx={{background: "#7E5233", width: "35%", margin: "2.5%", color: "white", '&:hover': {
                backgroundColor: "#442E26"
              }}}>Luo uusi profiili</Button>

      {profiilit.map((profiili, idx) => (

        <Typography key={idx} sx={{padding: "2.5%", color: "#7E5233", width: "45%"}}>
          <span style={{fontWeight: "bold", fontSize: "18px"}}>Lemmikin nimi: {profiili.nimi} </span> <br></br>
          Laji: {profiili.laji} <br></br>
          Syntymäaika: {profiili.syntymaAika instanceof Date ? 
                        profiili.syntymaAika.toLocaleDateString("fi-FI") : ''} <br></br>
          Ikä: {laskeIka(profiili.syntymaAika)} <br></br>
          Sirunumero: {profiili.sirunumero} <br></br>
          Tuntomerkit: {profiili.tuntomerkit} <br></br>
          Sairaudet: {profiili.sairaudet} <br></br>
          <IconButton 
                component={Link}
                to={`/muokkaa/${profiili.id}`}
                edge="end">
                <EditIcon />
        </IconButton>
        <IconButton 
                component={Link}
                to={`/poista/${profiili.id}`}
                edge="end">
                <DeleteIcon />
        </IconButton>
        </Typography>
      ))}
    </div>
    </>
  );
}

export default Profiili;