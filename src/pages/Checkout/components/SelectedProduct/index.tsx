import { Counter } from "../../../Home/components/Coffees/Counter";
import { Container, ImageContainer, Price, ProductActions, ProductData, RemoveButton, Title, TrashIconStyled } from "./styles";
import CoffeeImage from '../../../../assets/coffee.svg'
import { useState } from "react";



export function SelectedProduct() {
    const [selectedProductCounter, setSelectedProductCounter] = useState(0)

    function handleIncreaseSelectProductCounter() {
        setSelectedProductCounter(counter => {
            if (counter + 1 === 99) {
                return 99;
            } else {
                return counter + 1;
            }
        });
    }
    function handleDecreaseSelectProductCounter() {
        setSelectedProductCounter(counter => {
            if (counter - 1 === -1) {
                return 0;
            } else {
                return counter - 1;
            }
        });
    }
    return (
        <Container>
            <ImageContainer>
                <img src={CoffeeImage} alt="" />
            </ImageContainer>

            <ProductData>
                <Title>Expresso tradicional</Title>
                <ProductActions>
                    <Counter value={selectedProductCounter} onIncrease={handleIncreaseSelectProductCounter} onDecrease={handleDecreaseSelectProductCounter} />
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