import Episode from "./Episode.js";
import { episodes } from "./episodes.js";

const btnGenerate = <HTMLButtonElement>document.getElementById('generateBtn')!;

btnGenerate.addEventListener('click', () => displayEpisode(fetchRandomEpisode()));

const displayCard = {
  title: <HTMLHeadingElement>document.querySelector('#card .title')!,
  episode: <HTMLParagraphElement>document.querySelector('#card .episode')!,
  description: <HTMLParagraphElement>document.querySelector('#card .description')!,
  imdb: <HTMLParagraphElement>document.querySelector('#card .imdb')!
};

const fetchRandomEpisode = (): Episode => {
  let randomNum = Math.floor(Math.random() * episodes.length);
  return episodes[randomNum];
}

const filterEpisodesBySeason = (season: number): Episode[] => {
  return episodes.filter((episode: Episode) => episode.season === season);
}

const displayEpisode = (episode: Episode) => {
  displayCard.title.textContent = episode.title;
  displayCard.description.textContent = episode.description;
  displayCard.imdb.textContent = episode.imDB.toString() + ' / 10';
  displayCard.episode.textContent = `Season ${episode.season.toString()} Episode ${episode.episode.toString()}`;
}

document.addEventListener('DOMContentLoaded', () => {
  displayEpisode(fetchRandomEpisode());
});