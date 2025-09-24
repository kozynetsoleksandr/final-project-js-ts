import { BaseGame } from "./BaseGame";

export class Expansion extends BaseGame {
    private _content: string;
    private _baseGame: BaseGame;

    constructor(title: string, baseGame: BaseGame, content: string) {
        super(title);
        this._baseGame = baseGame;
        this._content = content;
    }

    public get Content(): string {
        return this._content;
    }

    public set Content(value: string) {
        this._content = value;
    }

    public getBaseGameName(): string {
        return this._baseGame.Title;
    }
}
