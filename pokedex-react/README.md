# Pokédex React + Vite

Pokédex interativa (Atividade 03 – DIAW) feita com React + Vite.

## Executar

```bash
npm install
npm run dev
```

Abra http://localhost:5173 no navegador.

## Funcionalidades

- Lista dos 151 Pokémon com ID, nome, tipos e os 6 atributos
- Pesquisa por nome ou ID (atualiza enquanto digita)
- Filtro por tipo (tipos lidos do JSON; Mew não tem tipo no JSON e aparece como "Typeless")
- Detalhes em tela própria (Voltar, anterior/próximo, favoritar, "ponto forte")
- Aba de treinadores: nome, insígnias e time (clique no Pokémon abre os detalhes)
- Extras: aba de favoritos (localStorage), ordenação com direção, Sortear, tema Noturno (fundo da página)
- Mensagem quando nenhum Pokémon é encontrado; layout responsivo

## Dados

`src/data/pokedex-data.json` (fornecido pelo professor): tipos, Pokémon e treinadores.

## Imagens

Imagens vindas do repositório de sprites da [PokéAPI](https://github.com/PokeAPI/sprites)
(`sprites/pokemon/other/official-artwork/{id}.png`), carregadas por URL. Sem internet, os
dados continuam funcionando, só as imagens não aparecem.

## Créditos visuais

O fundo `src/assets/images/holo-fundo.webp` e `holo-tela.webp` vêm do projeto de exemplo do professor (`PROJETOS/React/Pokedex`), usados como base da estética.

## Estrutura

```text
src/
├── components/   SearchBar, Filters, PokemonList, PokemonCard, PokemonDetails, StatBar, TypeBadge, TrainerList
├── css/App.css   estilos dos componentes
├── data/         pokedex-data.json
├── App.jsx       estado (busca, filtro, ordenação, favoritos, tema) e composição
├── utils.js      helpers (tipos, cores, URL de imagem)
├── main.jsx
└── index.css     variáveis de tema
```
