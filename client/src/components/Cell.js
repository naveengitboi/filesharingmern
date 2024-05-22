

import { StyledCell } from "../StyledComponents/CellStyled"

import { TETROMINOS } from "../tetrominos"

const Cell = ({type}) => {
    return(
        <StyledCell type={type} color={TETROMINOS[type].color}>
        </StyledCell>
    ) 
}

export default Cell;