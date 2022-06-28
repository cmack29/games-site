import { useNavigate } from "react-router"
import "../App.css"

export default function Home() {

    const navigate = useNavigate()

    function ticTacToe() {
        navigate("/tictactoe")
    }

    return(
        <>
        <h1>Hello</h1>
        <div>
        {<button className="tictactoeButton" onClick={ticTacToe}>Tic Tac Toe</button>}
        </div>
        </>
    )
}