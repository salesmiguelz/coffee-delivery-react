import styled from "styled-components";

export const Title = styled.h2`
    font-size: 18px;
    color: ${props => props.theme['base-subtitle']};
    font-weight: bold;
    margin-bottom: 10px;
`

export const Subtext = styled.h2`
    font-size: 14px;
    font-family: 'Roboto';
    font-weight: normal;
    color: ${props => props.theme['base-text']};
`

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;

    form{
        display: flex;
        gap: 120px;
    }
`

export const FinishOrder = styled.div`

`

export const DeliveryAddressHeader = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 8px;
`

export const DeliveryAddress = styled.div`
    background-color: ${props => props.theme['base-card']};
    padding: 40px;
    width: 640px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;

    border-radius: 6px;
    margin-bottom: 14px;
`

export const DeliveryAddressIcon = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-top: 6px;
    color: ${props => props.theme['yellow-dark']};
`

export const DeliveryAddressText = styled.div`
`

export const DeliveryForm = styled.div`
    margin-top: 18px;
`

export const PaymentHeader = styled.div`
display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 8px;
`
export const Payment = styled.div`
    background-color: ${props => props.theme['base-card']};
    padding: 40px;
    width: 640px;
    height: 200px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;

    border-radius: 6px;
    margin-bottom: 14px;

`

export const PaymentIcon = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 6px;
    color: ${props => props.theme['purple']};
`
export const PaymentText = styled.div`
`

export const PaymentMethods = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
`

export const OrderDetailsContainer = styled.div`
`

export const OrderDetails = styled.div`
    background-color: ${props => props.theme['base-card']};
    width: 448px;
    min-height: 350px;
    border-radius: 5px 40px;
`
export const SelectedProducts = styled.div`
    padding: 40px 40px 0px;

    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const OrderSummary = styled.div`
    background-color: ${props => props.theme['base-card']};
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    border-radius: 0px 0px 5px 40px;
`

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: ${props => props.theme['base-text']};
`;

export const SummaryTotal = styled(SummaryItem)`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme['base-subtitle']};
`;

export const ConfirmOrderButton = styled.button`
    background-color: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 12px;
    border-radius: 6px;

    font-weight: bold;

    margin-top: 14px;

    cursor: pointer;

    width: 100%;

    outline: none;
    border: none;
`

export const StyledHr = styled.hr`
    border: none;
    margin: 0;
    padding: 0;
    height: 1px;
    background-color: ${props => props.theme['base-button']}; 
`
