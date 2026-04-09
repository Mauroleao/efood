# 🍕 eFood - Plataforma de Delivery

Uma aplicação moderna de delivery de comida desenvolvida com **React**, **TypeScript**, **Redux Toolkit** e **Styled Components**. O projeto oferece uma experiência completa de compra: navegação por restaurantes, visualização de pratos, carrinho inteligente e fluxo de checkout validado em múltiplas etapas.

---

## ✨ Destaques

- 🏪 Listagem de restaurantes com filtros
- 🍽️ Cardápio detalhado com descrição de pratos
- 🛒 Carrinho persistente com Redux
- 📋 Checkout em 3 etapas (endereço, pagamento, confirmação)
- ✅ Validação de formulários com Formik + Yup
- 🚀 API integration com RTK Query
- 📱 Responsivo para mobile, tablet e desktop
- ♿ Componentes reutilizáveis e bem estruturados

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| React | 19.2 | Biblioteca UI |
| TypeScript | 5.9 | Tipagem estática |
| Vite | 7.2 | Build tool |
| Redux Toolkit | 2.11 | Estado global |
| React Router | 7.9 | Roteamento |
| Styled Components | 6.1 | Estilização |
| Formik | 2.4 | Gerenciamento de formulários |
| Yup | 1.7 | Validação de dados |

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (incluído com Node.js)

Para verificar suas versões:
```bash
node --version
npm --version
```

---

## 🚀 Como Começar

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/efood.git
cd efood
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Iniciar servidor de desenvolvimento

```bash
npm start
```

A aplicação abrirá automaticamente em: **http://localhost:5173**

---

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens e ícones
│   └── images/
│       ├── Icons/       # Ícones da aplicação
│       └── Restaurants/ # Imagens de restaurantes
├── components/          # Componentes reutilizáveis
│   ├── Home/           # Componentes da página inicial
│   ├── Restaurant/     # Componentes da página de restaurante
│   └── SubComponents/  # Componentes menores
├── pages/              # Páginas da aplicação
│   ├── Home/
│   └── Restaurant/
├── store/              # Configuração Redux
│   ├── api/            # Endpoints da API
│   └── slices/         # Redux slices
├── App.tsx             # Componente raiz
├── main.tsx            # Ponto de entrada
└── Routes.tsx          # Configuração de rotas
```

---

## 🎯 Funcionalidades Principais

### 🏠 Página Inicial
- Exibe lista de restaurantes disponíveis
- Cards com informações (nome, categoria, avaliação)
- Navegação intuitiva

### 🍴 Página do Restaurante
- Menu completo com pratos
- Descrição e preço de cada item
- Adição ao carrinho em um clique

### 🛒 Carrinho de Compras
- Gerenciamento com Redux
- Visualização de itens selecionados
- Cálculo automático de total

### 📝 Checkout Validado
**Etapa 1:** Dados de entrega
**Etapa 2:** Dados de pagamento
**Etapa 3:** Confirmação do pedido

---

## 📜 Scripts Disponíveis

```bash
# Inicia servidor de desenvolvimento
npm start

# Mesmo que 'start' (alternativa)
npm run dev

# Compila e otimiza para produção
npm run build

# Visualiza build de produção localmente
npm run preview

# Verifica código com ESLint
npm run lint
```

---

## 🔧 Build para Produção

```bash
npm run build
```

Isso criará uma pasta `dist/` com os arquivos otimizados prontos para deploy.

---

## 📲 Deploy

A aplicação pode ser facilmente deployada em serviços como:

- **Vercel** (recomendado para aplicações Vite/React)
- **Netlify**
- **GitHub Pages**
- **AWS, Azure, ou qualquer host estático**

---

## 💡 Padrões e Boas Práticas

✅ Componentes funcionais com hooks
✅ Tipagem forte com TypeScript
✅ Gerenciamento de estado centralizado com Redux
✅ Validação de formulários robusta
✅ Código limpo e bem documentado
✅ Responsividade mobile-first

---

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit as mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto é proprietário. Todos os direitos reservados.

---

## 📞 Suporte

Em caso de dúvidas ou problemas, abra uma issue no repositório.

**Desenvolvido com ❤️ usando React + TypeScript**
