const typeNames = {
    "normal": "normal",
    'fighting': "luchador",
    'flying': "volador",
    'poison': "venenoso",
    'ground': "tierra",
    'rock': "piedra",
    'bug': "insecto",
    'ghost': "fantasma",
    'steel': "metal",
    'fire': "fuego",
    'water': "agua",
    'grass': "hierba",
    'electric': "eléctrico",
    'psychic': "psíquico",
    'ice': "hielo",
    'dragon': "dragon",
    'dark': "oscuro",
    'fairy': "mágia",
    unknown: "desconocido",
    shadow: "sombra"
}


export default function translateTypeName(name) {
    return typeNames[name] ? typeNames[name] : name
}