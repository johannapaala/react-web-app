import { Box, Button, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fi } from 'date-fns/locale';
import React, { useRef, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { v4 as uuid } from "uuid";

interface Props {
  oireLista : Oire[]
  setOireLista : (arg0 : Oire[]) => void
}

const Lisaa : React.FC<Props> = ({oireLista, setOireLista}) : React.ReactElement => {

  const [pvm, setPvm] = useState<Date>(new Date());
  const uusiOireRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();

  const navigate : NavigateFunction = useNavigate();

  const lisaaOire = () : void => {

    const uudetOireet = [...oireLista];
    let uusiOire : Oire = {
        id : uuid(),
        oireet : uusiOireRef.current!.value || "",
        pvm : pvm,
    }

    if(uusiOireRef.current!.value && pvm){

    setOireLista([...oireLista, uusiOire]);
    oireLista.sort((a : Oire, b : Oire) => Number(a.pvm) - Number(b.pvm));
    setOireLista(oireLista);

    navigate("/paivakirja");}
    
}


  return (
    
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>

    <TextField 
        label="Kuvaile vointia ja oireita"
        multiline
        rows={3}
        inputRef={uusiOireRef}
        variant="outlined"
        sx={{ width: "95%", margin: "2.5%" }}
    />

    <DatePicker
        label="Valitse ajankohta"
        defaultValue={new Date()}
        onChange={(uusiPvm: Date | null) => {
                  setPvm(uusiPvm!); }}
        disableFuture 
        sx={{ margin: "2.5%" }}/>

    <Box sx={{width: "100%", paddingLeft: "15%", paddingRight: "15%" }}>
    <Button
        variant="contained"
        onClick={lisaaOire}
        sx={{background: "#7E5233", width: "45%", margin: "2.5%", color: "white", '&:hover': {
          backgroundColor: "#442E26"
        }}}
        >Tallenna</Button>  

    <Button
        variant="contained"
        component={Link}
        to="/paivakirja"
        sx={{background: "#7E5233", width: "45%", margin: "2.5%", color: "white", '&:hover': {
          backgroundColor: "#442E26"
        }}}
        >Peruuta</Button>
      </Box>    
    </LocalizationProvider>
    
  );
}

export default Lisaa;