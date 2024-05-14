"use client"
import AppContext from "../../../context/AppContext";
import { useContext } from "react";
import "./style.css"
import Botao from "@/componentes/Botao/botao";
export default function Carrinho() {

    const { carrinho, setCarrinho } = useContext(AppContext);


    const metodoExcluirProduto = (id) => {
        const atualizarItems = carrinho.filter((item) => item.id != id)
        setCarrinho(atualizarItems);
    }

    const valorTotal = carrinho.reduce((acc, item) => item.price + acc, 0);

    return (
        <>
            <div className="flexCarrinho">
                <table className="tabelaCarrinho" class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Produto</th>
                            <th scope="col">Quantidade em Estoque</th>
                            <th scope="col">Preço</th>
                        </tr>
                    </thead>
                    {carrinho.map((data) => (
                        <tbody key={data.id}>
                            <tr>
                                <th scope="row">{data.id}</th>
                                <th scope="col"><span><img className="imagemProdutoTabela" src={data.imageUrl} alt="" />{data.name}</span></th>
                                <th scope="col">{data.inStock}</th>
                                <th scope="col">R$ {data.price}</th>
                                <th scope="col">
                                    <span class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button  type="button" className="btn btn-danger botaoExcluirCarrinho " onClick={() => metodoExcluirProduto(data.id)}>Excluir</button>
                                    </span>
                                </th>
                            </tr>

                        </tbody>

                    ))}
                </table>
                <div className="flexValorTotal">
                    <span className="valorTotal">
                        <button type="button" class="btn btn-outline-dark">Realizar Compra</button>
                        <button type="button" class="btn btn-success" disabled>R$ {valorTotal}</button>
                    </span>

                </div>
            </div>

        </>
    );
}
