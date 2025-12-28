import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  lomake: Lomake | undefined;
  setLomake: React.Dispatch<React.SetStateAction<Lomake | undefined>>;
}

const Lahetetty : React.FC<Props> = () : React.ReactElement => {
  
  const [lomake, setLomake] = useState<Lomake>();

  console.log(lomake);

  return (
    
    <div style={{
      padding: "2.5%",
      height: "480px"}}>
        <Typography 
            sx={{color: "#7E5233", fontSize: "22px", padding: "2.5%" }}>
            Viestisi on lähetetty.
        </Typography>
        <Typography
            sx={{color: "#442E26", padding: "2.5%" }}>
            Kiitos että otit meihin yhteyttä. Vastaamme sinulle kahden vuorokauden sisällä. 
            Jos tilanne on akuutti, hakeudu lemmikkisi kanssa eläinlääkärin vastaanotolle.<br></br>
        </Typography> 

        <Button
            component={Link}
            to="/"
            sx={{background: "#7E5233", width: "35%", margin: "2.5%", color: "white", '&:hover': {
              backgroundColor: "#442E26"
            }}}
          >Poistu</Button>
    </div>
    
  );
}

export default Lahetetty;