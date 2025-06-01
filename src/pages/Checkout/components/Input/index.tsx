import { Container, OptionalLabel, StyledInput } from "./styles";

interface InputProps {
    size: 'XS' | 'S' | 'M' | 'L',
    placeholder: string,
    optional?: boolean
}

export function Input({ size, placeholder, optional }: InputProps) {
    return (
        <Container>
            <StyledInput size={size} placeholder={placeholder} optional={optional} />
            {optional && <OptionalLabel>Opcional</OptionalLabel>}
        </Container>

    )
}