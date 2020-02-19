import React from "react";
import {observer} from "mobx-react";
import {boardStore} from "../../stores/BoardStore";
import {gameService} from "../../services/game-service";

import "./GamePanel.scss";

@observer
export class GamePanel extends React.Component<{}> {
  render() {
    return (
      <div>
        <div className="GamePanel">Turns: {boardStore.turns}</div>
        <button className="GamePanel-Button" onClick={gameService.startNewGame}>
          NEW GAME
        </button>

        {boardStore.isGameOver
          ? <div className="GamePanel-Winner">Winner is: {boardStore.winner ? <span>React</span> : <span>Angular</span>} </div>
          : null}
      </div>
    );
  }
}
