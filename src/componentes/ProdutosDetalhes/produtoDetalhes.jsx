"use client"
import { useContext, useState } from "react";
import "./style.css";
import Botao from "@/componentes/Botao/botao";
import AppContext from "@/context/AppContext";

export default function ProdutoDetalhesComponente(props) {

    const { carrinho, setCarrinho } = useContext(AppContext);
    const [verDetalhes,setVerDetalhes] = useState(false)
    const data = props.data;

    const adicionarCarrinho = () => {
        setCarrinho([...carrinho, data]);
    };


    return (
        <div className="flexCard2">
            {data ?(
                <div className="flexCardID" key={data.id}>
                    <div className="flexImagem">
                        <img src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="" />
                    </div>
                    <div className="flexDescricao2">
                        <h1>{data.title.replace("- Distribuidor Autorizado", "")}</h1>
                         <p className="price">{data.price.toLocaleString("pt-br",{
                            style: "currency",
                            currency: "BRL"
                        })}</p>
                        <div className="flexBotaoCardDetalhes">
                            <Botao
                                 classUnica = "botaoUnicoAdicionarCarrinho"
                                 text = "Adicionar Carrinho"
                                 style="btn btn-outline-dark"
                                 rota={`/pages/carrinho`}
                                 onClick={adicionarCarrinho}
                                 />
                            <Botao
                                 classUnica = "botaoUnicoVerDetalhes"
                                 text = "Ver Descrição"
                                 style="btn btn-outline-dark"
                                 rota={``}
                                 onClick={()=> setVerDetalhes(!verDetalhes)}
                                 />
                        </div>
                       
                    </div>
                </div>
            ) : null}
            <div className="flexTableDescricao">
                {verDetalhes ?
                <table  className="table tableDescricao ">
                    {data.attributes.map((attributes)=>(
                        <>
                            <thead>
                            <tr className="flexTableBody">
                                <th scope="col">{attributes.name}</th>
                                <td>{attributes.value_name}</td>
                            </tr>
                            </thead>
                        </>
                    ))}
                </table>
                    : null}
            </div>
           
        </div>
    );
}
