import styled from "styled-components";

//Aqui estão as configurações de tela gerais:
export const Container = styled.div<{UrlBg: string}>`
    ${(({UrlBg}) => {return `background-img url(${UrlBg});`})}
    margin: -8px;
    width: 100vw;
    height: 100vh;
    max-height: 840px;
    display: grid;
    justify-content: center
    align-content: center; 
`;

export const Wrapper = styled.div`
    width: 60vw;
    display: grid;
`;
