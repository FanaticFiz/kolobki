import {action} from "mobx";
import {boardStore} from "../stores/BoardStore";

export class GameService {

  private n: number = 4;
  private m: number = 4;

  private static _instance: GameService;

  private constructor() {
    this.startNewGame = this.startNewGame.bind(this);
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  @action
  move(i: number, j: number) {
    boardStore.turns++;
    this.modifyBoard(boardStore.board, i, j);
  }

  @action
  startNewGame() {
    boardStore.turns = 0;
    boardStore.board = this.generateRandomField();
  }

  public generateRandomField(): boolean[][] {
    const newBoard: boolean[][] = new Array(this.n);
    for (let i = 0; i < this.n; i++) {
      newBoard[i] = new Array(this.m);
      for (let j = 0; j < this.m; j++) {
        newBoard[i][j] = Math.random() >= 0.5;
      }
    }

    return newBoard;
  }

  private modifyBoard(board: boolean[][], i: number, j: number) {
    board[i][j] = !board[i][j];
    for (let k = 0; k < this.n; k++) {
      board[k][j] = !board[k][j];
      board[i][k] = !board[i][k];
    }
  }
}

export const gameService = GameService.instance;
