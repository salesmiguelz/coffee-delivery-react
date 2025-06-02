import { ShoppingCartIcon } from '@phosphor-icons/react';
import { Counter } from '../Counter';
import { Container, Title, Actions, Description, ImageContainer, Categories, Category, TextContainer, Price, Currency, Value, CartContainer } from "./styles";

interface CategoryProps {
    id: string,
    name: string,
}
interface CoffeeProps {
    image: string,
    name: string,
    categories: CategoryProps[],
    description: string,
    price: Number
}

export function Coffee({ image, name, categories, description, price }: CoffeeProps) {
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
                    <Value>{price.toString()}</Value>
                </Price>
                <Counter />
                <CartContainer>
                    <ShoppingCartIcon color='white' weight='fill' size={22} />
                </CartContainer>

            </Actions>
        </Container>
    )
}