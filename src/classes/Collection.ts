import { BaseGame } from "./BaseGame";
import { Expansion } from "./Expansion";

export class Collection {
    private _collectionName: string;
    private _gameList: (BaseGame | Expansion)[] = [];

    constructor(name: string) {
        this._collectionName = name;
    }

    public get CollectionName(): string {
        return this._collectionName;
    }

    public get GameList(): (BaseGame | Expansion)[] {
        return this._gameList;
    }

    public addItem(item: BaseGame | Expansion): void {
        this._gameList.push(item);
    }

    public isInCollection(item: BaseGame | Expansion): boolean {
        return this._gameList.includes(item);
    }

    public countList(): number {
        return this._gameList.length;
    }

    public countBaseGames(): number {
        return this._gameList.filter(v => v instanceof BaseGame && !(v instanceof Expansion)).length;
    }

    public countExpansions(): number {
        return this._gameList.filter(v => v instanceof Expansion).length;
    }
}
