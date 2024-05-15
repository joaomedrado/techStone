class Get{
    setDados;
    query;

    constructor(setDados,query){
        this.setDados = setDados;
        this.query = query
    }

    async metodoFetch(){
        const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${this.query}`);
        const data = await response.json();
        return data.results;
    }
    metodoUseEffect(){
        this.metodoFetch().then((data)=>{
            this.setDados(data);
        })
    }
  
}
export default Get;