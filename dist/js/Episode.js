export default class Episode {
    constructor(id, season, episode, title, description, imDB) {
        this.id = id;
        this.season = season;
        this.episode = episode;
        this.title = title;
        this.description = description;
        this.imDB = imDB;
    }
}
