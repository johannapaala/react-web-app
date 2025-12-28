import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import kuva from '../images/lemmikit.jpg'

const Paasivu : React.FC = () : React.ReactElement => {


  return (
    <>
    <Typography style={{ fontSize: "16px", color: "#442E26", padding: "0 20px 15px 20px"}}
        >Huolenpitoa kaikenkarvaisille auttaa sinua huolehtimaan lemmikistäsi parhaalla mahdollisella tavalla. 
    </Typography>
    <Typography style={{ fontSize: "16px", color: "#442E26", padding: "0 20px 15px 20px"}}
        >Voit tehdä lemmikillesi profiilin, jonne tallennat kaikki tärkeät perustiedot, kuten syntymäaika, 
          mahdolliset sairaudet ja sirunumeron.
    </Typography>
    <Typography style={{ fontSize: "16px", color: "#442E26", padding: "0 20px 15px 20px"}}
        >Voit pitää päiväkirjaa lemmikkisi terveydentilasta ja oireista, ja 
          palata niihin aina kun haluat.
    </Typography>
    <Typography style={{ fontSize: "16px", color: "#442E26", padding: "0 20px 15px 20px"}}
        >Neuvonnasta saat vastauksia terveyshuoliin silloin, kun tilanne ei ole akuutti.
    </Typography>
    <Button variant="contained"
            component={Link}
            to="/luoProfiili"
            sx={{background: "#7E5233", width: "40%", margin: "2.5%", color: "white", '&:hover': {
                backgroundColor: "#442E26"
              }}}>Luo lemmikillesi profiili</Button>
    <div style={{
        backgroundImage:`url(${kuva})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize:"100%",
        height: "480px"}}>
    </div>
    <div style={{
        backgroundColor: "#442E26", 
        backgroundSize:"100%",
        height: "60px",
        marginTop: "-118px"}}>

    </div>
    </>
    
  );
}

export default Paasivu;