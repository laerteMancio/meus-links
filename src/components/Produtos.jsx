import React from 'react';

export default function Produtos({ produtos }) {
  console.log(produtos);
  
  return (
    <section className="produtos">
      <h2>Produtos</h2>
      <div className="produtos-lista">
        {produtos.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="produto-card"
          >
            <img src={p.img} alt={p.titulo} />
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
