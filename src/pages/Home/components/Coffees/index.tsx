import { Coffee } from "./Coffee";
import { CoffeesContainer, Container, Title } from "./styles";
import Cappucino from '../../../../assets/capuccino.svg'
import HotChocolate from '../../../../assets/chocolate-quente.svg'
import Irish from '../../../../assets/irlandes.svg'
import Latte from '../../../../assets/latte.svg'
import Mocaccino from '../../../../assets/mocaccino.svg'

export function Coffees() {
    const coffees = [
        {
            id: crypto.randomUUID(),
            image: Cappucino,
            name: 'Café com Leite',
            categories: [
                { id: crypto.randomUUID(), name: 'Tradicional' },
                { id: crypto.randomUUID(), name: 'Com leite' }
            ],
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: 9.99
        },
        {
            id: crypto.randomUUID(),
            image: HotChocolate,
            name: 'Expresso Tradicional',
            categories: [
                { id: crypto.randomUUID(), name: 'Tradicional' }
            ],
            description: 'O tradicional café feito com grãos moídos na hora',
            price: 6.50
        },
        {
            id: crypto.randomUUID(),
            image: Irish,
            name: 'Capuccino',
            categories: [
                { id: crypto.randomUUID(), name: 'Tradicional' },
                { id: crypto.randomUUID(), name: 'Com leite' }
            ],
            description: 'Uma mistura deliciosa de café, leite vaporizado e espuma cremosa',
            price: 11.00
        },
        {
            id: crypto.randomUUID(),
            image: Latte,
            name: 'Latte',
            categories: [
                { id: crypto.randomUUID(), name: 'Tradicional' },
                { id: crypto.randomUUID(), name: 'Com leite' }
            ],
            description: 'Expresso com bastante leite vaporizado e um toque de espuma',
            price: 10.50
        },
        {
            id: crypto.randomUUID(),
            image: Mocaccino,
            name: 'Macchiato',
            categories: [
                { id: crypto.randomUUID(), name: 'Tradicional' },
                { id: crypto.randomUUID(), name: 'Com leite' }
            ],
            description: 'Expresso marcado com uma leve camada de espuma de leite',
            price: 8.90
        },
    ];

    return (
        <Container>
            <Title>Nossos cafés</Title>
            <CoffeesContainer>
                {
                    coffees.map(coffee =>
                        <Coffee
                            key={coffee.id}
                            image={coffee.image}
                            name={coffee.name}
                            categories={coffee.categories}
                            description={coffee.description}
                            price={coffee.price}
                        />)
                }
            </CoffeesContainer>
        </Container>
    )
}