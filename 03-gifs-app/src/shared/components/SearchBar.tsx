// shortcut rafc

interface Props {
    className: string;
    inputType?: string;
    placeHolder: string;
    btnDescription: string;
}


const SearchBar = ({ className, inputType, placeHolder = 'Buscar', btnDescription }: Props) => {
    return (
        <div className={className}>
            <input type={inputType = 'text'} placeholder={placeHolder} />
            <button>{btnDescription}</button>
        </div>
    )
}

export default SearchBar
