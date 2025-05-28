import type { Icon } from "@phosphor-icons/react"
import { Container, IconContainer } from "./styles"
import type { defaultTheme } from "../../../../styles/themes/default"

interface IconProps {
    Icon: Icon,
    color: keyof typeof defaultTheme,
    text: string,
}

export function Icon({ Icon, color, text }: IconProps) {
    return (
        <Container>
            <IconContainer color={color}>
                <Icon weight="fill" size={16} color="white" />
            </IconContainer>
            <p>{text}</p>
        </Container>
    )
}