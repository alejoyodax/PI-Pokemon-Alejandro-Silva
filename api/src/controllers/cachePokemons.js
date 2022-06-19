let CACHE_POKEMON = [
    {
        id: 1,
        nombre: 'bulbasaur',
        vida: 45,
        fuerza: 49,
        defensa: 49,
        velocidad: 49,
        altura: 7,
        peso: 69,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        tipos: [
            {
                id: '12',
                nombre: 'grass'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    }, {
        id: "A1",
        nombre: 'alejoyop',
        vida: 450,
        fuerza: 490,
        defensa: 409,
        velocidad: 459,
        altura: 79,
        peso: 99,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        tipos: [
            {
                id: '12',
                nombre: 'humano'
            },
            {
                id: '4',
                nombre: 'pereza'
            }
        ]
    },
    {
        id: 2,
        nombre: 'ivysaur',
        vida: 60,
        fuerza: 62,
        defensa: 63,
        velocidad: 63,
        altura: 10,
        peso: 130,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
        tipos: [
            {
                id: '12',
                nombre: 'grass'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 3,
        nombre: 'venusaur',
        vida: 80,
        fuerza: 82,
        defensa: 83,
        velocidad: 83,
        altura: 20,
        peso: 1000,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
        tipos: [
            {
                id: '12',
                nombre: 'grass'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 4,
        nombre: 'charmander',
        vida: 39,
        fuerza: 52,
        defensa: 43,
        velocidad: 43,
        altura: 6,
        peso: 85,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
        tipos: [
            {
                id: '10',
                nombre: 'fire'
            }
        ]
    },
    {
        id: 5,
        nombre: 'charmeleon',
        vida: 58,
        fuerza: 64,
        defensa: 58,
        velocidad: 58,
        altura: 11,
        peso: 190,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
        tipos: [
            {
                id: '10',
                nombre: 'fire'
            }
        ]
    },
    {
        id: 6,
        nombre: 'charizard',
        vida: 78,
        fuerza: 84,
        defensa: 78,
        velocidad: 78,
        altura: 17,
        peso: 905,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
        tipos: [
            {
                id: '10',
                nombre: 'fire'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 7,
        nombre: 'squirtle',
        vida: 44,
        fuerza: 48,
        defensa: 65,
        velocidad: 65,
        altura: 5,
        peso: 90,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
        tipos: [
            {
                id: '11',
                nombre: 'water'
            }
        ]
    },
    {
        id: 8,
        nombre: 'wartortle',
        vida: 59,
        fuerza: 63,
        defensa: 80,
        velocidad: 80,
        altura: 10,
        peso: 225,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg',
        tipos: [
            {
                id: '11',
                nombre: 'water'
            }
        ]
    },
    {
        id: 9,
        nombre: 'blastoise',
        vida: 79,
        fuerza: 83,
        defensa: 100,
        velocidad: 100,
        altura: 16,
        peso: 855,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg',
        tipos: [
            {
                id: '11',
                nombre: 'water'
            }
        ]
    },
    {
        id: 10,
        nombre: 'caterpie',
        vida: 45,
        fuerza: 30,
        defensa: 35,
        velocidad: 35,
        altura: 3,
        peso: 29,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            }
        ]
    },
    {
        id: 11,
        nombre: 'metapod',
        vida: 50,
        fuerza: 20,
        defensa: 55,
        velocidad: 55,
        altura: 7,
        peso: 99,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            }
        ]
    },
    {
        id: 12,
        nombre: 'butterfree',
        vida: 60,
        fuerza: 45,
        defensa: 50,
        velocidad: 50,
        altura: 11,
        peso: 320,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 13,
        nombre: 'weedle',
        vida: 40,
        fuerza: 35,
        defensa: 30,
        velocidad: 30,
        altura: 3,
        peso: 32,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 14,
        nombre: 'kakuna',
        vida: 45,
        fuerza: 25,
        defensa: 50,
        velocidad: 50,
        altura: 6,
        peso: 100,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 15,
        nombre: 'beedrill',
        vida: 65,
        fuerza: 90,
        defensa: 40,
        velocidad: 40,
        altura: 10,
        peso: 295,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 16,
        nombre: 'pidgey',
        vida: 40,
        fuerza: 45,
        defensa: 40,
        velocidad: 40,
        altura: 3,
        peso: 18,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 17,
        nombre: 'pidgeotto',
        vida: 63,
        fuerza: 60,
        defensa: 55,
        velocidad: 55,
        altura: 11,
        peso: 300,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 18,
        nombre: 'pidgeot',
        vida: 83,
        fuerza: 80,
        defensa: 75,
        velocidad: 75,
        altura: 15,
        peso: 395,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 19,
        nombre: 'rattata',
        vida: 30,
        fuerza: 56,
        defensa: 35,
        velocidad: 35,
        altura: 3,
        peso: 35,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            }
        ]
    },
    {
        id: 20,
        nombre: 'raticate',
        vida: 55,
        fuerza: 81,
        defensa: 60,
        velocidad: 60,
        altura: 7,
        peso: 185,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            }
        ]
    },
    {
        id: 21,
        nombre: 'spearow',
        vida: 40,
        fuerza: 60,
        defensa: 30,
        velocidad: 30,
        altura: 3,
        peso: 20,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 22,
        nombre: 'fearow',
        vida: 65,
        fuerza: 90,
        defensa: 65,
        velocidad: 65,
        altura: 12,
        peso: 380,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 23,
        nombre: 'ekans',
        vida: 35,
        fuerza: 60,
        defensa: 44,
        velocidad: 44,
        altura: 20,
        peso: 69,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 24,
        nombre: 'arbok',
        vida: 60,
        fuerza: 95,
        defensa: 69,
        velocidad: 69,
        altura: 35,
        peso: 650,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 25,
        nombre: 'pikachu',
        vida: 35,
        fuerza: 55,
        defensa: 40,
        velocidad: 40,
        altura: 4,
        peso: 60,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
        tipos: [
            {
                id: '13',
                nombre: 'electric'
            }
        ]
    },
    {
        id: 26,
        nombre: 'raichu',
        vida: 60,
        fuerza: 90,
        defensa: 55,
        velocidad: 55,
        altura: 8,
        peso: 300,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg',
        tipos: [
            {
                id: '13',
                nombre: 'electric'
            }
        ]
    },
    {
        id: 27,
        nombre: 'sandshrew',
        vida: 50,
        fuerza: 75,
        defensa: 85,
        velocidad: 85,
        altura: 6,
        peso: 120,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg',
        tipos: [
            {
                id: '5',
                nombre: 'ground'
            }
        ]
    },
    {
        id: 28,
        nombre: 'sandslash',
        vida: 75,
        fuerza: 100,
        defensa: 110,
        velocidad: 110,
        altura: 10,
        peso: 295,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg',
        tipos: [
            {
                id: '5',
                nombre: 'ground'
            }
        ]
    },
    {
        id: 29,
        nombre: 'nidoran-f',
        vida: 55,
        fuerza: 47,
        defensa: 52,
        velocidad: 52,
        altura: 4,
        peso: 70,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 30,
        nombre: 'nidorina',
        vida: 70,
        fuerza: 62,
        defensa: 67,
        velocidad: 67,
        altura: 8,
        peso: 200,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 31,
        nombre: 'nidoqueen',
        vida: 90,
        fuerza: 92,
        defensa: 87,
        velocidad: 87,
        altura: 13,
        peso: 600,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            },
            {
                id: '5',
                nombre: 'ground'
            }
        ]
    },
    {
        id: 32,
        nombre: 'nidoran-m',
        vida: 46,
        fuerza: 57,
        defensa: 40,
        velocidad: 40,
        altura: 5,
        peso: 90,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 33,
        nombre: 'nidorino',
        vida: 61,
        fuerza: 72,
        defensa: 57,
        velocidad: 57,
        altura: 9,
        peso: 195,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 34,
        nombre: 'nidoking',
        vida: 81,
        fuerza: 102,
        defensa: 77,
        velocidad: 77,
        altura: 14,
        peso: 620,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            },
            {
                id: '5',
                nombre: 'ground'
            }
        ]
    },
    {
        id: 35,
        nombre: 'clefairy',
        vida: 70,
        fuerza: 45,
        defensa: 48,
        velocidad: 48,
        altura: 6,
        peso: 75,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg',
        tipos: [
            {
                id: '18',
                nombre: 'fairy'
            }
        ]
    },
    {
        id: 36,
        nombre: 'clefable',
        vida: 95,
        fuerza: 70,
        defensa: 73,
        velocidad: 73,
        altura: 13,
        peso: 400,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg',
        tipos: [
            {
                id: '18',
                nombre: 'fairy'
            }
        ]
    },
    {
        id: 37,
        nombre: 'vulpix',
        vida: 38,
        fuerza: 41,
        defensa: 40,
        velocidad: 40,
        altura: 6,
        peso: 99,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg',
        tipos: [
            {
                id: '10',
                nombre: 'fire'
            }
        ]
    },
    {
        id: 38,
        nombre: 'ninetales',
        vida: 73,
        fuerza: 76,
        defensa: 75,
        velocidad: 75,
        altura: 11,
        peso: 199,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg',
        tipos: [
            {
                id: '10',
                nombre: 'fire'
            }
        ]
    },
    {
        id: 39,
        nombre: 'jigglypuff',
        vida: 115,
        fuerza: 45,
        defensa: 20,
        velocidad: 20,
        altura: 5,
        peso: 55,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '18',
                nombre: 'fairy'
            }
        ]
    },
    {
        id: 40,
        nombre: 'wigglytuff',
        vida: 140,
        fuerza: 70,
        defensa: 45,
        velocidad: 45,
        altura: 10,
        peso: 120,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '18',
                nombre: 'fairy'
            }
        ]
    },
    {
        "id": 42,
        "nombre": "golbat",
        "vida": 75,
        "fuerza": 80,
        "defensa": 70,
        "velocidad": 70,
        "altura": 16,
        "peso": 550,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/42.svg",
        "tipos": [
            {
                "id": "4",
                "nombre": "poison"
            },
            {
                "id": "3",
                "nombre": "flying"
            }
        ]
    },
    {
        "id": 43,
        "nombre": "oddish",
        "vida": 45,
        "fuerza": 50,
        "defensa": 55,
        "velocidad": 55,
        "altura": 5,
        "peso": 54,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/43.svg",
        "tipos": [
            {
                "id": "12",
                "nombre": "grass"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 44,
        "nombre": "gloom",
        "vida": 60,
        "fuerza": 65,
        "defensa": 70,
        "velocidad": 70,
        "altura": 8,
        "peso": 86,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/44.svg",
        "tipos": [
            {
                "id": "12",
                "nombre": "grass"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 45,
        "nombre": "vileplume",
        "vida": 75,
        "fuerza": 80,
        "defensa": 85,
        "velocidad": 85,
        "altura": 12,
        "peso": 186,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
        "tipos": [
            {
                "id": "12",
                "nombre": "grass"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 46,
        "nombre": "paras",
        "vida": 35,
        "fuerza": 70,
        "defensa": 55,
        "velocidad": 55,
        "altura": 3,
        "peso": 54,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/46.svg",
        "tipos": [
            {
                "id": "7",
                "nombre": "bug"
            },
            {
                "id": "12",
                "nombre": "grass"
            }
        ]
    },
    {
        "id": 47,
        "nombre": "parasect",
        "vida": 60,
        "fuerza": 95,
        "defensa": 80,
        "velocidad": 80,
        "altura": 10,
        "peso": 295,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg",
        "tipos": [
            {
                "id": "7",
                "nombre": "bug"
            },
            {
                "id": "12",
                "nombre": "grass"
            }
        ]
    },
    {
        "id": 48,
        "nombre": "venonat",
        "vida": 60,
        "fuerza": 55,
        "defensa": 50,
        "velocidad": 50,
        "altura": 10,
        "peso": 300,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/48.svg",
        "tipos": [
            {
                "id": "7",
                "nombre": "bug"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 49,
        "nombre": "venomoth",
        "vida": 70,
        "fuerza": 65,
        "defensa": 60,
        "velocidad": 60,
        "altura": 15,
        "peso": 125,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",
        "tipos": [
            {
                "id": "7",
                "nombre": "bug"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 50,
        "nombre": "diglett",
        "vida": 10,
        "fuerza": 55,
        "defensa": 25,
        "velocidad": 25,
        "altura": 2,
        "peso": 8,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/50.svg",
        "tipos": [
            {
                "id": "5",
                "nombre": "ground"
            }
        ]
    },
    {
        "id": 51,
        "nombre": "dugtrio",
        "vida": 35,
        "fuerza": 100,
        "defensa": 50,
        "velocidad": 50,
        "altura": 7,
        "peso": 333,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg",
        "tipos": [
            {
                "id": "5",
                "nombre": "ground"
            }
        ]
    },
    {
        "id": 52,
        "nombre": "meowth",
        "vida": 40,
        "fuerza": 45,
        "defensa": 35,
        "velocidad": 35,
        "altura": 4,
        "peso": 42,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg",
        "tipos": [
            {
                "id": "1",
                "nombre": "normal"
            }
        ]
    },
    {
        "id": 53,
        "nombre": "persian",
        "vida": 65,
        "fuerza": 70,
        "defensa": 60,
        "velocidad": 60,
        "altura": 10,
        "peso": 320,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/53.svg",
        "tipos": [
            {
                "id": "1",
                "nombre": "normal"
            }
        ]
    },
    {
        "id": 54,
        "nombre": "psyduck",
        "vida": 50,
        "fuerza": 52,
        "defensa": 48,
        "velocidad": 48,
        "altura": 8,
        "peso": 196,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 55,
        "nombre": "golduck",
        "vida": 80,
        "fuerza": 82,
        "defensa": 78,
        "velocidad": 78,
        "altura": 17,
        "peso": 766,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/55.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 56,
        "nombre": "mankey",
        "vida": 40,
        "fuerza": 80,
        "defensa": 35,
        "velocidad": 35,
        "altura": 5,
        "peso": 280,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/56.svg",
        "tipos": [
            {
                "id": "2",
                "nombre": "fighting"
            }
        ]
    },
    {
        "id": 57,
        "nombre": "primeape",
        "vida": 65,
        "fuerza": 105,
        "defensa": 60,
        "velocidad": 60,
        "altura": 10,
        "peso": 320,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg",
        "tipos": [
            {
                "id": "2",
                "nombre": "fighting"
            }
        ]
    },
    {
        "id": 58,
        "nombre": "growlithe",
        "vida": 55,
        "fuerza": 70,
        "defensa": 45,
        "velocidad": 45,
        "altura": 7,
        "peso": 190,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/58.svg",
        "tipos": [
            {
                "id": "10",
                "nombre": "fire"
            }
        ]
    },
    {
        "id": 59,
        "nombre": "arcanine",
        "vida": 90,
        "fuerza": 110,
        "defensa": 80,
        "velocidad": 80,
        "altura": 19,
        "peso": 1550,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",
        "tipos": [
            {
                "id": "10",
                "nombre": "fire"
            }
        ]
    },
    {
        "id": 60,
        "nombre": "poliwag",
        "vida": 40,
        "fuerza": 50,
        "defensa": 40,
        "velocidad": 40,
        "altura": 6,
        "peso": 124,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/60.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 61,
        "nombre": "poliwhirl",
        "vida": 65,
        "fuerza": 65,
        "defensa": 65,
        "velocidad": 65,
        "altura": 10,
        "peso": 200,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/61.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 63,
        "nombre": "abra",
        "vida": 25,
        "fuerza": 20,
        "defensa": 15,
        "velocidad": 15,
        "altura": 9,
        "peso": 195,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/63.svg",
        "tipos": [
            {
                "id": "14",
                "nombre": "psychic"
            }
        ]
    },
    {
        "id": 64,
        "nombre": "kadabra",
        "vida": 40,
        "fuerza": 35,
        "defensa": 30,
        "velocidad": 30,
        "altura": 13,
        "peso": 565,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg",
        "tipos": [
            {
                "id": "14",
                "nombre": "psychic"
            }
        ]
    },
    {
        "id": 65,
        "nombre": "alakazam",
        "vida": 55,
        "fuerza": 50,
        "defensa": 45,
        "velocidad": 45,
        "altura": 15,
        "peso": 480,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/65.svg",
        "tipos": [
            {
                "id": "14",
                "nombre": "psychic"
            }
        ]
    },
    {
        "id": 66,
        "nombre": "machop",
        "vida": 70,
        "fuerza": 80,
        "defensa": 50,
        "velocidad": 50,
        "altura": 8,
        "peso": 195,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/66.svg",
        "tipos": [
            {
                "id": "2",
                "nombre": "fighting"
            }
        ]
    },
    {
        "id": 67,
        "nombre": "machoke",
        "vida": 80,
        "fuerza": 100,
        "defensa": 70,
        "velocidad": 70,
        "altura": 15,
        "peso": 705,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/67.svg",
        "tipos": [
            {
                "id": "2",
                "nombre": "fighting"
            }
        ]
    },
    {
        "id": 68,
        "nombre": "machamp",
        "vida": 90,
        "fuerza": 130,
        "defensa": 80,
        "velocidad": 80,
        "altura": 16,
        "peso": 1300,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/68.svg",
        "tipos": [
            {
                "id": "2",
                "nombre": "fighting"
            }
        ]
    },
    {
        "id": 69,
        "nombre": "bellsprout",
        "vida": 50,
        "fuerza": 75,
        "defensa": 35,
        "velocidad": 35,
        "altura": 7,
        "peso": 40,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/69.svg",
        "tipos": [
            {
                "id": "12",
                "nombre": "grass"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 70,
        "nombre": "weepinbell",
        "vida": 65,
        "fuerza": 90,
        "defensa": 50,
        "velocidad": 50,
        "altura": 10,
        "peso": 64,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/70.svg",
        "tipos": [
            {
                "id": "12",
                "nombre": "grass"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 71,
        "nombre": "victreebel",
        "vida": 80,
        "fuerza": 105,
        "defensa": 65,
        "velocidad": 65,
        "altura": 17,
        "peso": 155,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg",
        "tipos": [
            {
                "id": "12",
                "nombre": "grass"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 72,
        "nombre": "tentacool",
        "vida": 40,
        "fuerza": 40,
        "defensa": 35,
        "velocidad": 35,
        "altura": 9,
        "peso": 455,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/72.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 73,
        "nombre": "tentacruel",
        "vida": 80,
        "fuerza": 70,
        "defensa": 65,
        "velocidad": 65,
        "altura": 16,
        "peso": 550,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/73.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 74,
        "nombre": "geodude",
        "vida": 40,
        "fuerza": 80,
        "defensa": 100,
        "velocidad": 100,
        "altura": 4,
        "peso": 200,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/74.svg",
        "tipos": [
            {
                "id": "6",
                "nombre": "rock"
            },
            {
                "id": "5",
                "nombre": "ground"
            }
        ]
    },
    {
        "id": 75,
        "nombre": "graveler",
        "vida": 55,
        "fuerza": 95,
        "defensa": 115,
        "velocidad": 115,
        "altura": 10,
        "peso": 1050,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/75.svg",
        "tipos": [
            {
                "id": "6",
                "nombre": "rock"
            },
            {
                "id": "5",
                "nombre": "ground"
            }
        ]
    },
    {
        "id": 76,
        "nombre": "golem",
        "vida": 80,
        "fuerza": 120,
        "defensa": 130,
        "velocidad": 130,
        "altura": 14,
        "peso": 3000,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/76.svg",
        "tipos": [
            {
                "id": "6",
                "nombre": "rock"
            },
            {
                "id": "5",
                "nombre": "ground"
            }
        ]
    },
    {
        "id": 77,
        "nombre": "ponyta",
        "vida": 50,
        "fuerza": 85,
        "defensa": 55,
        "velocidad": 55,
        "altura": 10,
        "peso": 300,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/77.svg",
        "tipos": [
            {
                "id": "10",
                "nombre": "fire"
            }
        ]
    },
    {
        "id": 78,
        "nombre": "rapidash",
        "vida": 65,
        "fuerza": 100,
        "defensa": 70,
        "velocidad": 70,
        "altura": 17,
        "peso": 950,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/78.svg",
        "tipos": [
            {
                "id": "10",
                "nombre": "fire"
            }
        ]
    },
    {
        "id": 79,
        "nombre": "slowpoke",
        "vida": 90,
        "fuerza": 65,
        "defensa": 65,
        "velocidad": 65,
        "altura": 12,
        "peso": 360,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/79.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            },
            {
                "id": "14",
                "nombre": "psychic"
            }
        ]
    },
    {
        "id": 80,
        "nombre": "slowbro",
        "vida": 95,
        "fuerza": 75,
        "defensa": 110,
        "velocidad": 110,
        "altura": 16,
        "peso": 785,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            },
            {
                "id": "14",
                "nombre": "psychic"
            }
        ]
    },
    {
        "id": 81,
        "nombre": "magnemite",
        "vida": 25,
        "fuerza": 35,
        "defensa": 70,
        "velocidad": 70,
        "altura": 3,
        "peso": 60,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/81.svg",
        "tipos": [
            {
                "id": "13",
                "nombre": "electric"
            },
            {
                "id": "9",
                "nombre": "steel"
            }
        ]
    },
    {
        "id": 82,
        "nombre": "magneton",
        "vida": 50,
        "fuerza": 60,
        "defensa": 95,
        "velocidad": 95,
        "altura": 10,
        "peso": 600,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/82.svg",
        "tipos": [
            {
                "id": "13",
                "nombre": "electric"
            },
            {
                "id": "9",
                "nombre": "steel"
            }
        ]
    },
    {
        "id": 84,
        "nombre": "doduo",
        "vida": 35,
        "fuerza": 85,
        "defensa": 45,
        "velocidad": 45,
        "altura": 14,
        "peso": 392,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/84.svg",
        "tipos": [
            {
                "id": "1",
                "nombre": "normal"
            },
            {
                "id": "3",
                "nombre": "flying"
            }
        ]
    },
    {
        "id": 85,
        "nombre": "dodrio",
        "vida": 60,
        "fuerza": 110,
        "defensa": 70,
        "velocidad": 70,
        "altura": 18,
        "peso": 852,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/85.svg",
        "tipos": [
            {
                "id": "1",
                "nombre": "normal"
            },
            {
                "id": "3",
                "nombre": "flying"
            }
        ]
    },
    {
        "id": 86,
        "nombre": "seel",
        "vida": 65,
        "fuerza": 45,
        "defensa": 55,
        "velocidad": 55,
        "altura": 11,
        "peso": 900,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/86.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 87,
        "nombre": "dewgong",
        "vida": 90,
        "fuerza": 70,
        "defensa": 80,
        "velocidad": 80,
        "altura": 17,
        "peso": 1200,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/87.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            },
            {
                "id": "15",
                "nombre": "ice"
            }
        ]
    },
    {
        "id": 88,
        "nombre": "grimer",
        "vida": 80,
        "fuerza": 80,
        "defensa": 50,
        "velocidad": 50,
        "altura": 9,
        "peso": 300,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/88.svg",
        "tipos": [
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 89,
        "nombre": "muk",
        "vida": 105,
        "fuerza": 105,
        "defensa": 75,
        "velocidad": 75,
        "altura": 12,
        "peso": 300,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/89.svg",
        "tipos": [
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 90,
        "nombre": "shellder",
        "vida": 30,
        "fuerza": 65,
        "defensa": 100,
        "velocidad": 100,
        "altura": 3,
        "peso": 40,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/90.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 91,
        "nombre": "cloyster",
        "vida": 50,
        "fuerza": 95,
        "defensa": 180,
        "velocidad": 180,
        "altura": 15,
        "peso": 1325,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/91.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            },
            {
                "id": "15",
                "nombre": "ice"
            }
        ]
    },
    {
        "id": 92,
        "nombre": "gastly",
        "vida": 30,
        "fuerza": 35,
        "defensa": 30,
        "velocidad": 30,
        "altura": 13,
        "peso": 1,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg",
        "tipos": [
            {
                "id": "8",
                "nombre": "ghost"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 93,
        "nombre": "haunter",
        "vida": 45,
        "fuerza": 50,
        "defensa": 45,
        "velocidad": 45,
        "altura": 16,
        "peso": 1,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg",
        "tipos": [
            {
                "id": "8",
                "nombre": "ghost"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 94,
        "nombre": "gengar",
        "vida": 60,
        "fuerza": 65,
        "defensa": 60,
        "velocidad": 60,
        "altura": 15,
        "peso": 405,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
        "tipos": [
            {
                "id": "8",
                "nombre": "ghost"
            },
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 95,
        "nombre": "onix",
        "vida": 35,
        "fuerza": 45,
        "defensa": 160,
        "velocidad": 160,
        "altura": 88,
        "peso": 2100,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/95.svg",
        "tipos": [
            {
                "id": "6",
                "nombre": "rock"
            },
            {
                "id": "5",
                "nombre": "ground"
            }
        ]
    },
    {
        "id": 96,
        "nombre": "drowzee",
        "vida": 60,
        "fuerza": 48,
        "defensa": 45,
        "velocidad": 45,
        "altura": 10,
        "peso": 324,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/96.svg",
        "tipos": [
            {
                "id": "14",
                "nombre": "psychic"
            }
        ]
    },
    {
        "id": 97,
        "nombre": "hypno",
        "vida": 85,
        "fuerza": 73,
        "defensa": 70,
        "velocidad": 70,
        "altura": 16,
        "peso": 756,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/97.svg",
        "tipos": [
            {
                "id": "14",
                "nombre": "psychic"
            }
        ]
    },
    {
        "id": 98,
        "nombre": "krabby",
        "vida": 30,
        "fuerza": 105,
        "defensa": 90,
        "velocidad": 90,
        "altura": 4,
        "peso": 65,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/98.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 99,
        "nombre": "kingler",
        "vida": 55,
        "fuerza": 130,
        "defensa": 115,
        "velocidad": 115,
        "altura": 13,
        "peso": 600,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/99.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 100,
        "nombre": "voltorb",
        "vida": 40,
        "fuerza": 30,
        "defensa": 50,
        "velocidad": 50,
        "altura": 5,
        "peso": 104,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg",
        "tipos": [
            {
                "id": "13",
                "nombre": "electric"
            }
        ]
    },
    {
        "id": 101,
        "nombre": "electrode",
        "vida": 60,
        "fuerza": 50,
        "defensa": 70,
        "velocidad": 70,
        "altura": 12,
        "peso": 666,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/101.svg",
        "tipos": [
            {
                "id": "13",
                "nombre": "electric"
            }
        ]
    },
    {
        "id": 102,
        "nombre": "exeggcute",
        "vida": 60,
        "fuerza": 40,
        "defensa": 80,
        "velocidad": 80,
        "altura": 4,
        "peso": 25,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/102.svg",
        "tipos": [
            {
                "id": "12",
                "nombre": "grass"
            },
            {
                "id": "14",
                "nombre": "psychic"
            }
        ]
    },
    {
        "id": 103,
        "nombre": "exeggutor",
        "vida": 95,
        "fuerza": 95,
        "defensa": 85,
        "velocidad": 85,
        "altura": 20,
        "peso": 1200,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/103.svg",
        "tipos": [
            {
                "id": "12",
                "nombre": "grass"
            },
            {
                "id": "14",
                "nombre": "psychic"
            }
        ]
    },
    {
        "id": 104,
        "nombre": "cubone",
        "vida": 50,
        "fuerza": 50,
        "defensa": 95,
        "velocidad": 95,
        "altura": 4,
        "peso": 65,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/104.svg",
        "tipos": [
            {
                "id": "5",
                "nombre": "ground"
            }
        ]
    },
    {
        "id": 105,
        "nombre": "marowak",
        "vida": 60,
        "fuerza": 80,
        "defensa": 110,
        "velocidad": 110,
        "altura": 10,
        "peso": 450,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/105.svg",
        "tipos": [
            {
                "id": "5",
                "nombre": "ground"
            }
        ]
    },
    {
        "id": 106,
        "nombre": "hitmonlee",
        "vida": 50,
        "fuerza": 120,
        "defensa": 53,
        "velocidad": 53,
        "altura": 15,
        "peso": 498,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/106.svg",
        "tipos": [
            {
                "id": "2",
                "nombre": "fighting"
            }
        ]
    },
    {
        "id": 107,
        "nombre": "hitmonchan",
        "vida": 50,
        "fuerza": 105,
        "defensa": 79,
        "velocidad": 79,
        "altura": 14,
        "peso": 502,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/107.svg",
        "tipos": [
            {
                "id": "2",
                "nombre": "fighting"
            }
        ]
    },
    {
        "id": 108,
        "nombre": "lickitung",
        "vida": 90,
        "fuerza": 55,
        "defensa": 75,
        "velocidad": 75,
        "altura": 12,
        "peso": 655,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/108.svg",
        "tipos": [
            {
                "id": "1",
                "nombre": "normal"
            }
        ]
    },
    {
        "id": 109,
        "nombre": "koffing",
        "vida": 40,
        "fuerza": 65,
        "defensa": 95,
        "velocidad": 95,
        "altura": 6,
        "peso": 10,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/109.svg",
        "tipos": [
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 110,
        "nombre": "weezing",
        "vida": 65,
        "fuerza": 90,
        "defensa": 120,
        "velocidad": 120,
        "altura": 12,
        "peso": 95,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/110.svg",
        "tipos": [
            {
                "id": "4",
                "nombre": "poison"
            }
        ]
    },
    {
        "id": 111,
        "nombre": "rhyhorn",
        "vida": 80,
        "fuerza": 85,
        "defensa": 95,
        "velocidad": 95,
        "altura": 10,
        "peso": 1150,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/111.svg",
        "tipos": [
            {
                "id": "5",
                "nombre": "ground"
            },
            {
                "id": "6",
                "nombre": "rock"
            }
        ]
    },
    {
        "id": 112,
        "nombre": "rhydon",
        "vida": 105,
        "fuerza": 130,
        "defensa": 120,
        "velocidad": 120,
        "altura": 19,
        "peso": 1200,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/112.svg",
        "tipos": [
            {
                "id": "5",
                "nombre": "ground"
            },
            {
                "id": "6",
                "nombre": "rock"
            }
        ]
    },
    {
        "id": 113,
        "nombre": "chansey",
        "vida": 250,
        "fuerza": 5,
        "defensa": 5,
        "velocidad": 5,
        "altura": 11,
        "peso": 346,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/113.svg",
        "tipos": [
            {
                "id": "1",
                "nombre": "normal"
            }
        ]
    },
    {
        "id": 114,
        "nombre": "tangela",
        "vida": 65,
        "fuerza": 55,
        "defensa": 115,
        "velocidad": 115,
        "altura": 10,
        "peso": 350,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/114.svg",
        "tipos": [
            {
                "id": "12",
                "nombre": "grass"
            }
        ]
    },
    {
        "id": 115,
        "nombre": "kangaskhan",
        "vida": 105,
        "fuerza": 95,
        "defensa": 80,
        "velocidad": 80,
        "altura": 22,
        "peso": 800,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/115.svg",
        "tipos": [
            {
                "id": "1",
                "nombre": "normal"
            }
        ]
    },
    {
        "id": 116,
        "nombre": "horsea",
        "vida": 30,
        "fuerza": 40,
        "defensa": 70,
        "velocidad": 70,
        "altura": 4,
        "peso": 80,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/116.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 117,
        "nombre": "seadra",
        "vida": 55,
        "fuerza": 65,
        "defensa": 95,
        "velocidad": 95,
        "altura": 12,
        "peso": 250,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/117.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 118,
        "nombre": "goldeen",
        "vida": 45,
        "fuerza": 67,
        "defensa": 60,
        "velocidad": 60,
        "altura": 6,
        "peso": 150,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/118.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 119,
        "nombre": "seaking",
        "vida": 80,
        "fuerza": 92,
        "defensa": 65,
        "velocidad": 65,
        "altura": 13,
        "peso": 390,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/119.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 120,
        "nombre": "staryu",
        "vida": 30,
        "fuerza": 45,
        "defensa": 55,
        "velocidad": 55,
        "altura": 8,
        "peso": 345,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/120.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            }
        ]
    },
    {
        "id": 121,
        "nombre": "starmie",
        "vida": 60,
        "fuerza": 75,
        "defensa": 85,
        "velocidad": 85,
        "altura": 11,
        "peso": 800,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/121.svg",
        "tipos": [
            {
                "id": "11",
                "nombre": "water"
            },
            {
                "id": "14",
                "nombre": "psychic"
            }
        ]
    },
    {
        "id": 122,
        "nombre": "mr-mime",
        "vida": 40,
        "fuerza": 45,
        "defensa": 65,
        "velocidad": 65,
        "altura": 13,
        "peso": 545,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/122.svg",
        "tipos": [
            {
                "id": "14",
                "nombre": "psychic"
            },
            {
                "id": "18",
                "nombre": "fairy"
            }
        ]
    },
    {
        "id": 123,
        "nombre": "scyther",
        "vida": 70,
        "fuerza": 110,
        "defensa": 80,
        "velocidad": 80,
        "altura": 15,
        "peso": 560,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/123.svg",
        "tipos": [
            {
                "id": "7",
                "nombre": "bug"
            },
            {
                "id": "3",
                "nombre": "flying"
            }
        ]
    }
]


module.exports = CACHE_POKEMON