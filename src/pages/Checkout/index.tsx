import { CurrencyDollarIcon, MapPinAreaIcon } from "@phosphor-icons/react";
import { ConfirmOrderButton, Container, DeliveryAddress, DeliveryAddressHeader, DeliveryAddressIcon, DeliveryAddressText, DeliveryForm, FinishOrder, OrderDetails, OrderDetailsContainer, OrderSummary, Payment, PaymentHeader, PaymentIcon, PaymentMethods, PaymentText, SelectedProducts, StyledHr, Subtext, SummaryItem, SummaryTotal, Title } from "./styles";
import { Subtitle } from "../Home/components/Banner/styles";
import { Input } from "./components/Input";
import { PaymentMethod } from "./components/PaymentMethod";
import { SelectedProduct } from "./components/SelectedProduct";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Checkout() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    function handleSetSelectedPaymentMethod(type: 'credit' | 'debit' | 'cash') {
        setSelectedPaymentMethod(oldType => {
            if (oldType === type) {
                return '';
            } else {
                return type;
            }
        })
    }
    return (
        <Container>
            <FinishOrder>
                <Title>Complete seu pedido</Title>
                <DeliveryAddress>
                    <DeliveryAddressHeader>
                        <DeliveryAddressIcon>
                            <MapPinAreaIcon size={22} />
                        </DeliveryAddressIcon>
                        <DeliveryAddressText>
                            <Subtitle>Endereço de Entrega </Subtitle>
                            <Subtext>Informe o endereço onde deseja receber seu pedido</Subtext>
                        </DeliveryAddressText>
                    </DeliveryAddressHeader>


                    <DeliveryForm>
                        <Input placeholder='CEP' size='S' />
                        <Input placeholder='Rua' size='L' />
                        <Input placeholder='Número' size='S' />
                        <Input placeholder='Complemento' size='M' optional />
                        <Input placeholder='Bairro' size='S' />
                        <Input placeholder='Cidade' size='S' />
                        <Input placeholder='UF' size='XS' />
                    </DeliveryForm>
                </DeliveryAddress>

                <Payment>
                    <PaymentHeader>
                        <PaymentIcon>
                            <CurrencyDollarIcon size={22} />
                        </PaymentIcon>

                        <PaymentText>
                            <Subtitle>Pagamento </Subtitle>
                            <Subtext>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Subtext>
                        </PaymentText>
                    </PaymentHeader>

                    <PaymentMethods>
                        <PaymentMethod type={'credit'} isSelected={selectedPaymentMethod === 'credit'} handleSetSelectedPaymentMethod={handleSetSelectedPaymentMethod} />
                        <PaymentMethod type={'debit'} isSelected={selectedPaymentMethod === 'debit'} handleSetSelectedPaymentMethod={handleSetSelectedPaymentMethod} />
                        <PaymentMethod type={'cash'} isSelected={selectedPaymentMethod === 'cash'} handleSetSelectedPaymentMethod={handleSetSelectedPaymentMethod} />
                    </PaymentMethods>

                </Payment>

            </FinishOrder>

            <OrderDetailsContainer>
                <Title>Cafés selecionados</Title>
                <OrderDetails>
                    <SelectedProducts>
                        <SelectedProduct>
                        </SelectedProduct>
                        <StyledHr />

                        <SelectedProduct>
                        </SelectedProduct>
                        <StyledHr />
                    </SelectedProducts>
                    <OrderSummary>
                        <SummaryItem>
                            <span>Total de itens</span>
                            <span>R$ 29,70</span>
                        </SummaryItem>

                        <SummaryItem>
                            <span>Entrega</span>
                            <span>R$ 3,50</span>
                        </SummaryItem>

                        <SummaryTotal>
                            <span>Total</span>
                            <span>R$ 33,20</span>
                        </SummaryTotal>
                        <Link to="/success" style={{
                            all: "unset",
                        }}>
                            <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
                        </Link>
                    </OrderSummary>
                </OrderDetails>
            </OrderDetailsContainer>
        </Container>
    )
}