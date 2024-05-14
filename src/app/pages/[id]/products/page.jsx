import ProdutoDetalhesComponente from "@/componentes/ProdutosDetalhes/produtoDetalhes";

export default async function ProdutoDetalhes({ params }) {
    const {id} = params

    const getData = async ()=>{
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=iphone`).then(res => res.json());
      return response.results.find((item) => item.id === id);
    }
    const data = await getData();
    return (
      <>
        {data ? <ProdutoDetalhesComponente data = {data}/> : "Produto Não encontrado"}
      </>
  
  )
}
