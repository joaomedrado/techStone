"use client"

import { useState } from "react";
import AppContext from "./AppContext";

export default function Provider({children}){

    const [carrinho, setCarrinho] = useState([]);
    const value = {
        carrinho,
        setCarrinho
    }
    return(
        <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
    )
}