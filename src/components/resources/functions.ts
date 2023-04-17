
 //Converter de Celsius para Fahrenheit:
 export const  getCelsiusToFahrenheit = (celsius: number): number => {
    return Number(((celsius * 9/5) + 32).toFixed(2))
}

// Cores:
export const getColors = {
    Gray: '#7E7D7B',
    LigthGray: '#EFEBE8',
    LigthYellow: '#F1EDEA',
    DarkYellow: '#B89503',
    White: '#FFFFFF',
    Blue:'#1357A6',
    Red:'#800000',
}

//Temperatura baseada nas Cores:
export const tempColors = (temp: number) => {
    if(temp < 16){
        return getColors.Blue
    } else if (temp >= 35){
        return getColors.Red
    }
    return getColors.DarkYellow
}

//Coloca a primeira letra em maiúsculo:
export const firstLetterUppercase = (text: string) => {
return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}