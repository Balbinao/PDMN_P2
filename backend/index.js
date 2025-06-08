require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())

const openweatherClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
      appid: process.env.WEATHER_KEY,
      lang: 'pt_br',
      units: 'metric'
    }
  })

//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
app.get('/forecast', async (req, res) => {
    const city = req.query.q  
    const result = await openweatherClient.get('forecast',{
        params: { q: city }
    })

    const infoClima = result.data.list.map(forecast => ({
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        umidade: forecast.main.humidity,
        icone: forecast.weather[0].icon,
        descricao: forecast.weather[0].description,
        
        }))
    res.json(infoClima)
})

const port = 3000
app.listen(port, () => console.log(`Back End OK! Porta ${port}.`))
