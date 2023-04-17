import axios from 'axios';

/*
city: nome da cidade
*/

 //Pegar as coordenadas de localização através da API:
    export const getCityLocationByCoordinates = async (latitude: number, longitude: number) => {
        try{
        let response = await axios.get(`${process.env.REACT_APP_URL_LOCATION_AND_LOCALNAME_API}/geocode/v1/json?q=${latitude}+${longitude}
        &key=${process.env.REACT_APP_KEY_OPENCAGE_API}`);
        return response.data;
        }catch(err){
            console.log("Houve um erro", err)
        }
    }

//Pegar as coordenadas do nome através da localizaçao:
    export const getLocationByCityName = async (city: string) => {
        try{
            let response = await axios.get(`${process.env.REACT_APP_URL_LOCATION_AND_LOCALNAME_API}/geocode/v1/json?q=${city}
            &key=${process.env.REACT_APP_KEY_OPENCAGE_API}`)
            return response.data;
        }catch (err){
            console.log("Houve um erro", err)
        }
    }

