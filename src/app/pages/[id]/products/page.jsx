import ProdutoDetalhesComponente from "@/componentes/ProdutosDetalhes/produtoDetalhes";
import Get from "@/Requisicoes/get"
export default async function ProdutoDetalhes({ params }) {
    const {id} = params
    
    const obtGetReque = new Get();

    const getData = async (query)=>{
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`).then(res => res.json());
      return response.results.find((item) => item.id === id);
    }
    const data = await getData(obtGetReque.query);
    return (
      <>
        {data ? <ProdutoDetalhesComponente data = {data}/> : "Produto Não encontrado"}
      </>
  
  )
}
