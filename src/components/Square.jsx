import React from "react"


function Square (props){
    console.log(props.squares, props.player)
    return (
        <div className="square"></div>
    )
}

export default Square