import { Box, Button, TextField } from '@mui/material';
import React, { useRef } from 'react';
import { Link, NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fi } from "date-fns/locale";
import { parse } from 'date-fns';

interface Props {
  profiilit : Profiili[]
  setProfiilit : (arg0 : Profiili[]) => void
}

const Muokkaa : React.FC<Props> = ({profiilit, setProfiilit}) : React.ReactElement => {

const muokattuNimiRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
const muokattuLajiRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
const muokattuSirunumeroRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
const muokattuTuntomerkitRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
const muokattuSairaudetRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
const muokattuAikaRef : React.MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();

    const navigate : NavigateFunction = useNavigate();

    const { id } = useParams<any>();

    const muokattavaProfiiliIndex = profiilit.findIndex((profiili: Profiili) => profiili.id === id);
  
    const muokattavaProfiili: Profiili = profiilit[muokattavaProfiiliIndex];

  
    const tallennaMuutokset = (): void => {
      
        const uudetProfiilit = [...profiilit];
        uudetProfiilit[muokattavaProfiiliIndex] = {
          ...muokattavaProfiili,
          nimi: muokattuNimiRef.current!.value || "",
          laji: muokattuLajiRef.current!.value || "",
          syntymaAika: parse(muokattuAikaRef.current!.value, 'dd.MM.yyyy', new Date(), { locale: fi }),
          sirunumero: muokattuSirunumeroRef.current!.value || "",
          tuntomerkit: muokattuTuntomerkitRef.current!.value || "",
          sairaudet: muokattuSairaudetRef.current!.value || "",
        };
        
        setProfiilit(uudetProfiilit);
        navigate("/profiili");
      };
   

    return (

    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>

        <TextField 
            label="Lemmikin nimi"
            defaultValue={muokattavaProfiili!.nimi}
            inputRef={muokattuNimiRef}
            variant="outlined"
            sx={{ width: "45%", margin: "2.5%" }}
        />

        <TextField 
            label="Laji"
            defaultValue={muokattavaProfiili!.laji}
            inputRef={muokattuLajiRef}
            variant="outlined"
            sx={{ width: "45%", margin: "2.5%" }}
        />

            <DateField label="Syntymäaika"
                            defaultValue={muokattavaProfiili!.syntymaAika}
                            inputRef={muokattuAikaRef}
                            variant="outlined"
                            sx={{ width: "45%", margin: "2.5%" }} />

        <TextField 
                    label="Sirunumero"
                    defaultValue={muokattavaProfiili!.sirunumero}
                    inputRef={muokattuSirunumeroRef}
                    variant="outlined"
                    sx={{ width: "45%", margin: "2.5%" }}
                />

        <TextField 
                    label="Tuntomerkit"
                    defaultValue={muokattavaProfiili!.tuntomerkit}
                    inputRef={muokattuTuntomerkitRef}
                    variant="outlined"
                    multiline
                    rows={2}
                    sx={{ width: "95%", margin: "2.5%" }}
                />
          <TextField 
                    label="Sairaudet"
                    defaultValue={muokattavaProfiili!.sairaudet}
                    inputRef={muokattuSairaudetRef}
                    variant="outlined"
                    multiline
                    rows={2}
                    sx={{ width: "95%", margin: "2.5%" }}
                />

          <Box sx={{width: "100%", paddingLeft: "15%", paddingRight: "15%" }}>
          <Button
              variant="contained"
              fullWidth={true}
              onClick={tallennaMuutokset}
              sx={{background: "#7E5233", width: "60%", margin: "2.5%", color: "white", '&:hover': {
                backgroundColor: "#442E26"
              }}}
          >Tallenna muutokset</Button>  

          <Button
              fullWidth={true}
              component={Link}
              to="/profiili"
              sx={{background: "#7E5233", width: "30%", margin: "2.5%", color: "white", '&:hover': {
                backgroundColor: "#442E26"
              }}}
          >Peruuta</Button>
          </Box>

          </LocalizationProvider> 
      );
}

export default Muokkaa;