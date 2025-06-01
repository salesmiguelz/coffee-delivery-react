import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    padding: 16px;
    border-radius: 6px;

    background-color: ${props => props.theme['base-button']};
`

export const Icon = styled.div`
    display: flex;
    align-items: center;

    justify-content: center;
    color: ${props => props.theme['purple']};
`

export const Text = styled.p`
    font-size: 12px;
    color: ${props => props.theme['base-text']}
`