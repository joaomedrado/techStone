class Get{
    setDados;

    constructor(setDados){
        this.setDados = setDados;
    }

    async metodoFetch(){
        const response = await fetch("http://localhost:4000/Produtos");
        const data = await response.json();
        return data;
    }

    metodoUseEffect(){
        this.metodoFetch().then((data)=>{
            this.setDados(data);
        })
    }
  
}
export default Get;