import Link from "next/link";
import "@/componentes/Header/style.css"
export default function Header(){
    return(

        <>
            <header>
                <Link className="logo" href="/">TechStore</Link>
                <nav>
                    <Link className="linksHeader"  href="/">Home</Link>
                    <Link className="linksHeader"  href="/pages/products">Produtos</Link>
                    <Link className="linksHeader"  href="/pages/carrinho">Carrinho</Link>
                </nav>
            </header>
        </>
    )
}