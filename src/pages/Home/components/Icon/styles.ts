import styled from "styled-components";
import type { defaultTheme } from "../../../../styles/themes/default";

interface ContainerProps {
    color: keyof typeof defaultTheme;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`



export const IconContainer = styled.div<ContainerProps>`
    height: 32px;
    width: 32px;
    padding: 8px;
    border-radius: 50%;

    background-color: ${props => props.theme[props.color]};

    display: flex;
    align-items: center;
    justify-content: center;
`