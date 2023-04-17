import React, {useState} from 'react';
import { InputField, InputContainer, Img } from './styled';
import Compass from './Compass.svg';

//Type do Input
export type InputProps = {
    value: string
    onChange: (evento: string) => void
    stopTyping: (event: string) => void
};

const Input = ({value, onChange, }: InputProps) => {
    const [timer, setTimer] = useState<NodeJS.Timeout>(); 

    //Verifica se o usuário parou de digitar:
    const getStopTyping = (text:string) => {
        const leadTime = 2000;
        clearTimeout(timer);
        setTimer(
            setTimeout(() => {getStopTyping(text);
            }, leadTime)
        );
    };

    return(
       <InputContainer>
            <Img src={Compass}  alt="Compass"/>
            
            <InputField
                id= "input"
                type= "text" 
                value={value}
                onChange={(event) => {onChange(event.target.value)}}
                onKeyUp={(event) => getStopTyping(event.currentTarget.value)}
            />

       </InputContainer>
    );   
}

export default Input;