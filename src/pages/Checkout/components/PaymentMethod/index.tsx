import { BankIcon, CreditCardIcon, MoneyIcon } from "@phosphor-icons/react"
import { Container, Icon, Text } from "./styles"

interface PaymentMethodProps {
    type: 'credit' | 'debit' | 'cash',
    isSelected: boolean,
    handleSetSelectedPaymentMethod: (type: 'credit' | 'debit' | 'cash') => void
}

export function PaymentMethod({ type, isSelected, handleSetSelectedPaymentMethod }: PaymentMethodProps) {
    return (
        <Container $isSelected={isSelected} onClick={() => handleSetSelectedPaymentMethod(type)}>
            <Icon>
                {type === 'credit' && <CreditCardIcon />}
                {type === 'debit' && <BankIcon />}
                {type === 'cash' && <MoneyIcon />}
            </Icon>
            <Text>
                {type === 'credit' && "CARTÃO DE CRÉDITO"}
                {type === 'debit' && "CARTÃO DE DÉBITO"}
                {type === 'cash' && "DINHEIRO"}
            </Text>

        </Container>
    )
}