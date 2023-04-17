//Pega as propriedades das Previsões:
export interface PrevisionProps{
    main: {
        temp: number,
        pressure: number,
        humidity: number,
    }
    weather: {
        main: string,
        description: string,
        icon: number,
    }[]
    wind: {
        speed: number,
        deg: number,
    }
};

export interface PrevisionNextDaysProps{
    list:{
        main:{
            temp: number
        }
    }[]
}

//Pega as propriedades das Coordenadas de Localização:
export interface LocationProps{
    results: {
        components:{
            city: string
        }
        geometry: {
            lat: number,
            lng: number,
        }
    }[]
}
