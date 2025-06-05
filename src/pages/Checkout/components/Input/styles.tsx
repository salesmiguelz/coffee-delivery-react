import styled from "styled-components";

const InputSize = {
  'XS': '138px',
  'S': '200px',
  'M': '348px',
  'L': '560px',
}

interface InputProps {
  size: 'XS' | 'S' | 'M' | 'L',
  $optional?: boolean,
}

interface ErrorContainerProps {
  $errors?: string
}

export const Container = styled.div`
  position: relative;
  display: inline-block;
`

export const StyledInput = styled.input<InputProps>`
    font-size: 14px;
    font-family: 'Roboto';
    color: ${props => props.theme["base-label"]};
    border-radius: 4px;
    padding: 12px;
    background-color: ${props => props.theme["base-input"]};
    width: ${props => InputSize[props.size]};
    height: 42px;

    margin: 8px 5px;

    border: none;
    outline: 1px solid ${props => props.theme['base-button']}; ;
    padding-right: 60px;


    &:focus{
        outline: 1px solid ${props => props.theme['yellow-dark']};
    };
`

export const OptionalLabel = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  font-style: italic;
  color: ${props => props.theme['base-label']};
  pointer-events: none;
  font-family: 'Roboto';
`

export const ErrorContainer = styled.div<ErrorContainerProps>`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  span {
    margin-left: 8px;
    align-self: center;
    color: #FF3333;
    visibility: ${props => props.$errors ? 'visible' : 'hidden'}
  }
`