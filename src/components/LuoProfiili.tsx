import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fi } from "date-fns/locale";
import { v4 as uuid } from "uuid";

interface Profiili {
  id? : string,
  nimi?: string,
  sirunumero? : string,
  laji? : string,
  syntymaAika? : Date,
  tuntomerkit? : string,
  sairaudet? : string
}


const LuoProfiili : React.FC<Props> = ({profiilit, setProfiilit}) : React.ReactElement => {

const lemmikinNimiRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
const tuntomerkitRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
const sairaudetRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
const sirunumeroRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();

const navigate : NavigateFunction = useNavigate();

const [syntymaAika, setSyntymaAika] = useState<Date>();
const [laji, setLaji] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLaji(event.target.value as string);
  };

  const luoProfiili = (e : React.FormEvent) : void => {

    e.preventDefault();

    let uusiProfiili : Profiili = {
      id : uuid(),
      nimi: lemmikinNimiRef.current!.value,
      laji: laji,
      sirunumero: sirunumeroRef.current!.value,
      syntymaAika: syntymaAika,
      sairaudet: sairaudetRef.current!.value,
      tuntomerkit: tuntomerkitRef.current!.value
    }
    setProfiilit([...profiilit, uusiProfiili]);

    navigate("/profiili");
  }
    

  return (
    
    <form onSubmit={luoProfiili}>
        <TextField 
            label="Lemmikin nimi"
            inputRef={lemmikinNimiRef}
            variant="outlined"
            sx={{ width: "45%", margin: "2.5%" }}
        />
            <FormControl sx={{ width: "45%", margin: "2.5%" }}>
              <InputLabel>Valitse laji</InputLabel>
              <Select
                value={laji}
                label="Valitse laji"
                onChange={handleChange}
            
              >
                <MenuItem value={"koira"}>Koira</MenuItem>
                <MenuItem value={"kissa"}>Kissa</MenuItem>
                <MenuItem value={"kani"}>Kani</MenuItem>
                <MenuItem value={"marsu"}>Marsu</MenuItem>
                <MenuItem value={"hamsteri"}>Hamsteri</MenuItem>
                <MenuItem value={"rotta"}>Rotta</MenuItem>
                <MenuItem value={"muu"}>Muu</MenuItem>
              </Select>
            </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi} >
          <DatePicker label="Syntymäaika"
                      disableFuture
                      onChange={(uusiPvm: Date | null) => {
                        setSyntymaAika(uusiPvm!);}}
                      sx={{ width: "45%", margin: "2.5%" }} />
        </LocalizationProvider>

        <TextField
          label="Sirunumero"
          inputRef={sirunumeroRef}
          variant="outlined"
          sx={{ width: "45%", margin: "2.5%" }}
        />

        <TextField
          label="Sairaudet"
          inputRef={sairaudetRef}
          multiline
          rows={1}
          defaultValue=""
          sx={{ width: "95%", margin: "2.5%" }}
        />

        <TextField
          label="Tuntomerkit"
          inputRef={tuntomerkitRef}
          multiline
          rows={2}
          defaultValue=""
          sx={{ width: "95%", margin: "2.5%" }}
        />

        <Box sx={{width: "100%", paddingLeft: "15%", paddingRight: "15%" }}>
        <Button
            variant="contained"
            type='submit'
            sx={{background: "#7E5233", width: "45%", margin: "2.5%", color: "white", '&:hover': {
              backgroundColor: "#442E26"
            }}}
          >Luo profiili</Button>  

        <Button
            component={Link}
            to="/profiili"
            sx={{background: "#7E5233", width: "45%", margin: "2.5%", color: "white", '&:hover': {
              backgroundColor: "#442E26"
            }}}
          >Peruuta</Button>
          </Box>
    </form>
    
  );}

export default LuoProfiili;