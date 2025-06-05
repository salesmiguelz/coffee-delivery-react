import { forwardRef, type HTMLInputTypeAttribute } from "react";
import { Container, ErrorContainer, OptionalLabel, StyledInput } from "./styles";

interface InputProps {
    size: 'XS' | 'S' | 'M' | 'L',
    placeholder: string,
    optional?: boolean,
    errors?: string,
    type?: HTMLInputTypeAttribute
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ size, placeholder, optional, errors, type, ...rest }, ref) => {
        return (
            <Container>
                <StyledInput
                    size={size}
                    placeholder={placeholder}
                    $optional={optional}
                    type={type ?? 'text'}
                    ref={ref}
                    {...rest}
                />
                {optional && <OptionalLabel>Opcional</OptionalLabel>}
                <ErrorContainer
                    $errors={errors}
                >
                    <span>
                        {errors}
                    </span>
                </ErrorContainer>
            </Container>
        );
    }
);