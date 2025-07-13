import React from 'react';

export default function Destaques({ produtos }) {

  return (
    <section id="destaques" className="destaques">
      <h2>Destaques & Promoções</h2>
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
