import { Coffee } from "./Coffee";
import { CoffeesContainer, Container, Title } from "./styles";

export function Coffees() {
    return (
        <Container>
            <Title>Nossos cafés</Title>
            <CoffeesContainer>
                <Coffee />
                <Coffee />
                <Coffee />
                <Coffee />
                <Coffee />
            </CoffeesContainer>
        </Container>
    )
}