import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from '@phosphor-icons/react'
import banner from '../../../../assets/banner.svg'
import { Container, Icons, ImageContainer, TextContainer, Title, Description, Subtitle } from './styles'
import { Icon } from '../Icon'

export function Banner() {
    return (
        <Container>
            <TextContainer>
                <Description>
                    <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                    <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>
                </Description>

                <Icons>
                    <Icon Icon={ShoppingCartIcon} color={'yellow-dark'} text={'Compra simples e segura'} />
                    <Icon Icon={PackageIcon} color={'base-text'} text={'Embalagem mantém o café intacto'} />
                    <Icon Icon={TimerIcon} color={'yellow'} text={'Entrega rápida e rastreada'} />
                    <Icon Icon={CoffeeIcon} color={'purple'} text={'O café chega fresquinho até você'} />
                </Icons>
            </TextContainer>
            <ImageContainer>
                <img src={banner} alt="" />
            </ImageContainer>
        </Container>
    )
}