"use client"

import { useContext, useEffect, useState } from "react"
import "./style.css"
import AppContext from "@/context/AppContext";
import Get from "@/Requisicoes/get";
import { CiSearch } from "react-icons/ci";

export default function BarraPesquisa(){
    const {buscarProdutos, setBuscarProdutos} = useContext(AppContext)
    const {setProdutos} =  useContext(AppContext);
    const {setLoading} = useContext(AppContext);
 
    
    const metodoBuscarProdutos = (ev)=>{
        ev.preventDefault();
        const produtosRequisicao = new Get(setProdutos, buscarProdutos);
        produtosRequisicao.metodoUseEffect()
        setLoading(false)
    }

    return(
        <>
            <form action="" onSubmit={metodoBuscarProdutos}>
                <input type="search"
                value={buscarProdutos}
                placeholder="Buscar Produtos"
                className="barraProdutos"
                onChange={(ev)=> setBuscarProdutos(ev.target.value)}
                required
                
                />
                <button type="submmit">
                    <CiSearch />
                </button>
            </form>

        </>
    )
}