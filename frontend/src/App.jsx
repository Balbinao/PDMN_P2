import { useEffect, useState } from 'react';
import axios from 'axios';
import openWeatherClients from './utils/openWeatherClients';
import './App.css';
import Busca from './components/Busca';
function App() {
  
  return (
    <>
     <Busca/>
    </>
  );
}

export default App;
