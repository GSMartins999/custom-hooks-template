import {Title,NameContainer } from '../style'
import { Card } from '../components/Card/Card'
// import { useCapturarNome } from "../hooks/useCapturarNomes";
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/constants';


const UserNamesPage = () => {
 
  //Precisamos chamar o nosso hook para que possamos fazer o map dele. Chamamos ele logo abaixo, armazenando seu valor em uma variável.
  // const {nomeUsuarios} = useCapturarNome()

  //Chamamos as ações do useRequest dessa forma:
  const [nomeUsuarios, error, isLoading] = useRequestData([], `${BASE_URL}users`)

  return (
    <div>
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {/* Fazendo tratamento de erros */}
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro.</p>}
        {!isLoading && nomeUsuarios && nomeUsuarios.length === 0 && <p>Lista vazia. Adicione algo!</p>}
        {/* Finalizando tratamento de erros */}
        {nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>
    </div>
  );
}

export default  UserNamesPage;



