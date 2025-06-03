import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme['base-button']};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    gap: 6px;
    border-radius: 5px;

    height: 38px;
`


export const Value = styled.span`
`