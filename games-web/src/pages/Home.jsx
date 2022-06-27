import { useNavigate } from "react-router"

export default function Home() {

    const navigate = useNavigate()

    function ticTacToe() {
        navigate("/tictactoe")
    }

    return(
        <>
        <h1>Hello</h1>
        <div>
        {<button className="" onClick={ticTacToe}>Tic Tac Toe</button>}
        </div>
        </>
    )
}