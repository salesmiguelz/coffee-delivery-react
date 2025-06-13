import { ShoppingCartIcon } from '@phosphor-icons/react';
import { Counter } from '../Counter';
import { Container, Title, Actions, Description, ImageContainer, Categories, Category, TextContainer, Price, Currency, Value, CartContainer } from "./styles";
import { useContext, useState } from 'react';
import { CartContext } from '../../../../../contexts/CartContext';

interface CategoryProps {
    id: string,
    name: string,
}
interface CoffeeProps {
    id: string,
    image: string,
    name: string,
    categories: CategoryProps[],
    description: string,
    price: number
}

export function Coffee({ id, image, name, categories, description, price }: CoffeeProps) {
    const [coffeeCounter, setCoffeeCounter] = useState(1);

    const { addProductToCart } = useContext(CartContext)

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

    function handleAddProductToCart(id: string, quantity: number) {
        addProductToCart(id, quantity)
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
                    <ShoppingCartIcon color='white' weight='fill' size={22} onClick={() => handleAddProductToCart(id, coffeeCounter)} />
                </CartContainer>
            </Actions>
        </Container>
    )
}