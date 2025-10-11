import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import GifLIst from "./gifs/components/GifList"
import PreviousSearches from "./gifs/components/PreviousSearches"
import type { Gif } from "./gifs/interfaces/gif.interface"
import CustomHeader from "./shared/components/CustomHeades"
import SearchBar from "./shared/components/SearchBar"
import { useState } from 'react';

const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([])

    const [gifs, setGifs] = useState<Gif[]>([])


    const handelTermClicked = (term: string) => {
        console.log({ term });
    }


    const handelSearch = async (query: string = '') => {
        query = query.trim().toLocaleLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);

        console.log(gifs);


        setGifs(gifs)
    };




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
