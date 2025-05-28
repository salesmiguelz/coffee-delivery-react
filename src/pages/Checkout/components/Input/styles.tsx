import styled from "styled-components";

const InputSize = {
    'P': '100px',
    'M': '200px',
    'L': '300px',
    'XL': '400px',
}

interface InputProps {
    size: 'P' | 'M' | 'L' | 'XL'
}

export const StyledInput = styled.input<InputProps>`
    font-size: 14px;
    font-family: 'Roboto';
    color: ${props => props.theme["base-label"]};
    border-radius: 4px;
    padding: 12px;
    border: none;
    background-color: ${props => props.theme["base-input"]};
    width: ${props => InputSize[props.size]};

    &:focus{
        outline: 1px solid ${props => props.theme['yellow-dark']};
    };
`