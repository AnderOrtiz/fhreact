import type { GifphyRandomResponse } from "../data/Giphi.data";

const API_KEY = 'PiaqfidnwvfWdjkl4BQ7DBGxuigxVGg6';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url:string) => {
    const imgElement = document.createElement('img');
        imgElement.src = url;

        document.body.append(imgElement);
}


myRequest
    .then((response) => response.json())
    .then(({data}:GifphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl)
    })
    .catch((err) => {
        console.error(err);
    })