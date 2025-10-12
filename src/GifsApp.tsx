import GifLIst from "./gifs/components/GifList"
import PreviousSearches from "./gifs/components/PreviousSearches"
import useGifs from "./gifs/hooks/useGifs"
import CustomHeader from "./shared/components/CustomHeades"
import SearchBar from "./shared/components/SearchBar"

const GifsApp = () => {

    const {previousTerms, gifs, handelTermClicked, handelSearch} = useGifs()

    return (
        <>
            {/* CustomHeader */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el Gif perfecto"
            />

            {/* search */}
            {/* SearchBar */}
            <SearchBar
                className={"search-container"}
                placeHolder={"Buscar gifs"}
                btnDescription={"Buscar"}
                onQuery={handelSearch}
            />

            {/* Búsquedas previas */}
            {/* PreviousSearches */}

            <PreviousSearches
                className={"previous-searches"}
                title={"Búsquedas previas"}
                ulClassName={"previous-searches-list"}
                searches={previousTerms}
                onLabelClicked={handelTermClicked}
            />

            {/* Gifs */}

            <GifLIst gifs={gifs} />

        </>
    )
}

export default GifsApp