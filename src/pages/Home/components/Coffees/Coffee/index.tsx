import { ShoppingCartIcon } from '@phosphor-icons/react';
import { Counter } from '../Counter';
import { Container, Title, Actions, Description, ImageContainer, Categories, Category, TextContainer, Price, Currency, Value, CartContainer } from "./styles";
import { useState } from 'react';

interface CategoryProps {
    id: string,
    name: string,
}
interface CoffeeProps {
    image: string,
    name: string,
    categories: CategoryProps[],
    description: string,
    price: string
}

export function Coffee({ image, name, categories, description, price }: CoffeeProps) {
    const [coffeeCounter, setCoffeeCounter] = useState(1);

    function handleIncreaseCoffeeCounter() {
        setCoffeeCounter(counter => {
            if (counter + 1 === 99) {
                return 99;
            } else {
                return counter + 1;
            }
        });
    }

    function handleDecreaseCoffeeCounter() {
        setCoffeeCounter(counter => {
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
                <img src={image} alt={`Imagem de ${name}`} />
            </ImageContainer>

            <Categories>
                {categories.map(category => <Category key={category.id}>{category.name}</Category>)}
            </Categories>

            <TextContainer>
                <Title>
                    {name}
                </Title>

                <Description>
                    {description}
                </Description>
            </TextContainer>

            <Actions>
                <Price>
                    <Currency>R$</Currency>
                    <Value>{price}</Value>
                </Price>
                <Counter value={coffeeCounter} onIncrease={handleIncreaseCoffeeCounter} onDecrease={handleDecreaseCoffeeCounter} />
                <CartContainer>
                    <ShoppingCartIcon color='white' weight='fill' size={22} />
                </CartContainer>

            </Actions>
        </Container>
    )
}