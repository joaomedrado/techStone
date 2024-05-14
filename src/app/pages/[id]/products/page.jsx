import ProdutoDetalhesComponente from "@/componentes/ProdutosDetalhes/produtoDetalhes";

export default async function ProdutoDetalhes({ params }) {
    const {id} = params

    const getData = async ()=>{
      const response = await fetch(`http://localhost:4000/Produtos/${id}`).then(res => res.json());
      return response;
    }
    const data = await getData();

    return (<ProdutoDetalhesComponente data = {data}/>)
}
