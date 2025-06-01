import styled from "styled-components";


export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
`

export const SuccessMessage = styled.div`
 
`

export const SuccessText = styled.div`
   h2{
        color: ${props => props.theme['yellow-dark']};
        font-size: 32px;
    }

    p{
        color: ${props => props.theme['base-subtitle']};
        font-size: 20px;
    }
`

export const DeliveryData = styled.div`
    margin-top: 20px;
    padding: 40px;
    border-radius: 6px 36px;
    border: 1px solid ${props => props.theme['purple']};
    width: 526px;
    background-color: '#FFFFFFFF';

`;
export const DeliveryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 25px 0px;
`;
export const IconWrapper = styled.div<{ variant: 'location' | 'timer' | 'payment' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 8px;
  background-color: ${({ theme, variant }) => variant === 'location' ? theme.purple : variant === 'timer' ? theme.yellow : theme['yellow-dark']};
  color: ${({ theme }) => theme.white};
`;
export const ItemText = styled.div`
    font-family: 'Roboto';
    font-size: 16px;
    color: ${props => props.theme['base-text']}
`;

export const SuccessImage = styled.div`
`