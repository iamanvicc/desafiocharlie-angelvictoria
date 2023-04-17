import axios from 'axios';

//Pegar as propriedades da imagem do Bing;
interface getBingImageProps{
    contents: string;
    url: string,
    title: string,
    copyright: string,
}

//Solicitando através da API a imagem do Bing
export const getBingBackground = async () => {
    try{
    const results = await axios.get<getBingImageProps>(`${process.env.REACT_APP_ALLOWORIGIN_API}?
    ${encodeURIComponent(String(process.env.REACT_APP_BING_API))}`)
    const tJSON = JSON.parse(results.data.contents)
    return tJSON.images[0].url   
    }catch (err){
        console.log(err)
    }
}