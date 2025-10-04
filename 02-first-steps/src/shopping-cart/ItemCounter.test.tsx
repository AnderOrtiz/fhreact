import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {

    const name = 'Pro controller';
    let quantity = 10;

    test('should render with default values', () => {
        render(<ItemCounter name={name} />)

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();

    });

    test('should render with custom quantity', () => {
        render(<ItemCounter name={name} quantity={quantity} />)

        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name={name} quantity={1} />)

        const [, buttonAdd] = screen.getAllByRole('button')

        fireEvent.click(buttonAdd);

        console.log(buttonAdd.innerHTML);
        expect(screen.getByText('2')).toBeDefined();
    });


    test('should decrease count when -1 button is pressed', () => {
        quantity = 5;
        render(<ItemCounter name={name} quantity={quantity} />)

        const [buttonSubtract,] = screen.getAllByRole('button')

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrease count when -1 button is pressed and quantity is 1', () => {
        quantity = 1;
        render(<ItemCounter name={name} quantity={quantity} />)

        const [buttonSubtract,] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);


        expect(screen.getByText('1')).toBeDefined();

    });

    test('should change to red when couter is 1', () => {
        const quantity = 1,
            name = 'Test item';
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemtext = screen.getByText(name);

        //console.log(itemtext.style.color);
        expect(itemtext.style.color).toBe('red');
    });

    test('should be black when couter is greater than 1', () => {
        const quantity = 2,
            name = 'Test item';
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemtext = screen.getByText(name);

        //console.log(itemtext.style.color);
        expect(itemtext.style.color).toBe('black');
    });

});