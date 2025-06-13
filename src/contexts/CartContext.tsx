import { createContext, useEffect, useState, type ReactNode } from "react"
import { coffeesList } from "../pages/Home/components/Coffees"

interface Product {
    id: string,
    image: string,
    name: string,
    quantity: number,
    price: number
}

interface CartContextType {
    cart: Product[],
    cartLength: number,
    addProductToCart: (id: string, quantity: number) => void,
    removeProductFromCart: (id: string) => void,
    increaseProductQuantityFromCart: (id: string) => void,
    decreaseProductQuantityFromCart: (id: string) => void,
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<Product[]>([]);
    const [cartLength, setCartLength] = useState(0);



    function addProductToCart(addedProductId: string, addedProductQuantity: number) {
        const coffee = coffeesList.find(coffee => coffee.id === addedProductId);
        if (coffee) {
            setCart(cart => {
                const productAlreadyOnCart = cart.find(product => product.id === addedProductId);

                if (productAlreadyOnCart) {
                    return cart.map(product => product.id === addedProductId ? { ...product, quantity: addedProductQuantity } : product
                    );
                } else {
                    return [
                        ...cart,
                        {
                            id: addedProductId,
                            image: coffee.image,
                            name: coffee.name,
                            price: coffee.price,
                            quantity: addedProductQuantity
                        }
                    ];
                }
            });
        }
    }

    function removeProductFromCart(id: string) {
        setCart(cart => {
            return cart.filter(product => product.id !== id)
        })
    }

    function increaseProductQuantityFromCart(id: string) {
        setCart(cart => {
            return cart.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })
        })
    }

    function decreaseProductQuantityFromCart(id: string) {
        setCart(cart => {
            return cart.map(product => {
                if (product.id === id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                } else {
                    return product;
                }
            })
        })
    }

    useEffect(() => {
        const totalCartQuantity = cart.reduce((sum, product) => sum + product.quantity, 0)
        setCartLength(totalCartQuantity)
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, cartLength, addProductToCart, removeProductFromCart, increaseProductQuantityFromCart, decreaseProductQuantityFromCart }}>
            {children}
        </CartContext.Provider>
    )
}
