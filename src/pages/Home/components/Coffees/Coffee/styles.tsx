import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme['base-card']};
    
    width: 256px;
    height: 310px;
    border-radius: 5px 40px;

    text-align: center;
    font-family: 'Roboto';
`

export const ImageContainer = styled.div`
    position: relative;
    top: -20px;
    text-align: center;
`
export const Categories = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const Category = styled.span`
    text-transform: uppercase ;

    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

    padding: 4px 8px;
    border-radius: 14px;

    font-size: 12px;
    font-weight: bold;

`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    flex-direction: column;

    gap: 12px;
`
export const Title = styled.h2`
    margin-top: 20px;
    font-size: 20px;
    color: ${props => props.theme['base-subtitle']};

`
export const Description = styled.p`
    font-size: 14px;

    color: ${props => props.theme['base-label']};
    width: 90%;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;
`

export const Price = styled.div`
`

export const Currency = styled.span`
    font-size: 14px;
    color: ${props => props.theme['base-text']};

    margin-right: 2px;
`

export const Value = styled.span`
    color: ${props => props.theme['base-text']};
    font-size: 22px;
    font-weight: bold;

`

export const CartContainer = styled.div`
    background-color: ${props => props.theme['purple-dark']};
    padding: 0px 10px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
`
