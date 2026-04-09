# eFood - Aplicação de Delivery de Comida

Uma aplicação moderna de delivery de comida construída com **React**, **Styled Components** e **React Router**.

## 🚀 Características

- ✨ Interface moderna e responsiva
- 🍕 Catálogo de restaurantes
- 🍔 Cardápio de produtos
- 🛒 Carrinho de compras
- 🧭 Navegação entre páginas com React Router
- 💅 Estilização com Styled Components

## 📋 Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/[seu-usuario]/efood.git
cd efood
```

2. Instale as dependências:
```bash
npm install
```

## 🎯 Uso

### Desenvolvimento
Para iniciar o servidor de desenvolvimento:
```bash
npm start
```

A aplicação abrirá em [http://localhost:3000](http://localhost:3000)

### Build
Para criar uma versão otimizada para produção:
```bash
npm run build
```

### Testes
Para executar os testes:
```bash
npm test
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx       # Cabeçalho da aplicação
│   ├── Footer.jsx       # Rodapé
│   ├── Hero.jsx         # Banner principal
│   ├── Layout.jsx       # Layout principal
│   ├── RestaurantCard.jsx   # Card do restaurante
│   └── ProductCard.jsx      # Card do produto
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── Restaurant.jsx  # Página do restaurante
│   └── Checkout.jsx    # Página do carrinho
├── routes/             # Configuração de rotas
│   └── Routes.jsx      # Definição de rotas
├── styles/             # Estilos globais
│   └── GlobalStyle.js  # Estilos globais
└── App.js              # Componente principal
```

## 🛠 Tecnologias Utilizadas

- **React** - Biblioteca para construir interfaces
- **React Router** - Roteamento entre páginas
- **Styled Components** - CSS-in-JS para estilização

## 📦 Dependências Principais

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.x.x",
  "styled-components": "^5.x.x"
}
```

## 🚀 Deploy

### Opção 1: Vercel
```bash
npm install -g vercel
vercel
```

### Opção 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Opção 3: GitHub Pages
```bash
npm run build
```

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido como projeto educacional.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.

---

**Próximos passos:**
1. Conectar a aplicação a uma API real
2. Implementar sistema de autenticação
3. Adicionar funcionalidade de carrinho persistente
4. Integrar pagamento online
