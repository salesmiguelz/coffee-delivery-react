import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Container, Value } from "./styles";

export function Counter() {
    return (
        <Container>
            <MinusIcon color={'#8047F8'} />
            <Value> 1 </Value>
            <PlusIcon color={'#8047F8'} />
        </Container >
    )
}