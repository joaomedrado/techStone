"use client"
import Get from "@/Requisicoes/get"
import Botao from "@/componentes/Botao/botao";
import { useContext, useEffect, useState } from "react"
import "./style.css"
import Loading from "@/componentes/Loading/loading";
import BarraPesquisa from "@/componentes/BarraPesquisa/barraPesquisa";
import AppContext from "@/context/AppContext";

export default function Produtos(){
    const {produtos, setProdutos} = useContext(AppContext)
    const {loading,setLoading} = useContext(AppContext);

    const get = new Get(setProdutos);

    useEffect(()=>{
        get.metodoUseEffect();
        setLoading(false)
    },[])

    return(
        <>
            <div className="flexTituloCards">
                <h1 className="tituloCards">Produtos</h1>
                <BarraPesquisa/>
            </div>
            <div className="flexBody">
                {loading ? <Loading/> : (
                    <div className="flexCards">
                    {produtos.map((data)=>(
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