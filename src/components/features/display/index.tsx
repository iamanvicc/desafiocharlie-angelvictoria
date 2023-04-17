import React from 'react';
import { DisplayContainer, LeftArea, ImgArea, Description,
    Row, Distance, SmallRow } from './styled';

interface DisplayProps{
    icon?: string,
    title: string,
    temp: string,
    description: string,
    converterTemp: () => void;
    infoAdd?: InfoAddProps;
    background: string,
    heigth: string,
    opacity: string
}

interface InfoAddProps{
    vento: string,
    umidade: string,
    pressao: string
}

const Display = ({icon, title, temp, description, converterTemp, 
                infoAdd, background, heigth, opacity}: DisplayProps) => {

    return(                               
    <DisplayContainer background={background} heigth={heigth} opacity={opacity}>
        <LeftArea>
            {icon && 
            <ImgArea src={icon} alt={`Temperatura- ${temp}`}/>}

        </LeftArea>
        <Description>
            <Row>{title}</Row>
            <Row onClick={converterTemp}>{temp}</Row>

            {infoAdd && 
            <>
                <Distance>
                    <Row>{description}</Row>
                </Distance>
                    <SmallRow>VENTO:{infoAdd.vento}</SmallRow>
                    <SmallRow>UMIDADE:{infoAdd.umidade}</SmallRow>
                    <SmallRow>PRESSÃO:{infoAdd.pressao}</SmallRow>
            </>
            }
        </Description>
    </DisplayContainer>
  )
};

export default Display;