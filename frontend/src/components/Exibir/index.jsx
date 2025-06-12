import { Card } from 'primereact/card';
import striptags from 'striptags';

function Exibir({ previsao }) {
    return (
        <div className="flex items-center gap-4 flex-wrap p-4" style={{ background: "gray" }}>
            {previsao.map((dado, index) => (
                <Card
                    key={index}
                    className="w-60 text-center shadow-lg border border-gray-300 rounded-lg p-4"
                    style={{ background: "black", color: 'white' }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <img
                            src={`https://openweathermap.org/img/wn/${striptags(dado.icone)}@2x.png`}
                            alt={striptags(dado.descricao)}
                            className="w-16 h-16"
                        />
                        <div>
                            <p>{striptags(dado.descricao)}</p>
                            <p>Máxima: {striptags(String(dado.temp_max))}°C</p>
                            <p>Mínima: {striptags(String(dado.temp_min))}°C</p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default Exibir;
