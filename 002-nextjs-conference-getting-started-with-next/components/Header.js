import Link from "next/link"
import styles from "./Header.module.css"

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
        <h1 className={ styles.title }>{ titulo } (header aqui)</h1>
    </div> 
}