# NextJS
- From React to Next.js
- Pages, Routing and Navigation
- Pre-rendering and Data Fetching

```shell
npm run dev
```

Outros componentes Next:
- Link
- Image
- Script
- Head

- Renderização com Next.js
    - Client-side rendering [1] (React)
        - Servidor envia HTML inicial e cliente realiza processamento para montar UI
    - Pre-rendering
        - Servidor envia HTML "pré-pronto" (Server-Side Rendering[2]) e realiza "Hydration" posteriormente
        - Static Site Generation [3]
            - Conteúdo é gerado no build
        - Permite o uso de CDN para armazenar o conteúdo gerado
        - Opção de renderizar com "Edge" (Edge rendering [4]), permitindo retornar conteúdo estático e dinâmico

- Data fetching methods
    - getServerSideProps
    - API Routes
    - Client-side data fetching
    - Edge functions

- Styling options with Next.js
    - CSS Modules
        - minified and code-split for performance
        - prefixed to support older browsers
        - scoped at the component level
    - Global CSS or Sass Stylesheets
    - CSS Frameworks (p. ex: tailwind)
    - CSS-in-JS Libraries

- curso interativo: nextjs.org/learn