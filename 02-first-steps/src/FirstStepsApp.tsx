import { ItemCounter } from "./shopping-cart/ItemCounter"

export const FirstStepsApp = () => {
    return (
        <>
            <h1>Carrito de compras</h1>
            <ItemCounter name='Pro controller' quantity={2} />
            <ItemCounter name='Nintendo Switch' quantity={4} />
            <ItemCounter name='8 bit-do' quantity={7} />
        </>
    )
}