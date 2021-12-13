import React from "react"
import Header from "../components/Header"

export default function HomePage() {
    const palestrantes = ["P1", "B2", "Mario"]
    const [gosteis, setGosteis] = React.useState(0)

    function handleClick() {
        console.log("aqui foi clicado...")
        setGosteis(gosteis + 1)
    }
    
    return <div>
        <Header titulo="Aqui é brabo"/>
        <ul>
            { palestrantes.map((nome) => <li key={nome}>{nome}</li>) }
        </ul>

        <button onClick={handleClick}>Gostei ({gosteis} gosteis)</button>
    </div>
}

