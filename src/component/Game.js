import React from "react"
import Board from "../component/Board"
class Game extends React.Component{
    render(){
        return (
            //Board
            //Row
            //Square
            <div>
                <div>Tick Tock Toe</div>
                <Board></Board>
                <div>Game Info</div>
            </div>
        );
    }
}

export default Game;