import { ItemCounter } from "./shopping-cart/ItemCounter"

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 3 },
    { productName: 'Super Smash', quantity: 4 },
]


export const FirstStepsApp = () => {
    return (
        <>
            <h1>Carrito de compras</h1>

        {itemsInCart.map(({productName, quantity}) => (
            <ItemCounter key={productName} name={productName} quantity={quantity} />
        ))}


            {/* <ItemCounter name='Pro controller' quantity={2} />
            <ItemCounter name='Nintendo Switch' quantity={4} />
            <ItemCounter name='8 bit-do' quantity={7} /> */}
        </>
    )
}