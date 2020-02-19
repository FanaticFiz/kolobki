import {computed, observable} from "mobx";
import {gameService} from "../services/game-service";

export class BoardStore {

  @observable
  board: boolean[][];

  @observable
  turns: number;

  @computed
  get isGameOver(): boolean {
    let flattedBoard = this.board.reduce(function(a, b) {
      return a.concat(b);
    });

    return !flattedBoard.some(function (b) {
      return b !== flattedBoard[0]
    });
  }

  @computed
  get winner(): boolean | null {
    return this.board[0][0];
  }

  private static _instance: BoardStore;

  private constructor() {
    this.board = gameService.generateRandomField();
    this.turns = 0;
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

}

export const boardStore = BoardStore.instance;
