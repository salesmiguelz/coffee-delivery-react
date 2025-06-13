import { ClockIcon, CurrencyDollarIcon, MapPinIcon } from "@phosphor-icons/react";
import { Container, DeliveryData, DeliveryItem, IconWrapper, ItemText, SuccessImage, SuccessMessage, SuccessText } from "./styles";
import DriverImage from "../../assets/driver.svg"

export function Success() {
    return (
        <Container>
            <SuccessMessage>
                <SuccessText>
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </SuccessText>

                <DeliveryData>
                    <DeliveryItem>
                        <IconWrapper variant="location">
                            <MapPinIcon weight="fill" />
                        </IconWrapper>
                        <ItemText>
                            Entrega em  <strong>Av. Presidente Itamar Franco, 1600</strong>
                            <br />
                            São Mateus - Juiz de Fora, MG
                        </ItemText>
                    </DeliveryItem>

                    <DeliveryItem>
                        <IconWrapper variant="timer">
                            <ClockIcon weight="fill" />
                        </IconWrapper>
                        <ItemText>
                            Previsão de entrega
                            <br />
                            <strong>20 min - 30 min</strong>
                        </ItemText>
                    </DeliveryItem>

                    <DeliveryItem>
                        <IconWrapper variant="payment">
                            <CurrencyDollarIcon />
                        </IconWrapper>
                        <ItemText>
                            Pagamento na entrega
                            <br />
                            <strong>Cartão de Crédito</strong>
                        </ItemText>
                    </DeliveryItem>
                </DeliveryData>
            </SuccessMessage>

            <SuccessImage>
                <img src={DriverImage} />
            </SuccessImage>

        </Container>
    )
}