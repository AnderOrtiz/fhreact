import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi, afterEach } from "vitest";
import { FirstStepsApp } from './FirstStepsApp';


const mockItemCounter = vi.fn((props: unknown) => {
    return (<div data-testid="ItemCounter" />)
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (porps: unknown) => mockItemCounter(porps),
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: () => <div data-testid="ItemCounter" />,
// }));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) =>
//         <div
//             data-testid="ItemCounter"
//             name={props.name}
//             quantity={props.quantity}
//         />,
// }));

describe('FirstStepApp', () => {

    afterEach(() => {
        vi.clearAllMocks()
    })


    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);

        expect(container).toMatchSnapshot();
    })

    test('should render the corret number of Itemcounter componets', () => {
        render(<FirstStepsApp />)
        const itemcounters = screen.getAllByTestId('ItemCounter');

        // console.log(itemcounters.length);

        expect(itemcounters.length).toBe(3);
        // screen.debug();
    })

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2',
            quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro Controller',
            quantity: 3
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Smash',
            quantity: 4
        });
    })
})

