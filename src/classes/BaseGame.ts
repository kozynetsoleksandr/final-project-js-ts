export class BaseGame {
    private _title: string;
    private _minMaxPlayers: number[] = [];
    private _age: number = 0;
    private _rating: number[] = [];
    private _genre: string[] = [];

    constructor(title: string) {
        this._title = title;
    }

    public get Title(): string {
        return this._title;
    }

    public set Title(value: string) {
        if (value.trim().length === 0) {
            throw new Error("Title cannot be empty");
        }
        this._title = value;
    }

    public get Age(): number {
        return this._age;
    }

    public set Age(value: number) {
        if (value < 0) {
            throw new Error("Age must be positive");
        }
        this._age = value;
    }

    public get MinMaxPlayers(): number[] {
        return this._minMaxPlayers;
    }

    public set MinMaxPlayers(players: number[]) {
        if (players.length !== 2) {
            throw new Error("minMaxPlayers must have [min, max]");
        }
        this._minMaxPlayers = players;
    }

    public get Rating(): number[] {
        return this._rating;
    }

    public get Genre(): string[] {
        return this._genre;
    }

    public getFullInfo(): string {
        return `
            Title: ${this._title}
            Age: ${this._age}
            Players: ${this._minMaxPlayers.join(" - ")}
            Genres: ${this._genre.join(", ")}
            Average Rating: ${this.countRating()}
        `;
    }

    public setMyRating(value: number): void {
        this._rating.push(value);
    }

    public fillData(players: number[], age: number, genres: string[]): void {
        this._minMaxPlayers = players;
        this._age = age;
        this._genre = genres;
    }

    public addGenre(value: string): void {
        this._genre.push(value);
    }

    public countRating(): number {
        if (this._rating.length === 0) return 0;
        return this._rating.reduce((a, b) => a + b, 0) / this._rating.length;
    }
}
