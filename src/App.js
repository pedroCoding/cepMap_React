import {useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  

  async function handleSearch(){
    if(input === ''){
      alert("Campo CEP vazio")
      return;
    }

      try{
        const response = await api.get(`${input}/json`);
        setCep(response.data)
        setInput("");

        

      }catch{
        alert("Não encontrei o CEP digitado.")
        setInput("")
      }
  
  }
  
  
  return (
    <div className="container">
      <h1 className="title">Buscar CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite o CEP ..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />
        
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      
      

      {Object.keys(cep).length > 0 && (
        <main className='main'>
        <h2>CEP: {cep.cep}</h2>
        <span>RUA: {cep.logradouro}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Cidade: {cep.localidade}</span>
        <span>Estado: {cep.uf}</span>
        </main>
      )}
    </div>
  );

  
}


export default App;
