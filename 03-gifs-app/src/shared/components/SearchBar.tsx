// shortcut rafc

import { useState } from "react";

interface Props {
    className: string;
    inputType?: string;
    placeHolder: string;
    btnDescription: string;

    onQuery: (query: string) => void;
}


const SearchBar = ({ className, inputType, placeHolder = 'Buscar', btnDescription, onQuery }: Props) => {

    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onQuery(query)
        // setQuery('')
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        };
    }

    return (
        <div className={className}>
            <input
                type={inputType = 'text'}
                placeholder={placeHolder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}

                onKeyDown={handleKeyDown}

            />
            <button onClick={handleSearch}>{btnDescription}</button>
        </div>
    )
}

export default SearchBar
