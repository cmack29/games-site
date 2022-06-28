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
        <div className="home-styling">
            <ul className="grid-container">
            <li>{<button className="tictactoeButton home-button" onClick={ticTacToe}>Tic Tac Toe</button>}</li>
            <li><button className="home-button">Lorum Ipsum</button></li>
            <li><button className="home-button">Lorum Ipsum</button></li>
            <li><button className="home-button">Lorum Ipsum</button></li>
            </ul>
        </div>
        </>
    )
}