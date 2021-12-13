import Link from "next/link"

export default function Header({ titulo }) 
{
    titulo = titulo ? titulo : "Ninguém passou título"
    
    return <div>
        <ul>
            <li>
                <Link href="/">
                    <a >Home</a>
                </Link> 
                
            </li>
            <li>
            <Link href="/cronograma">
                    <a >Cronograma</a>
                </Link>
            </li>
        </ul>
        <h1>{ titulo } (header aqui)</h1>
    </div> 
}