import { Counter } from "../../../Home/components/Coffees/Counter";
import { Container, ImageContainer, Price, ProductActions, ProductData, RemoveButton, Title, TrashIconStyled } from "./styles";
import CoffeeImage from '../../../../assets/coffee.svg'

export function SelectedProduct() {
    return (
        <Container>
            <ImageContainer>
                <img src={CoffeeImage} alt="" />
            </ImageContainer>

            <ProductData>
                <Title>Expresso tradicional</Title>
                <ProductActions>
                    <Counter />
                    <RemoveButton>
                        <TrashIconStyled />
                        <p>REMOVER</p>
                    </RemoveButton>
                </ProductActions>
            </ProductData>
            <Price>R$ 9,88</Price>

        </Container>
    )
}