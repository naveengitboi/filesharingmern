
import Cell from "./Cell";
import { StyledStage } from "../StyledComponents/StageStyles";
const Stage = ({stage}) => {
    return(
        <StyledStage width={stage[0].length}  height={stage.length}>
            {
                stage.map((row) => {
                    return row.map((cell, idx) => {
                        return(
                            <Cell key={idx} type={cell[0]} />
                        )
                    })
                })
            }
        </StyledStage>
    )
}


export default Stage