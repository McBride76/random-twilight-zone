import Episode from "./Episode.js";
import { episodes } from "./episodes.js";

const displayCard = {
  title: <HTMLHeadingElement>document.querySelector('#card .title')!,
  episode: <HTMLParagraphElement>document.querySelector('#card .episode')!,
  description: <HTMLParagraphElement>document.querySelector('#card .description')!,
  imdb: <HTMLParagraphElement>document.querySelector('#card .imdb')!
};



const fetchRandomEpisode = () => {
  let randomNum = Math.floor(Math.random() * episodes.length);
  return episodes[randomNum];
}

const filterEpisodesBySeason = (season: number) => {
  return episodes.filter((episode: Episode) => episode.season === season);
}

document.addEventListener('DOMContentLoaded', () => {
  let episode = fetchRandomEpisode();
  displayCard.title.textContent = episode.title;
  displayCard.description.textContent = episode.description;
  displayCard.imdb.textContent = episode.imDB.toString() + ' / 10';
  displayCard.episode.textContent = `Season ${episode.season.toString()} Episode ${episode.episode.toString()}`;
})