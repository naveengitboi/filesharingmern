import Stage from "./Stage";
import StartButton from "./StartButton";
import Display from "./Display";

import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/userStage";

import { createStage, checkCollision } from "../gameHelper";
import {
  StyledTetris,
  StyledTetrisWrapper,
} from "../StyledComponents/TetrisStyles";
import { useState } from "react";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const movePlayer = (dir) => {
    if(!checkCollision(player, stage, {x:dir, y:0})){
        updatePlayerPos({x: dir, y:0, });
    }

  };    

  const startGame = () => {

    setStage(createStage())
    resetPlayer()
    setGameOver(false)
  };

  const drop = () => {
   if(!checkCollision(player, stage, {x:0, y:1})){
       updatePlayerPos({ x: 0, y: 1, collided: false });
   }else{

    if(player.pos.y < 1){
        console.log("GAME OVER")

        setGameOver(true)
        setDropTime(null)
    }

    updatePlayerPos({x:0, y:0, collided:true})
   }
  };

  const dropPlayer = () => {
    drop();
  };
  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode == 37) {
        movePlayer(-1);
      } else if (keyCode == 39) {
        movePlayer(1);
      } else if (keyCode == 40) {
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex={"0"}
      onKeyDown={(e) => move(e)}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display text={"GameOver"} />
          ) : (
            <div>
              <Display text={"Score"} />
              <Display text={"Rows"} />
              <Display text={"Level"} />
            </div>
          )}

          <StartButton callBack={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
