// shortcut rafc

interface Props {
    className: string;
    title: string;
    ulClassName: string;
    searches:string[];

    onLabelClicked: (term:string) => void;
}


const PreviousSearches = ({ className, title, ulClassName, searches, onLabelClicked }: Props) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <ul className={ulClassName}>
                {searches.map(term => (
                    <li key={term} onClick={() => onLabelClicked(term)}>
                        {term}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PreviousSearches
