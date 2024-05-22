import { useState, useEffect } from "react";
import { createStage } from "../gameHelper";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage) => {
      const newStage = prevStage.map((row) => {
        return row.map((cell) => {
          return cell[1] === "clear" ? [0, "clear"] : cell;
        });
      });

      //drawing mino
      player.tetromino.forEach((row, y) => {
        row.forEach((val, x) => {
          if (val !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [val, `${player.collided ? 'merged' : 'clear'}`]
          }
        });
      });

      if(player.collided){
        resetPlayer();
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]); 

  return [stage, setStage];
};
