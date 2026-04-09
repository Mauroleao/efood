# 🚀 Começando com eFood

Bem-vindo ao projeto eFood! Este guia rápido vai te ajudar a começar.

## ⚡ Quick Start

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar Desenvolvimento
```bash
npm start
```

A aplicação abrirá automaticamente em `http://localhost:3000`

### 3. Fazer Alterações
Edite os arquivos em `src/` e veja as mudanças em tempo real no navegador.

---

## 📁 Estrutura de Pastas

```
efood/
├── public/                 # Arquivos estáticos
│   ├── index.html         # HTML principal
│   └── favicon.ico        # Ícone da app
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.jsx     # Cabeçalho com navegação
│   │   ├── Footer.jsx     # Rodapé
│   │   ├── Hero.jsx       # Banner principal
│   │   ├── Layout.jsx     # Wrapper para todas as páginas
│   │   ├── RestaurantCard.jsx  # Card dos restaurantes
│   │   └── ProductCard.jsx     # Card dos produtos
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home.jsx       # Página inicial
│   │   ├── Restaurant.jsx # Página de um restaurante
│   │   └── Checkout.jsx   # Página do carrinho
│   ├── routes/            # Configuração de rotas
│   │   └── Routes.jsx     # Definição de todas as rotas
│   ├── styles/            # Estilos globais
│   │   └── GlobalStyle.js # CSS global com styled-components
│   ├── App.js             # Componente principal
│   └── index.js           # Ponto de entrada
├── .gitignore             # Arquivos ignorados pelo git
├── package.json           # Dependências e scripts
├── README.md              # Documentação do projeto
└── DEPLOYMENT.md          # Guia de publicação
```

---

## 🎨 Como Adicionar um Novo Componente

### 1. Criar o arquivo do componente
Crie um novo arquivo em `src/components/MeuComponente.jsx`:

```jsx
import styled from 'styled-components'

const Container = styled.div`
  // seus estilos aqui
`

function MeuComponente({ props }) {
  return (
    <Container>
      {/* seu JSX aqui */}
    </Container>
  )
}

export default MeuComponente
```

### 2. Importar no local apropriado
```jsx
import MeuComponente from '../components/MeuComponente'
```

---

## 📄 Como Adicionar uma Nova Página

### 1. Criar o arquivo da página
Crie um novo arquivo em `src/pages/MinhaPage.jsx`:

```jsx
import styled from 'styled-components'

const Container = styled.div`
  // seus estilos aqui
`

function MinhaPage() {
  return (
    <Container>
      {/* seu conteúdo aqui */}
    </Container>
  )
}

export default MinhaPage
```

### 2. Adicionar a rota
Edite `src/routes/Routes.jsx`:

```jsx
import MinhaPage from '../pages/MinhaPage'

// Dentro de <Routes>
<Route path="/minha-page" element={<MinhaPage />} />
```

### 3. Adicionar link no Header (opcional)
Edite `src/components/Header.jsx` para adicionar um link.

---

## 🎯 Como Estilizar com Styled Components

### Exemplo Básico:
```jsx
import styled from 'styled-components'

const Button = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`

export default Button
```

### Componentes com Props:
```jsx
const Box = styled.div`
  background-color: ${props => props.bgColor || 'white'};
  padding: ${props => props.padding || '16px'};
`

// Uso: <Box bgColor="blue" padding="20px" />
```

---

## 🧭 Como Usar React Router

### Link para outra página:
```jsx
import { Link } from 'react-router-dom'

<Link to="/restaurant/1">Clique aqui</Link>
```

### Obter parâmetros da URL:
```jsx
import { useParams } from 'react-router-dom'

function Restaurant() {
  const { id } = useParams()
  console.log(id) // ID do restaurante
}
```

### Programaticamente ir para página:
```jsx
import { useNavigate } from 'react-router-dom'

function MinhaPage() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/checkout')
  }

  return <button onClick={handleClick}>Ir para Checkout</button>
}
```

---

## 🧪 Testar a Aplicação

```bash
npm test
```

Isso iniciará o test runner. Pressione `a` para rodar todos os testes.

---

## 🏗️ Build para Produção

```bash
npm run build
```

Isso criará uma pasta `build/` com a versão otimizada. Esta é a pasta que deve ser publicada.

---

## 📚 Recursos Úteis

- [React Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
- [ES6 Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

## 💡 Dicas Importantes

1. **Use componentes para reutilização**: Se você repete um padrão visual, crie um componente
2. **Mantenha pastas organizadas**: Componentes em `components/`, páginas em `pages/`
3. **Faça commits frequentes**: `git commit -m "descrição clara"`
4. **Teste no navegador**: Abra DevTools (F12) para verificar erros
5. **Reutilize estilos**: Use variáveis e componentes base com Styled Components

---

## 🐛 Solução de Problemas

### Aplicação não inicia
```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm start
```

### Erro de importação
- Verifique se o caminho está correto (use `../` para sair de pastas)
- Verifique se o arquivo existe
- Use `Ctrl+Shift+P` no VS Code para "Go to Definition"

### Porta 3000 já está em uso
```bash
# Use outra porta
PORT=3001 npm start
```

---

## 🎓 Próximos Passos

1. **Estudar React Hooks**: `useState`, `useEffect`, `useContext`
2. **Adicionar API**: Integrar com backend real
3. **Melhorar UX**: Adicionar animações e transições
4. **Autenticação**: Adicionar login/registro
5. **State Management**: Considerar usar Context API ou Redux

---

**Boa sorte com seu projeto! Em caso de dúvidas, consulte a documentação oficial. 🚀**
