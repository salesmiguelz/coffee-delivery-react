import { TrashIcon } from "@phosphor-icons/react";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 32px;
`

export const ImageContainer = styled.div`
    width: 64px;
    height: 64px;

    img{
        width: 100%;
        height: 100%;
    }
`

export const ProductData = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

export const ProductActions = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
`

export const Title = styled.p`
    font-size: 16px;
    font-family: 'Roboto';
    color: ${props => props.theme['base-subtitle']};
`

export const RemoveButton = styled.div`
   display: flex;
   align-items: center;
   background-color: ${props => props.theme['base-button']};
   padding: 6px;
   gap: 6px;
   border-radius: 5px;

   color: ${props => props.theme['base-text']};
   font-size: 15px;

   transition: background-color 0.2s ease;
    &:hover{
        cursor: pointer;
        background-color: ${props => props.theme['base-hover']};
    }
`

export const TrashIconStyled = styled(TrashIcon)`
    color: ${props => props.theme['purple']};
`

export const Price = styled.p`  
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme['base-text']};
`
