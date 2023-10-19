import {Title,PostContainer } from '../style'
import { Card } from '../components/Card/Card'
// import { useCapturarPostagens } from "../hooks/useCapturarPostagens";
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/constants';


const  CommentsPage = () => {
  

  // const [postagens] = useCapturarPostagens()

  //Criamos a importação para conseguir vizualizar na tela os posts
  //No useRequestData criamos uma função que necessita de um estado inicial e uma url, definidos como parâmetros. Abaixo e possível ver a passagem desses parâmetros.
  const [postagens, error, isLoading] = useRequestData([], `${BASE_URL}comments`)

  return (
    <div>
      <Title>Comentários dos usuários</Title>
      <PostContainer>

    {/* Fazendo tratamento de erros */}
    {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro.</p>}
        {!isLoading && !error && postagens && postagens.length === 0 && <p>Lista vazia. Adicione algo!</p>}
      {postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default CommentsPage;



