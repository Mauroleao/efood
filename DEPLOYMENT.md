# Guia de Publicação - eFood

Este documento contém instruções passo a passo para publicar o projeto eFood no GitHub e fazer deploy para produção.

## 📤 Publicar no GitHub

### Passo 1: Criar Repositório no GitHub

1. Vá para [github.com](https://github.com) e faça login
2. Clique no ícone de `+` no canto superior direito
3. Selecione "New repository"
4. Preencha os dados:
   - **Repository name**: `efood`
   - **Description**: `Aplicação de delivery de comida com React`
   - Selecione "Public" para que seja acessível
   - Não inicialize com README (já temos um)
5. Clique em "Create repository"

### Passo 2: Conectar Repositório Local ao GitHub

Após criar o repositório, você receberá comandos. Execute no terminal:

```bash
git remote add origin https://github.com/[seu-usuario]/efood.git
git branch -M main
git push -u origin main
```

**Substitua `[seu-usuario]` pelo seu usuário do GitHub**

Exemplo:
```bash
git remote add origin https://github.com/joao-silva/efood.git
git branch -M main
git push -u origin main
```

### Passo 3: Verificar no GitHub

Vá para `https://github.com/[seu-usuario]/efood` e verifique se todos os arquivos foram enviados.

---

## 🚀 Deploy da Aplicação

### Opção 1: Vercel (Recomendado)

Vercel é a forma mais fácil de fazer deploy de aplicações React.

#### Instalação:
```bash
npm install -g vercel
```

#### Deploy:
```bash
vercel
```

Responda as perguntas (selecione as opções padrão):
- Project name: `efood`
- Framework: `Create React App`
- Output directory: `build`

Após o deploy, você receberá uma URL pública como:
`https://efood-[random].vercel.app`

#### Próximas atualizações:
```bash
# Após fazer alterações e fazer commit
git push origin main
vercel --prod
```

---

### Opção 2: Netlify

#### Instalação:
```bash
npm install -g netlify-cli
```

#### Deploy:
```bash
npm run build
netlify deploy --prod --dir=build
```

Você receberá uma URL como:
`https://[seu-site].netlify.app`

---

### Opção 3: GitHub Pages

#### Adicionar ao package.json:
```json
"homepage": "https://[seu-usuario].github.io/efood"
```

#### Instalar:
```bash
npm install --save-dev gh-pages
```

#### Adicionar scripts ao package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

#### Deploy:
```bash
npm run deploy
```

Seu site estará em: `https://[seu-usuario].github.io/efood`

---

## 📝 Após Fazer Alterações

1. Faça suas alterações no código
2. Teste localmente:
   ```bash
   npm start
   ```
3. Commit as alterações:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   ```
4. Push para GitHub:
   ```bash
   git push origin main
   ```
5. Deploy para produção (escolha uma opção acima)

---

## ✅ Checklist de Publicação

- [ ] Repositório criado no GitHub
- [ ] Código enviado via `git push`
- [ ] Aplicação testada localmente com `npm start`
- [ ] Build de produção executado com `npm run build`
- [ ] Deploy feito em uma plataforma (Vercel/Netlify/GitHub Pages)
- [ ] Link do projeto publicado obtido
- [ ] Links compartilhados no estúdio

---

## 🔗 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Netlify](https://docs.netlify.com/)
- [Documentação GitHub Pages](https://pages.github.com/)
- [Documentação React](https://react.dev/)
- [Documentação React Router](https://reactrouter.com/)
- [Documentação Styled Components](https://styled-components.com/)

---

## ❓ Dúvidas Frequentes

### Como atualizar o site após fazer mudanças?
1. Faça as alterações
2. Teste com `npm start`
3. Faça commit e push: `git add . && git commit -m "..." && git push`
4. O site será atualizado automaticamente (dependendo da plataforma)

### Como adicionar um domínio customizado?
Consulte a documentação da plataforma escolhida:
- Vercel: https://vercel.com/docs/concepts/projects/domains
- Netlify: https://docs.netlify.com/domains-ssl/custom-domains/

### Posso fazer alterações diretamente no GitHub?
Não é recomendado para código. Sempre faça alterações localmente, teste, commit e push.

---

**Sucesso no seu deploy! 🎉**
