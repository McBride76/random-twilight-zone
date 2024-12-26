export default class Episode {
    constructor (
        readonly id: number,
        readonly season: number,
        readonly episode: number,
        readonly title: string,
        readonly description: string,
        readonly imDB: number
    ) {}
}