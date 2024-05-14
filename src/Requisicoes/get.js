class Get{
    setDados;

    constructor(setDados){
        this.setDados = setDados;
    }

    async metodoFetch(){
        const response = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=iphone");
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