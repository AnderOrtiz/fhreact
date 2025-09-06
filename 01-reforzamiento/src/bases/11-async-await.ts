import type { GifphyRandomResponse } from "../data/Giphi.data";

const API_KEY = 'PiaqfidnwvfWdjkl4BQ7DBGxuigxVGg6';

const createImageInsideDOM = (url:string) => {
    const imgElement = document.createElement('img');
        imgElement.src = url;

        document.body.append(imgElement);
}

const getRandomGifUrl = async(): Promise<string> => {
    const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const {data}:GifphyRandomResponse = await response.json();
    return data.images.original.url;
};

getRandomGifUrl().then(createImageInsideDOM);