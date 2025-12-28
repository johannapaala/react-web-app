import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Valikko from './components/Valikko';
import Lomake from './components/Lomake';
import Paasivu from './components/Paasivu';
import Paivakirja from './components/Paivakirja';
import Profiili from './components/Profiili';
import LuoProfiili from './components/LuoProfiili';
import Lahetetty from './components/Lahetetty';
import Lisaa from './components/Lisaa';
import Poista from './components/Poista';
import Muokkaa from './components/Muokkaa';
import Poistaoire from './components/Poistaoire';


const App : React.FC = () : React.ReactElement => {


  const kaynnistetty : React.MutableRefObject<boolean> = useRef(false);

  const [profiilit, setProfiilit] = useState<Profiili[]>([]);
  const [oireLista, setOireLista] = useState<Oire[]>([]);
  const [lomake, setLomake] = useState<Lomake>();

  useEffect(() => {
    if (!kaynnistetty.current) {
      const storedOirelista = localStorage.getItem("oirelista");
      const storedProfiili = localStorage.getItem("profiilit");
  
      if (storedOirelista) {
        setOireLista(JSON.parse(storedOirelista).map((oire: Oire) => ({
          ...oire,
          pvm: new Date(oire.pvm),
        })));
      }
  
      if (storedProfiili) {
        setProfiilit(JSON.parse(storedProfiili).map((profiilit: Profiili) => ({
          ...profiilit,
          syntymaAika: profiilit.syntymaAika ? new Date(profiilit.syntymaAika) : null,
        })));
      }
    }
  
    return () => {
      kaynnistetty.current = true;
    };
  }, []);

  useEffect(() => {

    localStorage.setItem("oirelista", JSON.stringify(oireLista));

  }, [oireLista]);

  useEffect(() => {

    localStorage.setItem("profiilit", JSON.stringify(profiilit));

  }, [profiilit]);


  return (
    <div style={{width: "600px", margin: "0 auto"}}>
      <Valikko />
      <Routes>
        <Route path="/" element= { <Paasivu  />} />
        <Route path="/profiili" element={<Profiili profiilit={profiilit} setProfiilit={setProfiilit} />} />
        <Route path="/luoProfiili" element= { <LuoProfiili profiilit={profiilit} setProfiilit={setProfiilit} />} />
        <Route path="/poista/:id" element= { <Poista profiilit={profiilit} setProfiilit={setProfiilit} />} />
        <Route path="/muokkaa/:id" element= { <Muokkaa profiilit={profiilit} setProfiilit={setProfiilit} />} />
        <Route path="/lomake" element= { <Lomake />} />
        <Route path="/lahetetty" element= { <Lahetetty lomake={lomake} setLomake={setLomake} />} />
        <Route path="/paivakirja" element= { <Paivakirja oireLista={oireLista} setOireLista={setOireLista}/>} />
        <Route path="/poistaoire/:id" element= { <Poistaoire oireLista={oireLista} setOireLista={setOireLista}/>} />
        <Route path="/lisaa" element= { <Lisaa oireLista={oireLista} setOireLista={setOireLista}/>} />
      </Routes>
    </div>
  );
}

export default App;