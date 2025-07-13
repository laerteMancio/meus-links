import React, { useState, useEffect } from 'react';
import "./App.css";

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import Destaques from './components/Destaques';
import Produtos from './components/Produtos';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('destaques');
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
  const fetchProdutos = async () => {
    try {
      setCarregando(true);
      let url = 'https://backend-meus-links.vercel.app/produtos';
      const params = new URLSearchParams();

      if (!searchTerm) {
        if (selectedCategory && selectedCategory !== 'destaques') {
          params.append('categoria', selectedCategory);
        }

        if (selectedCategory === 'destaques') {
          params.append('destaque', 'true');
        }
      }

      if (searchTerm) {
        params.append('busca', searchTerm);
      }

      if (params.toString()) {
        url += '?' + params.toString();
      }

      const response = await fetch(url);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log(data);
      
      setProdutos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error.message);
      setProdutos([]);
    } finally {
      setCarregando(false);
    }
  };

  fetchProdutos();
}, [searchTerm, selectedCategory]);


   
  if (!Array.isArray(produtos)) {
    setProdutos([])
  }


  return (
    <>
      <Header />
      <main className="container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {carregando ? (
          <p>Carregando produtos...</p>
        ) : produtos.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : selectedCategory === 'destaques' && !searchTerm ? (
          <Destaques produtos={produtos} />
        ) : (
          <Produtos produtos={produtos} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
