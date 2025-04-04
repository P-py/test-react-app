import React, { useState } from 'react';
import axios from 'axios';
import './CepFinder.css';

function CepFinder() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!cep || cep.length !== 8) {
      setError('Digite um CEP válido com 8 dígitos');
      setAddress(null);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      
      if (response.data.erro) {
        setError('CEP não encontrado');
        setAddress(null);
      } else {
        setAddress(response.data);
        setError(null);
      }
    } catch (err) {
      setError('Ocorreu um erro ao buscar o CEP');
      setAddress(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cep-container">
      <h2>Buscador de CEP</h2>
      <form className="cep-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
          placeholder="Digite o CEP (somente números)"
          maxLength="8"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>
      
      {error && <div className="error-message">{error}</div>}
      
      {address && (
        <div className="address-container">
          <h3>Endereço Encontrado</h3>
          <p><strong>CEP:</strong> {address.cep}</p>
          <p><strong>Logradouro:</strong> {address.logradouro}</p>
          <p><strong>Complemento:</strong> {address.complemento || 'N/A'}</p>
          <p><strong>Bairro:</strong> {address.bairro}</p>
          <p><strong>Cidade:</strong> {address.localidade}</p>
          <p><strong>Estado:</strong> {address.uf}</p>
        </div>
      )}
    </div>
  );
}

export default CepFinder;