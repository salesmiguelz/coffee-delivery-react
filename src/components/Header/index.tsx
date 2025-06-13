import { ShoppingCartIcon } from "@phosphor-icons/react"
import logo from "../../assets/logo.svg"
import { HeaderCart, HeaderContainer, HeaderInfo, HeaderLocale, HeaderLocaleIcon, LogoContainer } from "./styles"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"

export function Header() {
    const { cartLength } = useContext(CartContext)

    return (
        <HeaderContainer>
            <Link to="/" style={{
                all: "unset",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "12px",
                justifyContent: "center",
            }}>
                <LogoContainer>
                    <img src={logo} alt="" />
                </LogoContainer>
            </Link>


            <HeaderInfo>
                <HeaderLocale>
                    <HeaderLocaleIcon size={36} weight="fill" />
                    <p>Juiz de Fora, MG</p>
                </HeaderLocale>

                <HeaderCart>
                    <Link to="/checkout" style={{
                        all: "unset",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        padding: "12px",
                        justifyContent: "center",
                    }}>
                        <span>
                            {cartLength}
                        </span>
                        <ShoppingCartIcon size={24} weight="fill" />
                    </Link>
                </HeaderCart>
            </HeaderInfo>

        </HeaderContainer >
    )
}