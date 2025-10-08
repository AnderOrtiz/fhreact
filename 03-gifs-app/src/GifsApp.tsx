import GifLIst from "./gifs/components/GifList"
import PreviousSearches from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import CustomHeader from "./shared/components/CustomHeades"
import SearchBar from "./shared/components/SearchBar"

const GifsApp = () => {
    return (
        <>
            {/* CustomHeader */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            {/* search */}
            {/* SearchBar */}
            <SearchBar className={"search-container"} placeHolder={"Buscar gifs"} btnDescription={"Buscar"} />

            {/* Búsquedas previas */}
            {/* PreviousSearches */}

            <PreviousSearches className={"previous-searches"} title={"Búsquedas previas"} ulClassName={"previous-searches-list"} searches={['Goku', 'Natsu', 'Ichigo', 'Spike']} />

            {/* Gifs */}

            <GifLIst gifs={mockGifs}/>


            {/* <div className="gifs-container">
                {mockGifs.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width}x{gif.height} (1.5mb)
                        </p>

                    </div>
                ))

                }
            </div> */}




        </>
    )
}

export default GifsApp
