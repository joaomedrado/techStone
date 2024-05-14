import "@/componentes/Footer/style.css"
import Botao from "../Botao/botao"
export default function Footer(){
    return(
        <>
            <footer className="footer">
                <section className="sessaoOne">
                    <div className="flexBoxSessaoOne">
                        <h1>Conheça nossa Historia</h1>
                        <h2>Conheça nossa história: descubra como chegamos até aqui e o que nos motiva na tecnologia.</h2>
                        <Botao text = "Saiba Mais" style="btn btn-light" rota="/sobre"/>
                    </div>
                </section>
                <section className="sessaoTwo">
                    <div className="flexBoxSessaoTwo">
                        <h1>Entre em contato conosco</h1>
                        <h2>Suporte Confiável: Estamos Aqui para Ajudar! Entre em Contato para Solucionar Qualquer Questão ou Dúvida Técnica.</h2>
                        <Botao text = "Saiba Mais" style="btn btn-light" rota="/suporte"/>
                    </div>
                </section>
            </footer>
        </>
    )
}