import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Container, Value } from "./styles";

interface CounterProps {
    value: number;
    onIncrease: () => void,
    onDecrease: () => void
}

export function Counter({ value, onIncrease, onDecrease }: CounterProps) {
    return (
        <Container>
            <MinusIcon color={'#8047F8'} onClick={onDecrease} cursor={"pointer"} size={14} weight="bold" onMouseDown={(e) => e.preventDefault()} />
            <Value> {value} </Value>
            <PlusIcon color={'#8047F8'} onClick={onIncrease} cursor={"pointer"} size={14} weight="bold" onMouseDown={(e) => e.preventDefault()} />
        </Container >
    )
}