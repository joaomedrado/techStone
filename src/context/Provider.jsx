"use client"

import {useEffect, useState } from "react";
import AppContext from "./AppContext";

export default function Provider({ children }) {

    const [carrinho, setCarrinho] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true)
    const [buscarProdutos, setBuscarProdutos] = useState("");

    useEffect(()=>{
        const carrinhoLocalStorage = JSON.parse(localStorage.getItem("carrinho"));
        if(carrinhoLocalStorage){
            setCarrinho(carrinhoLocalStorage);
        }
    },[])
  

    const value = {
        carrinho,
        setCarrinho,
        produtos,
        setProdutos,
        loading,
        setLoading,
        buscarProdutos,
        setBuscarProdutos
    }
    
   
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}