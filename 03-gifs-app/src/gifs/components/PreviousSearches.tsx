// shortcut rafc

interface Props {
    className: string;
    title: string;
    ulClassName: string;
    searches:string[];
}


const PreviousSearches = ({ className, title, ulClassName, searches }: Props) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <ul className={ulClassName}>
                {searches.map(term => (
                    <li key={term}>{term}</li>
                ))}
            </ul>
        </div>
    )
}

export default PreviousSearches
