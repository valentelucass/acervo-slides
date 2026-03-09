# Acervo de Slides

Este repositorio agora tem um portal simples na raiz para abrir todas as apresentacoes em um unico lugar.

## Estrutura

- `index.html`: portal central do acervo
- `css/portal.css`: estilos do portal
- `js/portal.js`: comportamento do portal
- `js/slides-manifest.js`: catalogo gerado automaticamente
- `public/`: arquivos publicos do portal, como favicon
- `pages/`: pasta que concentra as apresentacoes
- `pages/slides-*`: pastas dos decks

## Regra para novas apresentacoes

Toda pasta que:

1. fica dentro de `pages/`
2. comeca com `slides-`

entra no portal.

Exemplo:

```text
pages/
  slides-nova-apresentacao/
```

Se o monitor automatico estiver rodando, uma pasta nova recebe estes arquivos sozinha:

```text
pages/
  slides-nova-apresentacao/
    deck.json
    index.html
    styles.css
    script.js
```

## Atualizar o portal

Para iniciar o modo automatico completo:

```powershell
.\scripts\start-portal.cmd
```

Esse comando:

- abre o portal principal
- deixa o watcher rodando
- cria um scaffold minimo para cada pasta nova em `pages/slides-*`
- atualiza o card do index principal automaticamente

Para gerar o catalogo manualmente:

```powershell
.\scripts\update-slides-manifest.cmd
```

Para manter o catalogo atualizado automaticamente enquanto voce cria ou altera pastas:

```powershell
.\scripts\watch-slides.cmd
```

## Deploy Vercel

O deploy da Vercel agora usa `vercel.json` e gera um `dist/` limpo automaticamente.

No build de deploy:

- o manifesto `js/slides-manifest.js` e regenerado
- a pasta `dist/` recebe apenas os arquivos publicos do portal
- `scripts/`, `README.md` e `deck.json` nao vao para producao

Para testar o build localmente antes de subir:

```powershell
node .\scripts\build-vercel.mjs
```

## Direcionamento para IAs

Existe uma pasta local `.ai/` com arquivos `.md` para orientar qualquer IA que for trabalhar neste repositorio.

Essa pasta fica no `.gitignore`, entao o direcionamento pode evoluir localmente sem entrar no versionamento do projeto.

## Observacao importante

O navegador, sozinho, nao consegue listar pastas nem escrever no disco. Por isso a automacao acontece via PowerShell, que cria o scaffold e gera o arquivo `js/slides-manifest.js` usado pelo portal.
