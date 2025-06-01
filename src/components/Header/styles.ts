import { MapPinIcon } from "@phosphor-icons/react";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled.div`
    width: 85px;
    height: 40px;
    margin-top: 12px;
`

export const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`

export const HeaderLocale = styled.div`
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    font-size: 16px;

    display: flex;
    align-items: center;
    gap: 5px;


    padding: 8px;
    border-radius: 6px;
`

export const HeaderLocaleIcon = styled(MapPinIcon)`
    color: ${props => props.theme['purple']};
`

export const HeaderCart = styled.div`
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

    border-radius: 6px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    span {
        position: absolute;
        bottom: 10px;
        top: -8px;
        right: -8px;

        color: white;
        background-color: ${props => props.theme['yellow-dark']};

        height: 24px;
        width: 24px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 16px;
        font-weight: bold;

    }
`