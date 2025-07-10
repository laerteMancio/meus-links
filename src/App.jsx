import './App.css';

const links = [
  { id: 1, titulo: 'Conjunto Canelado Estiloso', url: 'https://afiliado.com/produto1' },
  { id: 2, titulo: 'Kit Calças Jogger', url: 'https://afiliado.com/produto2' },
  { id: 3, titulo: 'Promoções Shopee - Só Hoje', url: 'https://shopee.com/promo123' },
];

function App() {
  return (
    <div className="app">
      <header>
        <h1>Meus Achadinhos 🔥</h1>
        <p>Aproveite os melhores produtos pelos meus links afiliados.</p>
      </header>

      <main>
        {links.map(({ id, titulo, url }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="botao-link"
          >
            {titulo}
          </a>
        ))}
      </main>

      <footer>
        <p>Comprando pelos meus links, você me ajuda 💖</p>
      </footer>
    </div>
  );
}

export default App;
