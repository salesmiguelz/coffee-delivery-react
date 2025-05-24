import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react"
import logo from "../../assets/logo.svg"
import { HeaderCart, HeaderContainer, HeaderInfo, HeaderLocale, HeaderLocaleIcon, LogoContainer } from "./styles"

export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img src={logo} alt="" />
            </LogoContainer>

            <HeaderInfo>
                <HeaderLocale>
                    <HeaderLocaleIcon size={32} weight="fill" />
                    <p>Juiz de Fora, MG</p>
                </HeaderLocale>

                <HeaderCart>
                    <ShoppingCartIcon size={24} weight="fill" />
                </HeaderCart>
            </HeaderInfo>

        </HeaderContainer>
    )
}