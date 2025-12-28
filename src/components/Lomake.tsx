import { Box, Button, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

interface Lomake {
  etunimi?: string,
  sukunimi? : string,
  puh? : string,
  sapo? : string,
  viesti? : string,
}

interface Virheet extends Lomake {}

const Lomake : React.FC = () : React.ReactElement => {

  const etunimiRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
  const sukunimiRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
  const puhRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
  const sapoRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
  const viestiRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();

  const [virheilmoitukset, setVirheilmoitukset] = useState<Virheet>({});

  const [lomake, setLomake] = useState<Lomake>({});

  const navigate : NavigateFunction = useNavigate();

  const lahetaLomake = (e : React.FormEvent) : void => {

    e.preventDefault();

    let lomake : Lomake = {
      etunimi: etunimiRef.current!.value,
      sukunimi: sukunimiRef.current!.value,
      puh: puhRef.current!.value,
      sapo: sapoRef.current!.value,
      viesti: viestiRef.current!.value,      
    }
    setLomake(lomake);

    let virheet : Virheet = {};

    if (!lomake.etunimi) {
      virheet = {...virheet, etunimi : "Etunimi puuttuu."};
    }
    if (!lomake.sukunimi) {
      virheet = {...virheet, sukunimi : "Sukunimi puuttuu."};
    }
    if (!lomake.puh) {
      virheet = {...virheet, puh : "Puhelinnumero puuttuu."};
    }
    if (!lomake.sapo) {
      virheet = {...virheet, sapo : "Sähköpostiosoite puuttuu."};
    }
    if (!lomake.viesti) {
      virheet = {...virheet, viesti : "Kirjoita viesti."};
    }
    if (Object.entries(virheet).length > 0) {
      setVirheilmoitukset({...virheet});
    } else {
      setVirheilmoitukset({});
      navigate("/lahetetty")
    }
  }

  const [value, setValue] = React.useState<string>('puhelimitse');

  return (
<>
  <Typography
    sx={{ color:"#7E5233", padding: "2.5%"}} >
    Autamme ja neuvomme mielellämme esimerkiksi lemmikkisi terveyshuolissa,
    hoitotoimenpiteissä, ruokinnassa ja liikunnassa. Kerro yhteystietosi, jätä viesti, 
    ja olemme sinuun yhteydessä kahden vuorokauden sisällä.
  </Typography> 
  <form onSubmit={lahetaLomake}>
        <TextField 
            label="Etunimi"
            inputRef={etunimiRef}
            error={Boolean(virheilmoitukset.etunimi)}
            helperText= {virheilmoitukset.etunimi}
            variant="outlined"
            sx={{ width: "45%", margin: "2.5%" }}/>
        <TextField 
            label="Sukunimi"
            inputRef={sukunimiRef}
            error={Boolean(virheilmoitukset.sukunimi)}
            helperText= {virheilmoitukset.sukunimi}
            variant="outlined"
            sx={{ width: "45%", margin: "2.5%" }}/>
        <TextField 
            label="Puhelinnumero"
            inputRef={puhRef}
            error={Boolean(virheilmoitukset.puh)}
            helperText= {virheilmoitukset.puh}
            variant="outlined"
            sx={{ width: "45%", margin: "2.5%" }}/>
        <TextField 
            label="Sähköposti"
            inputRef={sapoRef}
            error={Boolean(virheilmoitukset.sapo)}
            helperText= {virheilmoitukset.sapo}
            variant="outlined"
            sx={{ width: "45%", margin: "2.5%" }}/>
        <TextField 
            label="Kirjoita viesti"
            inputRef={viestiRef}
            error={Boolean(virheilmoitukset.viesti)}
            helperText= {virheilmoitukset.viesti}
            multiline
            rows={5}
            variant="outlined"
            sx={{ width: "95%", margin: "2.5%" }}/>
        <Typography 
            color="#7E5233"
            sx={{ margin: "2.5%" }}
            >Valitse miten haluat meidän ottavan sinuun yhteyttä:
        </Typography>
        <RadioGroup
          name="kontakti"
          color="#7E5233"
          defaultValue={value}
          style={{width: "45%", margin: "2.5%", justifyContent: "flex-end" }}
          >
          <FormControlLabel value="puhelimitse" control={<Radio />} label="puhelimitse" />
          <FormControlLabel value="sähköpostilla" control={<Radio />} label="sähköpostilla" />
        </RadioGroup>

        <Box sx={{width: "100%", paddingLeft: "15%", paddingRight: "15%", marginBottom: "10%" }}>
        <Button
            variant="contained"
            type='submit'
            sx={{background: "#7E5233", width: "45%", margin: "2.5%", color: "white", '&:hover': {
              backgroundColor: "#442E26"
            }}}
          >Lähetä</Button>  

        <Button
            component={Link}
            to="/"
            sx={{background: "#7E5233", width: "45%", margin: "2.5%", color: "white", '&:hover': {
              backgroundColor: "#442E26"
            }}}
          >Peruuta</Button>
          </Box>
    </form>
    </>
  );
}

export default Lomake;