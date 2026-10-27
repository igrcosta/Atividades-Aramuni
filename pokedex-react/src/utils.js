import data from './data/pokedex-data.json'

export const { pokemon: POKEMON, trainers: TRAINERS } = data
// Mew vem sem tipos no JSON; exibimos como "Typeless" (Sem tipo).
export const typesOf = (p) => (p.types.length ? p.types.map((t) => t.name) : ['Typeless'])
export const TYPES = data.types.map((t) => t.name)
export const TYPE_COUNTS = Object.fromEntries(
  TYPES.map((t) => [t, POKEMON.filter((p) => typesOf(p).includes(t)).length]),
)

// Imagens: PokéAPI sprites (ver README).
const SPRITES = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
export const spriteUrl = (id) => `${SPRITES}/${id}.png`
export const imageUrl = (id) => `${SPRITES}/other/official-artwork/${id}.png`

export const pad = (id) => String(id).padStart(3, '0')

export const TYPE_PT = {
  Typeless: 'Sem tipo', Normal: 'Normal', Fire: 'Fogo', Water: 'Água', Grass: 'Planta',
  Electric: 'Elétrico', Ice: 'Gelo', Fighting: 'Lutador', Poison: 'Venenoso', Ground: 'Terrestre',
  Flying: 'Voador', Psychic: 'Psíquico', Bug: 'Inseto', Rock: 'Pedra', Ghost: 'Fantasma',
  Dark: 'Sombrio', Dragon: 'Dragão', Steel: 'Aço',
}

export const TYPE_COLORS = {
  Typeless: '#9aa0a6', Normal: '#a8a77a', Fire: '#ee8130', Water: '#6390f0', Grass: '#7ac74c',
  Electric: '#f7c92c', Ice: '#96d9d6', Fighting: '#c22e28', Poison: '#a33ea1', Ground: '#e2bf65',
  Flying: '#a98ff3', Psychic: '#f95587', Bug: '#a6b91a', Rock: '#b6a136', Ghost: '#735797',
  Dark: '#705746', Dragon: '#6f35fc', Steel: '#b7b7ce',
}

// [chave, nome completo, abreviação]
export const STATS = [
  ['hp', 'HP', 'HP'], ['attack', 'Ataque', 'Atq'], ['defense', 'Defesa', 'Def'],
  ['specialAttack', 'Ataque Especial', 'AtE'], ['specialDefense', 'Defesa Especial', 'DfE'],
  ['speed', 'Velocidade', 'Vel'],
]
