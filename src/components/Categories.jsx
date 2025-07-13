import React from 'react';

const categories = [
  { id: 'destaques', nome: 'Destaques' },
  { id: 'beleza', nome: 'Beleza' },
  { id: 'roupas', nome: 'Roupas' },
  { id: 'casa', nome: 'Casa' },
  { id: 'acessorios', nome: 'Acessórios' },
  { id: 'calcados', nome: 'Calçados' },
  { id: 'perfumes', nome: 'Perfumes' },
  { id: 'relogios', nome: 'Relógios' },
  { id: 'bolsas', nome: 'Bolsas' },
  { id: 'livros', nome: 'Livros' },
];

export default function Categories({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={selectedCategory === cat.id ? 'active' : ''}
          onClick={() => setSelectedCategory(cat.id)}
        >
          {cat.nome}
        </button>
      ))}
    </div>
  );
}
