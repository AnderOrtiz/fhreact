import { useRef, useState } from 'react'
import { getGifsByQuery } from '../actions/get-gifs-by-query.action'
import type { Gif } from '../interfaces/gif.interface'

// const gifsCache: Record<string, Gif[]> = {};

const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    const [gifs, setGifs] = useState<Gif[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handelTermClicked = async (term: string) => {

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term])
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    }

    const handelSearch = async (query: string = '') => {
        query = query.trim().toLocaleLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs)

        gifsCache.current[query] = gifs;

        console.log(gifsCache);
    };


    return {
        // Properties
        gifs,
        previousTerms,

        // Method, Actions
        handelTermClicked,
        handelSearch,
    }
}
export default useGifs