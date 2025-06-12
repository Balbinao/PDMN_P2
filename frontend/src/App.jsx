import { useEffect, useState } from 'react';
import './App.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import Busca from './components/Busca';
import Exibir from './components/Exibir'
function App() {
  const [previsao, setPrevisao] = useState([])
  return (
    <div >
     <Busca setPrevisao={setPrevisao}/>
     <Exibir previsao = {previsao}/>
    </div>
  );
}

export default App;
