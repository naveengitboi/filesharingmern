

import { StyledCell } from "../StyledComponents/CellStyled"

import { TETROMINOS } from "../tetrominos"

const Cell = ({type}) => {
    return(
        <StyledCell type={'L'} color={TETROMINOS[type].color}>
            Cell
        </StyledCell>
    )
}

export default Cell