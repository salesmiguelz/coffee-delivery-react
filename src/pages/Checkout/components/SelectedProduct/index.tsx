import { CartContext } from "../../../../contexts/CartContext";
import { Counter } from "../../../Home/components/Coffees/Counter";
import { Container, ImageContainer, Price, ProductActions, ProductData, RemoveButton, Title, TrashIconStyled } from "./styles";
import { useContext, useState } from "react";

interface SelectProductProps {
    id: string,
    name: string,
    image: string,
    price: number,
    quantity: number
}

export function SelectedProduct({ id, name, image, price, quantity }: SelectProductProps) {
    const [selectedProductCounter, setSelectedProductCounter] = useState(quantity)

    const { removeProductFromCart, increaseProductQuantityFromCart, decreaseProductQuantityFromCart } = useContext(CartContext)

    function handleIncreaseSelectProductCounter(id: string) {
        setSelectedProductCounter(counter => {
            if (counter + 1 === 99) {
                return 99;
            } else {
                return counter + 1;
            }
        });

        increaseProductQuantityFromCart(id)
    }
    function handleDecreaseSelectProductCounter(id: string) {
        setSelectedProductCounter(counter => {
            if (counter - 1 === -1) {
                return 0;
            } else {
                return counter - 1;
            }
        });

        decreaseProductQuantityFromCart(id)
    }
    return (
        <Container>
            <ImageContainer>
                <img src={image} alt="" />
            </ImageContainer>

            <ProductData>
                <Title>{name}</Title>
                <ProductActions>
                    <Counter value={selectedProductCounter} onIncrease={() => handleIncreaseSelectProductCounter(id)} onDecrease={() => handleDecreaseSelectProductCounter(id)} />
                    <RemoveButton onClick={() => removeProductFromCart(id)}>
                        <TrashIconStyled />
                        <p>REMOVER</p>
                    </RemoveButton>
                </ProductActions>
            </ProductData>
            <Price>R$ {price}</Price>
        </Container>
    )
}