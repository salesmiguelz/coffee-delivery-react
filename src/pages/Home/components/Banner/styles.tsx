import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-self: center;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: 50px 0px;

   &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('./src/assets/banner-bg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }
`

export const TextContainer = styled.div`
`


export const Description = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

`

export const Title = styled.div`
    color: ${props => props.theme['base-title']};

    font-size: 48px;
    font-weight: bold;

    line-height: 1.2;

`

export const Subtitle = styled.div`
    color: ${props => props.theme['base-subtitle']};
    font-size: 20px;
    width: 90%;
`


export const Icons = styled.div`
    margin-top: 74px;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px;
`

export const ImageContainer = styled.div`
`