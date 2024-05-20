

import Stage from "./Stage"
import StartButton from "./StartButton"
import Display from "./Display"

import { createStage } from "../gameHelper"

const Tetris = () => {
    return(
        <div>
            Tetries
            <Stage stage={createStage}/>
            <aside>
                <div>
                    <Display text={"Score"} />
                    <Display text={"Rows"} />
                    <Display text={"Level"} />
                </div>

                <StartButton/>

            </aside>
        </div>
    )  
}


export default Tetris