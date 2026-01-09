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
        handleSubtract: handleSubtractMock,
        handleReset: handleResetMock,
    }),
}));

describe('MyCounterApp', () => {

    test('should render the component', async () => {
        render(<MycounterApp />)

        const heading = await screen.findByRole('heading', { level: 1 })
        expect(heading).toHaveTextContent('counter: 40')


        expect(await screen.findByRole('button', { name: '+1' })).toBeInTheDocument()
        expect(await screen.findByRole('button', { name: '-1' })).toBeInTheDocument()
        expect(await screen.findByRole('button', { name: 'Reset' })).toBeInTheDocument()
    })

    test('should call handleAdd if button is clicked', async () => {
        render(<MycounterApp />)

        const button = await screen.findByRole('button', { name: '+1' })
        fireEvent.click(button)

        expect(handleAddMock).toHaveBeenCalledTimes(1)
        expect(handleSubtractMock).not.toHaveBeenCalled()
        expect(handleResetMock).not.toHaveBeenCalled()
    })

})
