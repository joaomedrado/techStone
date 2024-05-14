"use client"
import Get from "@/Requisicoes/get"
import Botao from "@/componentes/Botao/botao";
import { useEffect, useState } from "react"
import "./style.css"
import Loading from "@/componentes/Loading/loading";

export default function Produtos(){
    const [dados, setDados] =  useState([]);
    const get = new Get(setDados);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        get.metodoUseEffect();
        setLoading(false)
    },[])

    return(
        <>
            <div className="flexTituloCards">
                <h1 className="tituloCards">Produtos</h1>
            </div>
            <div className="flexBody">
                {loading ? <Loading/> : (
                    <div className="flexCards">
                    {dados.map((data)=>(
                        <div className="flexCard" key={data.id}>
                            <img src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="" />
                            <div className="flexDescricao">
                                <div className="flexText">
                                    <h2>{data.title.replace("- Distribuidor Autorizado", "")}</h2>
                                    <p>R$ {data.price}</p>
                                </div>
                                 <Botao
                                 classUnica = "botaoUnico"
                                 text = "Ver Detalhes"
                                 style="btn btn-outline-dark"
                                 rota={`/pages/${data.id}/products/`}
                                 />
                            </div>
                        </div>
                    ))}
                </div>
                )}
                
            </div>
            
        </>
    )
}