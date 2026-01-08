import { useState } from 'react'

const useCounter = (initialValue: number = 10) => {
    const [counter, setCounter] = useState(initialValue),

        handleAdd = () => {
            setCounter(counter + 1);
        },

        handleSubtract = () => {
            setCounter((prevState) => prevState - 1)
        },

        handleReset = () => {
            setCounter(initialValue)
        }


    return {
        // values
        counter,
        // Methods / Actions
        handleAdd,
        handleSubtract,
        handleReset,
    }
}

export default useCounter