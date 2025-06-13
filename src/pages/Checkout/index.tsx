import { CurrencyDollarIcon, MapPinAreaIcon } from "@phosphor-icons/react";
import { ConfirmOrderButton, Container, DeliveryAddress, DeliveryAddressHeader, DeliveryAddressIcon, DeliveryAddressText, DeliveryForm, FinishOrder, OrderDetails, OrderDetailsContainer, OrderSummary, Payment, PaymentHeader, PaymentIcon, PaymentMethods, PaymentText, SelectedProducts, StyledHr, Subtext, SummaryItem, SummaryTotal, Title } from "./styles";
import { Subtitle } from "../Home/components/Banner/styles";
import { Input } from "./components/Input";
import { PaymentMethod } from "./components/PaymentMethod";
import { SelectedProduct } from "./components/SelectedProduct";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const newOrderFormValidationSchema = z.object({
    zipcode: z.string().min(1, 'Informe o CEP'),
    street: z.string().min(1, 'Insira o nome da rua'),
    number: z.coerce.number({
        required_error: 'Informe o número',
        invalid_type_error: 'O número deve ser um valor numérico',
    }).min(1, 'O número deve ser maior que zero'),
    complement: z.string().optional(),
    neighborhood: z.string().min(1, 'Insira seu bairro'),
    city: z.string().min(1, 'Insira sua cidade'),
    uf: z.string().min(1, 'Insira seu estado').max(2, 'O estado deve conter apenas 2 caracteres'),
    paymentMethod: z.enum(['credit', 'debit', 'cash'])
});

export type NewOrderFormData = z.infer<typeof newOrderFormValidationSchema>;

export function Checkout() {
    const { register, setValue, watch, handleSubmit, formState: { errors } } = useForm<NewOrderFormData>({
        resolver: zodResolver(newOrderFormValidationSchema),
        defaultValues: {
            zipcode: '',
            street: '',
            number: 0,
            complement: '',
            neighborhood: '',
            city: '',
            uf: '',
            paymentMethod: 'credit'
        },

    });

    const selectedPaymentMethod = watch("paymentMethod");
    const { cart } = useContext(CartContext)

    function handleSetSelectedPaymentMethod(type: 'credit' | 'debit' | 'cash') {
        if (type !== selectedPaymentMethod) {
            setValue("paymentMethod", type, {
                shouldValidate: true,
                shouldTouch: true
            });
        }
    }

    function handleNewOrderFormSubmit(data: NewOrderFormData) {
        console.log("data", data);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(handleNewOrderFormSubmit, (errors: any) => {
                console.log("form invalido", errors)
            })}>
                <FinishOrder>
                    <Title>Complete seu pedido</Title>
                    <DeliveryAddress>
                        <DeliveryAddressHeader>
                            <DeliveryAddressIcon>
                                <MapPinAreaIcon size={22} />
                            </DeliveryAddressIcon>
                            <DeliveryAddressText>
                                <Subtitle>Endereço de Entrega </Subtitle>
                                <Subtext>Informe o endereço onde deseja receber seu pedido</Subtext>
                            </DeliveryAddressText>
                        </DeliveryAddressHeader>


                        <DeliveryForm>
                            <Input placeholder='CEP' size='S' {...register('zipcode')} errors={errors?.zipcode?.message} />
                            <Input placeholder='Rua' size='L' {...register('street')} errors={errors?.street?.message} />
                            <Input placeholder='Número' size='S' {...register('number')} errors={errors?.number?.message} type={"number"} />
                            <Input placeholder='Complemento' size='M' optional errors={errors?.complement?.message}{...register('complement')} />
                            <Input placeholder='Bairro' size='S' errors={errors?.neighborhood?.message}{...register('neighborhood')} />
                            <Input placeholder='Cidade' size='S' errors={errors?.city?.message} {...register('city')} />
                            <Input placeholder='UF' size='XS' errors={errors?.uf?.message}{...register('uf')} />
                        </DeliveryForm>
                    </DeliveryAddress>

                    <Payment>
                        <PaymentHeader>
                            <PaymentIcon>
                                <CurrencyDollarIcon size={22} />
                            </PaymentIcon>

                            <PaymentText>
                                <Subtitle>Pagamento </Subtitle>
                                <Subtext>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Subtext>
                            </PaymentText>
                        </PaymentHeader>

                        <PaymentMethods>
                            <PaymentMethod type={'credit'} isSelected={selectedPaymentMethod === 'credit'} handleSetSelectedPaymentMethod={handleSetSelectedPaymentMethod} />
                            <PaymentMethod type={'debit'} isSelected={selectedPaymentMethod === 'debit'} handleSetSelectedPaymentMethod={handleSetSelectedPaymentMethod} />
                            <PaymentMethod type={'cash'} isSelected={selectedPaymentMethod === 'cash'} handleSetSelectedPaymentMethod={handleSetSelectedPaymentMethod} />
                        </PaymentMethods>

                    </Payment>
                </FinishOrder>

                <OrderDetailsContainer>
                    <Title>Cafés selecionados</Title>
                    <OrderDetails>
                        <SelectedProducts>
                            {
                                cart.length > 0
                                    ? cart.map(product => {
                                        return <>
                                            <SelectedProduct
                                                key={product.id}
                                                id={product.id}
                                                image={product.image}
                                                name={product.name}
                                                price={product.price}
                                                quantity={product.quantity}
                                            />
                                            <StyledHr />
                                        </>
                                    })
                                    : <p>Não há produtos no carrinho.</p>
                            }

                            <StyledHr />
                        </SelectedProducts>
                        <OrderSummary>
                            <SummaryItem>
                                <span>Total de itens</span>
                                <span>R$ 29,70</span>
                            </SummaryItem>

                            <SummaryItem>
                                <span>Entrega</span>
                                <span>R$ 3,50</span>
                            </SummaryItem>

                            <SummaryTotal>
                                <span>Total</span>
                                <span>R$ 33,20</span>
                            </SummaryTotal>

                            <ConfirmOrderButton type="submit">CONFIRMAR PEDIDO</ConfirmOrderButton>
                        </OrderSummary>
                    </OrderDetails>
                </OrderDetailsContainer>
            </form>
        </Container>
    )
}