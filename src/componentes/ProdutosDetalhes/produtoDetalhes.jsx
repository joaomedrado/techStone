"use client"
import { useContext } from "react";
import "./style.css";
import Botao from "@/componentes/Botao/botao";
import AppContext from "@/context/AppContext";

export default function ProdutoDetalhesComponente(props) {

    const { carrinho, setCarrinho } = useContext(AppContext);
    const data = props.data;

    const adicionarCarrinho = () => {
        setCarrinho([...carrinho, data]);
    };
    return (
        <div className="flexCard2">
            {data ?(
                <div className="flexCard2" key={data.id}>
                    <div className="flexImagem">
                        <img src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="" />
                    </div>
                    <div className="flexDescricao2">
                        <h1>{data.title.replace("- Distribuidor Autorizado", "")}</h1>
                        <p>{data.description}</p>
                        <p className="price">{data.price.toLocaleString("pt-br",{
                            style: "currency",
                            currency: "BRL"
                        })}</p>
                          <Botao 
                             classUnica = "botaoUnico"
                             text = "Adicionar Carrinho" 
                             style="btn btn-outline-dark" 
                             rota={`/pages/carrinho`} 
                             onClick={adicionarCarrinho}
                             />
                    </div>
                </div>
            ) : null}
        </div>
    );
}
