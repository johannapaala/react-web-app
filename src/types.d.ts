interface Profiili {
    id? : string
    nimi?: string,
    laji? : string,
    syntymaAika? : Date,
    sirunumero?: string,
    tuntomerkit? : string,
    sairaudet? : string
  }


interface Oire {
    id? : string,
    oireet : string;
    pvm : Date;
  }

  interface Props {
    profiilit : Profiili[]
    setProfiilit : (arg0 : Profiili[]) => void
  }

  interface Lomake {
  etunimi?: string,
  sukunimi? : string,
  puh? : string,
  sapo? : string
  viesti? : string
}