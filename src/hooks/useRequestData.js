import axios from "axios";
import { useState, useEffect } from "react"

//Criamos esse hook para substituir os dois outros criados. Já que os dois são parecidos, podemos simplesmente substitui-lós por apenas um hook.
export const useRequestData = (initialState, url) => {
    //Criamos um estado genérico para armazenar as informações.
    const [data, setData] = useState(initialState)
    //Criamos esse estado generico para armazenar o dado.

    //Criamos agora um estado para os possíveis erros
    const [error, setError] = useState(false)

    //Criamos agora um estado para a tela de loading

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
          .get(url)
          .then((response) => {
            setData(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
            setError(true)
          });
          //É necessário passar a url no array de dependencia para que toda vez que alterarmos nossa url o useEffect atualiza.
      }, [url]);

      return [data, error, isLoading]
}