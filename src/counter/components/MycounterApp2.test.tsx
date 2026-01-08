import { screen, render, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest"
import MycounterApp from "./MycounterApp";

const handleAddMock = vi.fn()
const handleSubtractMock = vi.fn()
const handleResetMock = vi.fn()


vi.mock('../hooks/useCounter', () => ({
    default: () => ({
        counter: 40,
        handleAdd: handleAddMock,
        handleSubtract: handleResetMock,
        handleReset: handleSubtractMock,
        // El fn sirver para ver información de la ejecución
    }),
}));

describe('MyCounterApp', () => {
    test('should render the componenet', () => {
        render(<MycounterApp />)
        // screen.debug();

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(`counter: 40`)

        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    })

    test('should call handleAdd if button is clicked', () => {
        render(<MycounterApp />)
        const button = screen.getByRole('button', { name: '+1' })
        fireEvent.click(button);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleAddMock).toHaveBeenCalledTimes(1);
        expect(handleSubtractMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
    })

});
