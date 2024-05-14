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
            {data ? (
                <div className="flexCard2" key={data.id}>
                    <div className="flexImagem">
                        <img src={data.imageUrl} alt="" />
                    </div>
                    <div className="flexDescricao2">
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                        <p className="price">R$ {data.price}</p>
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
