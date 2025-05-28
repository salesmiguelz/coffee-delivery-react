import { ShoppingCartIcon } from '@phosphor-icons/react';
import CoffeeImage from '../../../../../assets/coffee.svg'
import { Counter } from '../Counter';
import { Container, Title, Actions, Description, ImageContainer, Categories, Category, TextContainer, Price, Currency, Value, CartContainer } from "./styles";

export function Coffee() {
    return (
        <Container>
            <ImageContainer>
                <img src={CoffeeImage} alt="" />
            </ImageContainer>

            <Categories>
                <Category>Tradicional</Category>
                <Category>Extra Forte</Category>
            </Categories>

            <TextContainer>
                <Title>
                    Expresso tradicional
                </Title>

                <Description>
                    Meio a meio de expresso tradicional com leite vaporizado
                </Description>
            </TextContainer>


            <Actions>
                <Price>
                    <Currency>R$</Currency>
                    <Value>9,99</Value>
                </Price>
                <Counter />
                <CartContainer>
                    <ShoppingCartIcon color='white' weight='fill' size={22} />
                </CartContainer>

            </Actions>
        </Container>
    )
}