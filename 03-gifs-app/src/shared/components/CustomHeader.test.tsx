import { render, screen } from "@testing-library/react";
import CustomHeader from "./CustomHeader";
import { expect, test, describe } from "vitest";


describe('CustomHeader', () => {

    const title = 'Test title'

    test('should render the title correctly', () => {
        render(<CustomHeader title={title} />)

        expect(screen.getByText(title)).toBeDefined();
    });

    test('should render the description when provided', () => {
        const description = 'sisoy'
        render(<CustomHeader title={title} description={description} />)

        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    })

    test('should not render description when is not provided', () => {
        const { container } = render(<CustomHeader title={title} />)

        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1')

        expect(h1?.innerHTML).toBe(title)

        const p = divElement?.querySelector('p')
        expect(p).toBeNull();
    })


})