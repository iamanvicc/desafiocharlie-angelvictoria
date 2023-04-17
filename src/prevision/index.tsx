import React, {useState, useEffect} from 'react';
import { Container, Wrapper } from './styled';
import Input  from '../components/features/input';
import Display from '../components/features/display';
import { PrevisionProps, PrevisionNextDaysProps ,LocationProps } from './types';
import { getActualPrevison, getPrevisionByNextDays} from '../components/apis/apiPrevision';
import { getCityLocationByCoordinates, getLocationByCityName } from '../components/apis/apiCoordinates';
import {getBingBackground} from '../components/apis/apiBingBackground';
import {getCelsiusToFahrenheit, tempColors, firstLetterUppercase} from '../components/resources/functions';
import {Start}  from '../components/model/startPrevision';

function Prevision( ){
  const [loading, setLoading] = useState(true);
  const [isCelsius, setIsCelsius] = useState(true);
  const [cityName, setCityName] = useState('');
  const [ActualPrevision, setActualPrevision] = useState<PrevisionProps>(Start.ActualPrevision);
  const [PrevisionNextDays, setPrevisionForNextDays] = useState<PrevisionNextDaysProps>(Start.PrevisionNextDays);
  const [cityLocation, setCityLocation] = useState<LocationProps>(Start.Location); 
  const [BingBg, setBingBg] = useState(Start.Bing);

  //Pega a Previsao Atual do dia
  const getActualPrevision = async (latitude: number, longitude: number) => {
    const response = await getActualPrevison(latitude, longitude)
      setActualPrevision(response)
  };

  //Pega a Previsão dos Próximos dias
  const getPrevisionNextDays = async (latitude: number, longitude: number) => {
    const response = await getPrevisionByNextDays(latitude, longitude)
      setPrevisionForNextDays(response)
  };

  //Pego a Localização da Cidade por Coordenadas
  const getCityLocationCoordinates= async (latitude: number, longitude: number) => {
    const response = await getCityLocationByCoordinates(latitude, longitude)
      setCityLocation(response)
  };

  //Pega o nome da Cidade
  const GetCityName = async ( ) => {
    if(cityName !== " "){
    const response = await getLocationByCityName(cityName)
      setCityName(response)
  };

  //Pega o Background do Bing
  const getBingBg = async () => {
    const results = await getBingBackground()
    setBingBg(`https://bing.com/${results}`)
  };

  useEffect(() => { 
    getBingBg()
    navigator.geolocation.getCurrentPosition(position => {
    getCityLocationCoordinates(position.coords.latitude, position.coords.longitude)    
    getActualPrevision(position.coords.latitude, position.coords.longitude)
    getPrevisionNextDays(position.coords.latitude, position.coords.longitude)
    })
    setLoading(false)
  }, []);

  useEffect(() => {
    if (cityLocation.results[0]?.components){
    setCityName(`${cityLocation.results[0]?.components.city}`)} 
    if(cityLocation.results[0].geometry){
    getActualPrevision(cityLocation.results[0].geometry.lat, cityLocation.results[0].geometry.lng)
    getPrevisionNextDays(cityLocation.results[0].geometry.lat, cityLocation.results[0].geometry.lng)} 
  }, []);

  return(
    <Container UrlBg={BingBg}>
        { loading ?
          <div>Carregando...</div>
          :
          <Wrapper>
              <Input value={cityName} 
                      onChange={(value)=>{setCityName(value)}} 
                      stopTyping = {GetCityName}/>

              <Display 
                      icon={`http://openweathermap.org/img/wn/${ActualPrevision.weather[0].icon}@2x.png`}
                      title="HOJE"
                      temp={isCelsius ? `${ActualPrevision.main.temp}°C` : `${getCelsiusToFahrenheit(ActualPrevision.main.temp)}°F`}
                      description={firstLetterUppercase(ActualPrevision.weather[0].description)}
                      converterTemp={()=> setIsCelsius (!isCelsius)} 
                      infoAdd={{
                          vento: `NO ${ActualPrevision.wind.speed}Km/h`,
                          umidade: `${ActualPrevision.main.humidity}%`,
                          pressao: `${ActualPrevision.main.pressure}hPA`
                      }}
                      background={tempColors(ActualPrevision.main.temp)}
                      heigth="40vh"
                      opacity="0.8"/>

              <Display 
                      title="AMANHÃ"
                      temp={isCelsius? `${PrevisionNextDays?.list[4]?.main.temp} °C`:`${getCelsiusToFahrenheit(PrevisionNextDays?.list[4]?.main.temp)}°F`}
                      converterTemp={()=> setIsCelsius (!isCelsius)}
                      background={tempColors(PrevisionNextDays.list[4]?.main?.temp)}
                      description={firstLetterUppercase(ActualPrevision.weather[0].description)}
                      opacity="0.9"
                      heigth="20vh"/>
              
              <Display 
                      title="DEPOIS DE AMANHÃ"
                      temp={isCelsius? `${PrevisionNextDays?.list[4]?.main.temp} °C`:`${getCelsiusToFahrenheit(PrevisionNextDays?.list[4]?.main.temp)}°F`}
                      converterTemp={()=> setIsCelsius (!isCelsius)}
                      background={tempColors(PrevisionNextDays.list[4]?.main?.temp)}
                      description={firstLetterUppercase(ActualPrevision.weather[0].description)}
                      opacity="1.0"
                      heigth="20vh"/>
          </Wrapper>
        }
    </Container>
  )
 }
};
export default Prevision;

