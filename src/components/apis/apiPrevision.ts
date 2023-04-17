import axios from 'axios';

const LANGUAGE = 'pt_br';
const UNITS = 'metric';

 //Obter a previsão atual através da API:
export const getActualPrevison = async (latitude: number, longitude: number) => {
    try{
        let response = await axios.get(`${process.env.REACT_APP_BASE_WEATHER_API}/weather
        /?lat=${latitude}&lon${longitude}&appid=${process.env.REACT_APP_KEY_OPENWEATHER_API}&lang=${LANGUAGE}&units=${UNITS}}`)
        return response.data;
    }catch(err){
        console.log("Houve um erro", err)
    }
};

    //Obter previsão para os próximos dias: 
export const getPrevisionByNextDays = async (latitude: number, longitude: number) => {
    try{
        let response = await axios.get(`${process.env.REACT_APP_BASE_WEATHER_API}/forecast
        ?lat=${latitude}&lon${longitude}&appid=${process.env.REACT_APP_KEY_OPENWEATHER_API}&lang=${LANGUAGE}&units=${UNITS}`)
        return response.data;
    }catch(err){
        console.log("Houve um erro", err)
    }
};