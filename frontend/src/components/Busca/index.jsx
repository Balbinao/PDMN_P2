import { useEffect, useState } from 'react';
import openWeatherClients from '../../utils/openWeatherClients';
import './busca.css';

function Busca({setPrevisao}) {
    const [valor, setValor] = useState('Sao Paulo');

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            if (valor.length >= 3) {
                const fazerBusca = async () => {
                    try {
                        const response = await openWeatherClients.get(`/forecast?q=${valor}`);
                        const resultado = response.data
                        setPrevisao(resultado)
                    } catch (error) {
                        console.error("Erro ao buscar os dados:", error);
                    }
                };
                fazerBusca();
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutID);
        };
    }, [valor]);

    return (
        <>
            <div className="container-input">
                <label htmlFor="input" className='text-xl'>Vamos descobrir o clima de onde?</label>
                <input
                    type="text"
                    name="input"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
            </div>
        </>
    );
}

export default Busca;
