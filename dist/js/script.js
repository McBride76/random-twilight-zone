import { episodes } from "./episodes.js";
const displayCard = {
    title: document.querySelector('#card .title'),
    episode: document.querySelector('#card .episode'),
    description: document.querySelector('#card .description'),
    imdb: document.querySelector('#card .imdb')
};
const fetchRandomEpisode = () => {
    let randomNum = Math.floor(Math.random() * episodes.length);
    return episodes[randomNum];
};
const filterEpisodesBySeason = (season) => {
    return episodes.filter((episode) => episode.season === season);
};
document.addEventListener('DOMContentLoaded', () => {
    let episode = fetchRandomEpisode();
    displayCard.title.textContent = episode.title;
    displayCard.description.textContent = episode.description;
    displayCard.imdb.textContent = episode.imDB.toString() + ' / 10';
    displayCard.episode.textContent = `Season ${episode.season.toString()} Episode ${episode.episode.toString()}`;
});
