import Link from "next/link";
import "@/componentes/Botao/style.css"
export default function Botao(props){
    return(
        <>
            <Link onClick={props.onClick} className={`botao ${props.classUnica}  ${props.style}`} href={props.rota}>{props.text}</Link>
        </>
    )
}