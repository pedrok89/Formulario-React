import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pais, setPais] = useState([]);

  useEffect(() => {

    axios.get("https://amazon-api.sellead.com/country").then((response) => {

    setPais(response.data);

    })

  }, []);

  const [cidade, setCity] = useState([]);

  useEffect(() => {

    axios.get("https://amazon-api.sellead.com/city").then((response) => {

    setCity(response.data);

    })

  }, []);

  const [name, setName] = useState('');

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {

    const {name, value} = e.target;

    console.log('*** handleNameChange', name, value);

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('*** handleSubmit', data);

  }

  return (

    <form onSubmit={handleSubmit}>

    <input type="text" name="nome" placeholder="Nome:" onChange={handleInputChange}></input>
    <input type="text" name="email" placeholder="Email:" onChange={handleInputChange}></input>
    <input type="text" name="telefone" placeholder="Telefone:" onChange={handleInputChange}></input>
    <input type="text" name="cpf" placeholder="CPF:" onChange={handleInputChange}></input>

    <select name='country' id='country' onChange={handleInputChange} className="select">

      <option value="0">Selecione o Pais</option>

      {pais.map(country => (

      <option key={country.code} value={country.code}>{country.name_ptbr}</option>

      ))}

    </select>

    <select name='city' id='city' onChange={handleInputChange} className="select">

     <option value="0">Selecione a cidade</option>

      
     {cidade.map(cidade => (

    <option key={cidade.id} value={cidade.id}>{cidade.name}</option>

    ))}
              
    </select>

    <button type="submit" >Enviar</button>

    </form>
    
  );
}

export default App;
