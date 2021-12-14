import React from "react"
import Header from "../components/Header"

export async function getStaticProps()
{
    const res = await fetch("https://awesome-conf.vercel.app/api/speakers")
    const palestrantes = await res.json()
    console.log(palestrantes)

    //const palestrantes = ["P1", "B2", "Mario", "Cardoso"]

    return {
        props: { palestrantes },
        revalidate: 3 // segundos
    }
}

export default function HomePage({ palestrantes }) 
{
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

