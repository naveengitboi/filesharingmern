
import Cell from "./Cell";

const Stage = ({stage}) => {
    console.log(stage())
    return(
        <div>
            {
                stage().map((row) => {
                    return row.map((cell, idx) => {
                        return(
                            <Cell key={idx} type={cell[0]} />
                        )
                    })
                })
            }
        </div>
    )
}


export default Stage