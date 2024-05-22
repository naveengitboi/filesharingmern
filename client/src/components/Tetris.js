

import Stage from "./Stage"
import StartButton from "./StartButton"
import Display from "./Display"

import { createStage } from "../gameHelper"
import { StyledTetris, StyledTetrisWrapper } from "../StyledComponents/TetrisStyles"

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text={"Score"} />
                        <Display text={"Rows"} />
                        <Display text={"Level"} />
                    </div>

                    <StartButton />

                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}


export default Tetris