import React from "react";
import {observer} from "mobx-react";
import {Square} from "./Square/Square";
import {boardStore} from "../../stores/BoardStore";
import {gameService} from "../../services/game-service";

import "./Board.scss";

@observer
export class Board extends React.Component<{}> {

  constructor(props: {}) {
    super(props);

    this.handleTurn = this.handleTurn.bind(this);
  }

  render() {
    return (
      <div className="Board">
        {boardStore.board.map((row, i) => (
          <div className="Board-Row" key={i}>
            {row.map((cell, j) => (<Square i={i} j={j} value={cell} onClick={this.handleTurn} key={j}/>))}
          </div>
        ))}
      </div>
    );
  }

  private handleTurn(i: number, j: number) {
    gameService.move(i, j);
  }

}
