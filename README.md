# Passeio Feliz - Dicas de Passeio

Portal de informações sobre bem-estar e segurança no passeio com cães. Este site foi desenvolvido seguindo padrões profissionais, focado em dispositivos móveis, leveza e facilidade de manutenção.

## 🚀 Como Rodar Localmente

1. **Pré-requisitos:**
   - Node.js (versão 18 ou superior) instalado.

2. **Instalação:**
   ```bash
   npm install
   ```

3. **Execução:**
   ```bash
   npm run dev
   ```
   Acesse: `http://localhost:3000`

## 🌐 Como Publicar Gratuitamente

### 1. GitHub Pages
- Envie seu projeto para um repositório no GitHub.
- Vá em **Settings** > **Pages**.
- No campo "Build and deployment", selecione "GitHub Actions".
- O GitHub oferecerá um template para "Static Site with Vite".

### 2. Netlify
- Crie uma conta no [Netlify](https://www.netlify.com/).
- Conecte seu repositório do GitHub ou arraste a pasta `dist` (gerada após rodar `npm run build`) para o painel do Netlify.
- Comando de build: `npm run build`
- Diretório de publicação: `dist`

### 3. Cloudflare Pages
- No painel da Cloudflare, vá em **Workers & Pages**.
- Selecione "Connect to Git".
- Escolha o repositório e o framework "Vite".
- Clique em "Save and Deploy".

## 📱 PWA (Progressive Web App)
O projeto já conta com `manifest.json` e está estruturado para ser instalável futuramente no Android. Para habilitar o modo offline completo, adicione um Service Worker no arquivo `src/main.tsx`.

## 🛠️ Tecnologias Utilizadas
- **React 19**
- **Tailwind CSS 4** (Estilização)
- **Lucide React** (Ícones)
- **Motion** (Animações suaves)
- **React Router Dom** (Navegação)

## 🐕 Fontes e Créditos
- **Conteúdo:** AVMA (American Veterinary Medical Association), RSPCA, ASPCA.
- **Imagens:** Gratuitas via Unsplash.
- **Identidade Visual:** Verde Água Claro, Azul Royal e Verde Musgo.
