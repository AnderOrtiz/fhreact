import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";


import { MyAwasomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
    test('should render first name y lastname', () => {

        const { container } = render(<MyAwasomeApp />);
        // screen.debug()

        const h1 = container.querySelector('h1'),
            h3 = container.querySelector('h3')

        expect(h1?.innerHTML).toContain('Ander')
        expect(h3?.innerHTML).toContain('Ortiz')
    });


    test('should render first name y lastname', () => {
        render(<MyAwasomeApp />)
        screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level:1
        // });

        const h1 = screen.getByTestId('first-name-title');

        expect(h1.innerHTML).toContain('Ander');

    });


    test('should match snapshot', () => {
        const { container } = render(<MyAwasomeApp />);
        expect(container).toMatchSnapshot();
    })

    test('should match snapshot', () => {
        render(<MyAwasomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    })
})


/**Se recomineda usar conteiner para manipulaciónes iniciales sin evento
 * pero es recomendable adaptarse a usar screen
 * 
 */