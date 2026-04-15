/**
 * Torneos: cada edición incluye `results` y `players`.
 * Para regenerar desde archivos separados: coloca players.ts y results.ts y ejecuta `npm run merge:tournaments`.
 */
import type { PlayersData, ResultsData, TournamentOption } from "../types/data";

const players1: PlayersData  = [
  {
    id: 1,
    name: 'Frankito',
    team: 'Red Devils FC',
    photo: '/frankito.jpg',
  },
  {
    id: 2,
    name: 'Kanuto',
    team: 'Red Devils FC',
    photo: '',
  },
  {
    id: 3,
    name: 'Josue',
    team: 'Red Devils FC',
    photo: '',
  },
  {
    id: 4,
    name: 'Wachi',
    team: 'Red Devils FC',
    photo: '',
  },
  {
    id: 5,
    name: 'Wincho',
    team: 'Red Devils FC',
    photo: '',
  },
  {
    id: 6,
    name: 'Renzo',
    team: 'Red Devils FC',
    photo: '',
  },
    {
    id: 7,
    name: 'Garfield',
    team: 'Red Devils FC',
    photo: '',
  },
  {
    id: 8,
    name: 'Omar',
    team: 'Realcoholicos FC',
    photo: '',
  },
  {
    id: 9,
    name: 'Pedro',
    team: 'Realcoholicos FC',
    photo: '',
  },
  {
    id: 10,
    name: 'Heraldo',
    team: 'Realcoholicos FC',
    photo: '',
  },
  {
    id: 11,
    name: 'Lucho',
    team: 'Realcoholicos FC',
    photo: '',
  },
  {
    id: 12,
    name: 'Russo',
    team: 'Realcoholicos FC',
    photo: '/russo.jpg',
  },
  {
    id: 13,
    name: 'Favio',
    team: 'Realcoholicos FC',
    photo: '',
  },
  {
    id: 14,
    name: 'Sebastian',
    team: 'Realcoholicos FC',
    photo: '',
  },
      {
    id: 15,
    name: 'Jozua',
    team: 'FC Real Polaco',
    photo: '/jozua.jpg',
  },
  {
    id: 16,
    name: 'Rodrigo',
    team: 'FC Real Polaco',
    photo: '',
  },
  {
    id: 17,
    name: 'Charly',
    team: 'FC Real Polaco',
    photo: '',
  },
  {
    id: 18,
    name: 'Edder',
    team: 'FC Real Polaco',
    photo: '',
  },
  {
    id: 19,
    name: 'Pitbull',
    team: 'FC Real Polaco',
    photo: '',
  },
  {
    id: 20,
    name: 'Yair',
    team: 'FC Real Polaco',
    photo: '',
  },
  {
    id: 21,
    name: 'Liam',
    team: 'FC Real Polaco',
    photo: '',
  },
]

const players2: PlayersData  = [
  {
    id: 1,
    name: 'Frankito',
    team: 'Red Devils FC',
    photo: '/frankito.jpg',
  },
  {
    id: 2,
    name: 'Kanuto',
    team: 'Red Devils FC',
    photo: '',
  },
  {
    id: 3,
    name: 'Josue',
    team: 'Red Devils FC',
    photo: '/josue.png',
  },
  {
    id: 4,
    name: 'Wachi',
    team: 'Red Devils FC',
    photo: '',
  },
  {
    id: 5,
    name: 'Favio',
    team: 'Red Devils FC',
    photo: '',
  },
  {
    id: 6,
    name: 'Pedro',
    team: 'Red Devils FC',
    photo: '',
  },
    {
    id: 7,
    name: 'Lucho',
    team: 'Red Devils FC',
    photo: '',
  },
  {
    id: 8,
    name: 'Daniel',
    team: 'Realcoholicos FC',
    photo: '/daniel.png',
  },
  {
    id: 9,
    name: 'Jose Daniel',
    team: 'Realcoholicos FC',
    photo: '',
  },
  {
    id: 10,
    name: 'Heraldo',
    team: 'Realcoholicos FC',
    photo: '',
  },
  {
    id: 11,
    name: 'Joel',
    team: 'Realcoholicos FC',
    photo: '',
  },
  {
    id: 12,
    name: 'Russo',
    team: 'Realcoholicos FC',
    photo: '/russo.jpg',
  },
  {
    id: 13,
    name: 'Wincho',
    team: 'Realcoholicos FC',
    photo: '',
  },
  {
    id: 14,
    name: 'Sebastian',
    team: 'Realcoholicos FC',
    photo: '',
  },
      {
    id: 15,
    name: 'Jozua',
    team: 'FC Real Polaco',
    photo: '/jozua.jpg',
  },
  {
    id: 16,
    name: 'Rodrigo',
    team: 'FC Real Polaco',
    photo: '',
  },
  {
    id: 17,
    name: 'Charly',
    team: 'FC Real Polaco',
    photo: '/charly.jpg',
  },
  {
    id: 18,
    name: 'Omar',
    team: 'FC Real Polaco',
    photo: '/omar.jpg',
  },
  {
    id: 19,
    name: 'Pitbull',
    team: 'FC Real Polaco',
    photo: '',
  },
  {
    id: 20,
    name: 'Yair',
    team: 'FC Real Polaco',
    photo: '',
  },
  {
    id: 21,
    name: 'Liam',
    team: 'FC Real Polaco',
    photo: '',
  },
  {
    id: 22,
    name: 'Mathias',
    team: 'FC Real Polaco',
    photo: '',
  },
]

const players3: PlayersData  = [
  // Equipo Los Ñaños FC
  {
    id: 1,
    name: 'Daniel',
    team: 'Los Ñaños FC',
    photo: '/daniel.png',
  },
  {
    id: 2,
    name: 'Jose Daniel',
    team: 'Los Ñaños FC',
    photo: '/default.jpg',
  },
  {
    id: 3,
    name: 'Kanuto',
    team: 'Los Ñaños FC',
    photo: '/kanuto.jpg',
  },
  {
    id: 4,
    name: 'Antony',
    team: 'Los Ñaños FC',
    photo: '',
  },
  {
    id: 5,
    name: 'Russo',
    team: 'Los Ñaños FC',
    photo: '',
  },
  {
    id: 6,
    name: 'Wachi',
    team: 'Los Ñaños FC',
    photo: '',
  },
    {
    id: 7,
    name: 'Yair',
    team: 'Los Ñaños FC',
    photo: '',
  },
  {
    id: 8,
    name: 'Chinin',
    team: 'Los Ñaños FC',
    photo: '/default.jpg',
  },
  // Equipo FC Coca Juniors
  {
    id: 9,
    name: 'Liam',
    team: 'FC Coca Juniors',
    photo: '',
  },
  {
    id: 10,
    name: 'Frankito',
    team: 'FC Coca Juniors',
    photo: '',
  },
  {
    id: 11,
    name: 'Jozua',
    team: 'FC Coca Juniors',
    photo: '',
  },
  {
    id: 12,
    name: 'Omar',
    team: 'FC Coca Juniors',
    photo: '/russo.jpg',
  },
  {
    id: 13,
    name: 'Heraldo',
    team: 'FC Coca Juniors',
    photo: '',
  },
  {
    id: 14,
    name: 'Pitbull',
    team: 'FC Coca Juniors',
    photo: '',
  },
      {
    id: 15,
    name: 'Lucho',
    team: 'FC Coca Juniors',
    photo: '',
  },
  {
    id: 16,
    name: 'Wincho',
    team: 'FC Coca Juniors',
    photo: '',
  },
  // Equipo Blue Label FC
  {
    id: 17,
    name: 'Sebastian',
    team: 'Blue Label FC',
    photo: '',
  },
  {
    id: 18,
    name: 'Charly',
    team: 'Blue Label FC',
    photo: '',
  },
  {
    id: 19,
    name: 'Piero',
    team: 'Blue Label FC',
    photo: '',
  },
  {
    id: 20,
    name: 'Josue',
    team: 'Blue Label FC',
    photo: '',
  },
  {
    id: 21,
    name: 'Mathias',
    team: 'Blue Label FC',
    photo: '',
  },
  {
    id: 22,
    name: 'Pedro',
    team: 'Blue Label FC',
    photo: '',
  },
  {
    id: 23,
    name: 'Ronaldiño',
    team: 'Blue Label FC',
    photo: '',
  },
  {
    id: 24,
    name: 'Diego',
    team: 'Blue Label FC',
    photo: '',
  },
]

const players4: PlayersData  = [
  // FC Nueva generación
  {
    id: 1,
    name: 'Jozua',
    team: 'FC Nueva generación',
    photo: '/jozua.jpg',
  },
  {
    id: 2,
    name: 'Tio Fritz',
    team: 'FC Nueva generación',
    photo: '/default.jpg',
  },
  {
    id: 3,
    name: 'Piby',
    team: 'FC Nueva generación',
    photo: '/default.jpg',
  },
  {
    id: 4,
    name: 'Antony C',
    team: 'FC Nueva generación',
    photo: '/default.jpg',
  },
  {
    id: 5,
    name: 'Antony',
    team: 'FC Nueva generación',
    photo: '/default.jpg',
  },
  {
    id: 6,
    name: 'Wincho',
    team: 'FC Nueva generación',
    photo: '/wincho.png',
  },
  {
    id: 7,
    name: 'Favio',
    team: 'FC Nueva generación',
    photo: '/default.jpg',
  },
  // Sport Matozoide
  {
    id: 8,
    name: 'Omar',
    team: 'Sport Matozoide',
    photo: '/omar.jpg',
  },
  {
    id: 9,
    name: 'Kanuto',
    team: 'Sport Matozoide',
    photo: '/default.jpg',
  },
  {
    id: 10,
    name: 'Mathias',
    team: 'Sport Matozoide',
    photo: '/default.jpg',
  },
  {
    id: 11,
    name: 'Ronaldiño',
    team: 'Sport Matozoide',
    photo: '/ronaldiño.jpg',
  },
  {
    id: 12,
    name: 'Liam',
    team: 'Sport Matozoide',
    photo: '/default.jpg',
  },
  {
    id: 13,
    name: 'Heraldo',
    team: 'Sport Matozoide',
    photo: '/default.jpg',
  },
  {
    id: 14,
    name: 'Sebastian',
    team: 'Sport Matozoide',
    photo: '/default.jpg',
  },
  // TEMETO TABA FC
  {
    id: 15,
    name: 'Charly',
    team: 'TEMETO TABA FC',
    photo: '/charly.jpg',
  },
  {
    id: 16,
    name: 'Josue',
    team: 'TEMETO TABA FC',
    photo: '/josue.png',
  },
  {
    id: 17,
    name: 'Frankito',
    team: 'TEMETO TABA FC',
    photo: '/frankito.jpg',
  },
  {
    id: 18,
    name: 'Piero',
    team: 'TEMETO TABA FC',
    photo: '/piero.png',
  },
  {
    id: 19,
    name: 'Geampierre',
    team: 'TEMETO TABA FC',
    photo: '/default.jpg',
  },
  {
    id: 20,
    name: 'Pedro',
    team: 'TEMETO TABA FC',
    photo: '/default.jpg',
  },
  {
    id: 21,
    name: 'Lucho',
    team: 'TEMETO TABA FC',
    photo: '/default.jpg',
  },
]

const currentPlayers: PlayersData  = [
  // Peña Independiente 76
  {
    id: 1,
    name: 'Oscar Castro',
    team: 'Peña Independiente 76',
    photo: '/default.jpg',
  },
  {
    id: 2,
    name: 'Jose Oqueña',
    team: 'Peña Independiente 76',
    photo: '/default.jpg',
  },
  {
    id: 3,
    name: 'Carlos Pachas',
    team: 'Peña Independiente 76',
    photo: '/default.jpg',
  },
  {
    id: 4,
    name: 'Antony C',
    team: 'Peña Independiente 76',
    photo: '/default.jpg',
  },
  {
    id: 5,
    name: 'Mathias Chumacero',
    team: 'Peña Independiente 76',
    photo: '/default.jpg',
  },
  {
    id: 6,
    name: 'Juan Piero',
    team: 'Peña Independiente 76',
    photo: '/wincho.png',
  },
  {
    id: 7,
    name: 'Ernesto Pino',
    team: 'Peña Independiente 76',
    photo: '/default.jpg',
  },
  {
    id: 8,
    name: 'Cuñado Antony',
    team: 'Peña Independiente 76',
    photo: '/default.jpg',
  },
  // Temetotaba FC
  {
    id: 9,
    name: 'Charly ',
    team: 'Temetotaba FC',
    photo: '/default.jpg',
  },
  {
    id: 10,
    name: 'Geampierre',
    team: 'Temetotaba FC',
    photo: '/default.jpg',
  },
  {
    id: 11,
    name: 'Frankito',
    team: 'Temetotaba FC',
    photo: '/default.jpg',
  },
  {
    id: 12,
    name: 'Josue',
    team: 'Temetotaba FC',
    photo: '/default.jpg',
  },
  {
    id: 13,
    name: 'Lucho',
    team: 'Temetotaba FC',
    photo: '/default.jpg',
  },
  {
    id: 14,
    name: 'Pedro',
    team: 'Temetotaba FC',
    photo: '/default.jpg',
  },
  {
    id: 15,
    name: 'Jesus',
    team: 'Temetotaba FC',
    photo: '/default.jpg',
  },
  {
    id: 16,
    name: 'Marcelo',
    team: 'Temetotaba FC',
    photo: '/default.jpg',
  },
  // Purito Palao FC
  {
    id: 17,
    name: 'Omar',
    team: 'Purito Palao FC',
    photo: '/default.jpg',
  },
  {
    id: 18,
    name: 'Russo',
    team: 'Purito Palao FC',
    photo: '/default.jpg',
  },
  {
    id: 19,
    name: 'Antony',
    team: 'Purito Palao FC',
    photo: '/default.jpg',
  },
  {
    id: 20,
    name: 'Liam',
    team: 'Purito Palao FC',
    photo: '/default.jpg',
  },
  {
    id: 21,
    name: 'Mathias',
    team: 'Purito Palao FC',
    photo: '/default.jpg',
  },
  {
    id: 22,
    name: 'Kevin',
    team: 'Purito Palao FC',
    photo: '/default.jpg',
  },
  {
    id: 23,
    name: 'Wincho',
    team: 'Purito Palao FC',
    photo: '/default.jpg',
  },
  {
    id: 24,
    name: 'Favio',
    team: 'Purito Palao FC',
    photo: '/default.jpg',
  },
  // FC Pajagoza
  {
    id: 25,
    name: 'Jozua',
    team: 'FC Pajagoza',
    photo: '/default.jpg',
  },
  {
    id: 26,
    name: 'Kanuto',
    team: 'FC Pajagoza',
    photo: '/default.jpg',
  },
  {
    id: 27,
    name: 'Piby',
    team: 'FC Pajagoza',
    photo: '/default.jpg',
  },
  {
    id: 28,
    name: 'Joaquin',
    team: 'FC Pajagoza',
    photo: '/default.jpg',
  },
  {
    id: 29,
    name: 'Jose Daniel',
    team: 'FC Pajagoza',
    photo: '/default.jpg',
  },
  {
    id: 30,
    name: 'Heraldo',
    team: 'FC Pajagoza',
    photo: '/default.jpg',
  },
  {
    id: 31,
    name: 'Tio Fritz',
    team: 'FC Pajagoza',
    photo: '/default.jpg',
  },
  {
    id: 32,
    name: 'Harry',
    team: 'FC Pajagoza',
    photo: '/default.jpg',
  },
]

const results1: ResultsData  = [
  {
    id: 1,
    name: 'Fecha 1',
    date: 'Jugado el 18 de Junio del 2025',
    matches: [
      {
        home: 'Red Devils FC',
        away: 'Verde',
        homeScorers: ['Josue', 'Frankito'],
        awayScorers: ['Sebastian'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: ['Charly', 'Rodrigo', 'Rodrigo', 'Liam', 'Rodrigo', 'Jozua', 'Liam', 'Charly'],
        awayScorers: ['Josue', 'Kanuto', 'Josue', 'Frankito', 'Josue', 'Wachi', 'Kanuto'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: ['Omar', 'Omar', 'Pedro'],
        awayScorers: ['Rodrigo', 'Jozua', 'Rodrigo', 'Charly', 'Jozua'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Omar', 'Omar', 'Russo', 'Pedro', 'Russo', 'Omar'],
        awayScorers: ['Frankito', 'Josue'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Frankito', 'Frankito', 'Frankito', 'Frankito', 'Frankito', 'Frankito'],
        awayScorers: ['Liam', 'Charly'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Rodrigo', 'Rodrigo', 'Jozua'],
        awayScorers: ['Russo', 'Omar', 'Russo', 'Lucho', 'Russo'],
      }
    ],
  },
  {
    id: 2,
    name: 'Fecha 2',
    date: 'Jugado el 25 de Junio del 2025',
    matches: [
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: ['Russo', 'Russo', 'Russo'],
        awayScorers: [],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Russo', 'Russo', 'Russo', 'Omar'],
        awayScorers: ['Kanuto', 'Kanuto', 'Kanuto', 'Frankito'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: ['Jozua', 'Jozua', 'Charly'],
        awayScorers: ['Frankito', 'Josue', 'Kanuto'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Charly', 'Charly'],
        awayScorers: ['Russo', 'Omar', 'Omar'],
      },
      {
        home: 'Red Devils FC',
        away: 'Realcoholicos FC',
        homeScorers: ['Kanuto', 'Kanuto', 'Wachi', 'Frankito'],
        awayScorers: ['Omar', 'Russo'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Wachi', 'Wincho', 'Wincho'],
        awayScorers: ['Charly', 'Jozua'],
      }
    ],
  },
  {
    id: 3,
    name: 'Fecha 3',
    date: 'Jugado el 02 de Julio del 2025',
    matches: [
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: ['Rodrigo', 'Charly', 'Liam'],
        awayScorers: ['Frankito'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Charly', 'Liam', 'Jozua', 'Jozua'],
        awayScorers: ['Pedro', 'Russo'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Pedro', 'Omar'],
        awayScorers: [],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Josue', 'Frankito'],
        awayScorers: ['Jozua', 'Jozua', 'Jozua', 'Jozua', 'Liam'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: [],
        awayScorers: ['Liam', 'Liam', 'Rodrigo'],
      },
      {
        home: 'Red Devils FC',
        away: 'Realcoholicos FC',
        homeScorers: ['Frankito', 'Josue'],
        awayScorers: ['Russo', 'Russo', 'Russo'],
      }
    ],
  },
  {
    id: 4,
    name: 'Fecha 4',
    date: 'Jugado el 09 de Julio del 2025',
    matches: [
      {
        home: 'Red Devils FC',
        away: 'Realcoholicos FC',
        homeScorers: ['Kanuto'],
        awayScorers: [],
      },
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: ['Jozua'],
        awayScorers: ['Kanuto', 'Josue', 'Josue', 'Josue', 'Frankito', 'Frankito'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: ['Heraldo'],
        awayScorers: ['Charly', 'Charly', 'Rodrigo'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Russo', 'Russo', 'Heraldo', 'Omar', 'Kanuto', 'Sebastian'],
        awayScorers: ['Frankito'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Frankito', 'Frankito', 'Frankito', 'Wincho'],
        awayScorers: ['Charly'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Jozua', 'Jozua', 'Rodrigo', 'Charly'],
        awayScorers: ['Lucho', 'Russo'],
      }
    ],
  },
  {
    id: 5,
    name: 'Fecha 5',
    date: 'Jugado el 16 de Julio del 2025',
    matches: [
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: [],
        awayScorers: ['Rodrigo', 'Jozua', 'Liam', 'Liam'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Pedro', 'Heraldo', 'Russo', 'Russo', 'Russo'],
        awayScorers: ['Wincho', 'Kanuto', 'Frankito', 'Frankito', 'Josue', 'Josue'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: ['Jozua', 'Jozua', 'Liam', 'Liam', 'Liam', 'Rodrigo'],
        awayScorers: ['Frankito', 'Frankito', 'Josue'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Jozua', 'Liam', 'Liam'],
        awayScorers: [],
      },
      {
        home: 'Red Devils FC',
        away: 'Realcoholicos FC',
        homeScorers: ['Wincho', 'Wincho', 'Josue'],
        awayScorers: ['Russo', 'Russo', 'Russo', 'Russo', 'Pedro'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Frankito', 'Frankito', 'Frankito'],
        awayScorers: ['Liam', 'Liam', 'Rodrigo', 'Jozua', 'Jozua', 'Jozua', 'Jozua', 'Jozua'],
      }
    ],
  },
  {
    id: 6,
    name: 'Fecha 6',
    date: 'Jugado el 23 de Julio del 2025',
    matches: [
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: [],
        awayScorers: ['Frankito', 'Frankito', 'Kanuto', 'Wincho'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: [],
        awayScorers: ['Russo', 'Omar', 'Omar'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Pedro', 'Omar', 'Lucho'],
        awayScorers: ['Kanuto', 'Kanuto', 'Josue', 'Josue'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Charly', 'Charly', 'Kanuto', 'Kanuto', 'Frankito', 'Frankito'],
        awayScorers: ['Liam', 'Liam', 'Wincho'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: ['Russo', 'Russo', 'Russo', 'Russo', 'Russo', 'Russo', 'Russo'],
        awayScorers: ['Liam'],
      },
      {
        home: 'Red Devils FC',
        away: 'Realcoholicos FC',
        homeScorers: ['Wincho', 'Kanuto', 'Kanuto', 'Frankito', 'Frankito'],
        awayScorers: ['Omar', 'Omar', 'Omar', 'Russo', 'Russo'],
      }
    ],
  },
  {
    id: 7,
    name: 'Fecha 7',
    date: 'Jugado el 30 de Julio del 2025',
    matches: [
      {
        home: 'Red Devils FC',
        away: 'Realcoholicos FC',
        homeScorers: ['Josue', 'Josue', 'Wachi', 'Kanuto', 'Wincho', 'Wincho'],
        awayScorers: ['Lucho', 'Russo'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: ['Rodrigo', 'Rodrigo', 'Rodrigo', 'Liam'],
        awayScorers: ['Kanuto'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: ['Russo', 'Russo'],
        awayScorers: ['Harry', 'Liam', 'Jozua', 'Jozua', 'Jozua', 'Jozua'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: [],
        awayScorers: ['Josue'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: [],
        awayScorers: ['Liam', 'Rodrigo'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Rodrigo'],
        awayScorers: ['Russo', 'Russo', 'Russo', 'Lucho'],
      }
    ],
  },
];

const results2 : ResultsData = [
  {
    id: 1,
    name: 'Fecha 1',
    date: 'Jugado el 13 de Agosto del 2025',
    matches: [
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: ['Omar'],
        awayScorers: ['Kanuto', 'Frankito', 'Frankito', 'Josue', 'Lucho'],
      },
      {
        home: 'Red Devils FC',
        away: 'Realcoholicos FC',
        homeScorers: ['Josue'],
        awayScorers: ['Daniel', 'Russo', 'Russo', 'Russo'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: ['Russo'],
        awayScorers: [],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Frankito', 'Frankito', 'Kanuto'],
        awayScorers: ['Liam', 'Omar', 'Liam'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Daniel'],
        awayScorers: ['Frankito', 'Frankito', 'Frankito', 'Frankito'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Rodrigo', 'Rodrigo', 'Liam', 'Liam', 'Liam'],
        awayScorers: ['Jose Daniel', 'Joel'],
      }
    ],
  },
  {
    id: 2,
    name: 'Fecha 2',
    date: 'Jugado el 20 de Agosto del 2025',
    matches: [
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Harry', 'Jozua', 'Jozua', 'Omar'],
        awayScorers: ['Daniel'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Daniel', 'Jose Daniel'],
        awayScorers: ['Josue', 'Josue', 'Josue'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Pedro', 'Pedro', 'Pedro', 'Josue', 'Josue'],
        awayScorers: ['Jozua', 'Charly'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Jozua', 'Charly'],
        awayScorers: ['Russo', 'Joel'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Daniel', 'Daniel'],
        awayScorers: ['Lucho', 'Lucho', 'Josue', 'Josue'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Lucho', 'Lucho', 'Kanuto', 'Josue', 'Pedro', 'Pedro'],
        awayScorers: ['Omar'],
      }
    ],
  },
  {
    id: 3,
    name: 'Fecha 3',
    date: 'Jugado el 27 de Agosto del 2025',
    matches: [
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Daniel'],
        awayScorers: ['Lucho', 'Josue', 'Josue'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Pitbull', 'Pitbull', 'Jozua', 'Charly'],
        awayScorers: ['Daniel'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Josue'],
        awayScorers: ['Jozua', 'Liam', 'Liam'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Daniel', 'Daniel', 'Daniel', 'Joel'],
        awayScorers: ['Josue'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Mathias'],
        awayScorers: ['Daniel', 'Russo', 'Russo', 'Joel'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Josue', 'Pedro', 'Lucho'],
        awayScorers: ['Omar', 'Omar', 'Mathias', 'Mathias', 'Mathias', 'Jozua', 'Liam'],
      }
    ],
  },
  {
    id: 4,
    name: 'Fecha 4',
    date: 'Jugado el 03 de Setiembre del 2025',
    matches: [
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: [],
        awayScorers: ['Josue', 'Josue', 'Lucho'],
      },
      {
        home: 'Red Devils FC',
        away: 'Realcoholicos FC',
        homeScorers: [],
        awayScorers: ['Daniel', 'Russo', 'Russo'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: ['Joel', 'Daniel', 'Daniel', 'Jose Daniel', 'Russo'],
        awayScorers: ['Jozua', 'Omar', 'Omar'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: [],
        awayScorers: ['Jozua'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Daniel', 'Daniel', 'Russo'],
        awayScorers: ['Kanuto', 'Kanuto'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Mathias', 'Jozua'],
        awayScorers: ['Daniel', 'Daniel', 'Daniel'],
      }
    ],
  },
  {
    id: 5,
    name: 'Fecha 5',
    date: 'Jugado el 10 de Setiembre del 2025',
    matches: [
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Jozua'],
        awayScorers: [],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Daniel', 'Daniel', 'Daniel', 'Daniel', 'Sebastian'],
        awayScorers: ['Kanuto'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: [],
        awayScorers: ['Jozua', 'Omar', 'Yair', 'Jozua'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: [],
        awayScorers: ['Daniel', 'Daniel', 'Jose Daniel', 'Joel'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Daniel', 'Daniel', 'Daniel', 'Joel', 'Joel'],
        awayScorers: ['Lucho', 'Kanuto', 'Kanuto'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Kanuto', 'Kanuto', 'Kanuto', 'Kanuto', 'Pedro', 'Pedro', 'Pedro', 'Pedro', 'Pedro', 'Lucho'],
        awayScorers: ['Jozua', 'Charly'],
      }
    ],
  },
  {
    id: 6,
    name: 'Fecha 6',
    date: 'Jugado el 17 de Setiembre del 2025',
    matches: [
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: [],
        awayScorers: ['Favio'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: [],
        awayScorers: [],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: [],
        awayScorers: ['Jozua', 'Mathias'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'Red Devils FC',
        homeScorers: ['Wincho', 'Russo', 'Joel'],
        awayScorers: ['Josue', 'Kanuto'],
      },
      {
        home: 'FC Real Polaco',
        away: 'Realcoholicos FC',
        homeScorers: ['Omar', 'Jozua', 'Liam', 'Liam', 'Liam', 'Mathias'],
        awayScorers: ['Daniel'],
      },
      {
        home: 'Red Devils FC',
        away: 'FC Real Polaco',
        homeScorers: ['Josue', 'Kanuto', 'Kanuto'],
        awayScorers: ['Jozua', 'Jozua', 'Omar', 'Liam', 'Mathias'],
      }
    ],
  },
  {
    id: 7,
    name: 'Fecha 7',
    date: 'Jugado el 24 de Setiembre del 2025',
    matches: [
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: ['Mathias', 'Mathias'],
        awayScorers: ['Josue', 'Josue', 'Kanuto', 'Kanuto', 'Kanuto'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: [],
        awayScorers: ['Mathias', 'Liam'],
      },
      {
        home: 'Red Devils FC',
        away: 'Realcoholicos FC',
        homeScorers: ['Kanuto'],
        awayScorers: [],
      },
      {
        home: 'FC Real Polaco',
        away: 'Red Devils FC',
        homeScorers: ['Kanuto', 'Antony'],
        awayScorers: ['Omar', 'Jozua'],
      },
      {
        home: 'Realcoholicos FC',
        away: 'FC Real Polaco',
        homeScorers: ['Russo'],
        awayScorers: ['Mathias', 'Mathias', 'Jozua'],
      },
      {
        home: 'Red Devils FC',
        away: 'Realcoholicos FC',
        homeScorers: ['Josue', 'Josue', 'Kanuto', 'Pedro', 'Pedro'],
        awayScorers: ['Joel'],
      }
    ],
  },
];

const results3: ResultsData = [
  {
    id: 1,
    name: 'Fecha 1',
    date: 'Jugado el 16 de Octubre del 2025',
    mvp: {
      name: 'Josue',
      image: 'josue.png',
    },
    matches: [
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: ['Frankito', 'Frankito', 'Frankito'],
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: ['Jozua', 'Jozua', 'Omar', 'Omar', 'Frankito', 'Frankito'],
        awayScorers: ['Mathias', 'Mathias', 'Josue', 'Josue'],
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: ['Charly', 'Charly', 'Josue', 'Ronaldiño'],
        awayScorers: ['Russo'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Russo', 'Russo', 'Antony'],
        awayScorers: ['Frankito', 'Frankito', 'Heraldo', 'Jozua'],
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: ['Frankito', 'Frankito', 'Omar', 'Omar'],
        awayScorers: ['Josue', 'Pedro', 'Pedro'],
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: ['Pedro', 'Diego', 'Charly', 'Charly', 'Charly'],
        awayScorers: ['Russo'],
      }
    ],
  },
  {
    id: 2,
    name: 'Fecha 2',
    date: 'Miércoles 23 de Octubre del 2025',
    mvp: {
      name: 'Jozua',
      image: 'jozua.jpg',
    },
    matches: [
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Josue', 'Pedro'],
        awayScorers: ['Frankito', 'Jozua', 'Liam'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: ['Antony'],
        awayScorers: ['Charly'],
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: [],
        awayScorers: ['Jose Daniel', 'Jose Daniel', 'Russo'],
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Mathias', 'Mathias', 'Josue'],
        awayScorers: ['Jozua'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: ['Daniel', 'Daniel', 'Daniel', 'Russo'],
        awayScorers: ['Mathias'],
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: ['Omar', 'Jozua', 'Jozua', 'Jozua'],
        awayScorers: ['Russo', 'Russo', 'Daniel', 'Jose Daniel'],
      },
    ],
  },
  {
    id: 3,
    name: 'Fecha 3',
    date: 'Miércoles 29 de Octubre del 2025',
    mvp: {
      name: 'Wincho',
      image: 'wincho.png',
    },
    matches: [
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: ['Kanuto', 'Kanuto'],
        awayScorers: ['Josue', 'Josue', 'Piero', 'Charly'],
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: ['Wincho', 'Wincho'],
        awayScorers: ['Jose Daniel', 'Jose Daniel', 'Antony', 'Kanuto'],
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Josue', 'Josue', 'Charly'],
        awayScorers: ['Jozua'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: ['Jose Daniel', 'Jose Daniel'],
        awayScorers: ['Piero', 'Ronaldiño', 'Diego', 'Ronaldiño', 'Mathias', 'Ronaldiño', 'Piero'],
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: ['Jozua', 'Jozua'],
        awayScorers: ['Kanuto', 'Jose Daniel'],
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Pedro', 'Piero', 'Josue'],
        awayScorers: ['Frankito', 'Liam'],
      }
    ],
  },
  {
    id: 4,
    name: 'Fecha 4',
    date: 'Miércoles 5 de Noviembre del 2025',
    mvp: {
      name: 'Ronaldiño',
      image: 'ronaldiño.jpg',
    },
    matches: [
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Antony'],
        awayScorers: ['Jozua', 'Omar']
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: ['Omar', 'Omar', 'Frankito', 'Frankito', 'Frankito'],
        awayScorers: ['Mathias'],
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: ['Diego', 'Ronaldiño'],
        awayScorers: ['Daniel', 'Daniel', 'Antony', 'Fideo', 'Fideo', 'Fideo'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Antony', 'Daniel', 'Daniel'],
        awayScorers: ['Jozua', 'Jozua', 'Omar', 'Frankito', 'Frankito'],
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Charly', 'Ronaldiño', 'Pedro'],
        awayScorers: ['Jozua', 'Jozua', 'Jozua', 'Jozua', 'Frankito'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: ['Jose Daniel', 'Jose Daniel', 'Antony'],
        awayScorers: ['Charly', 'Ronaldiño', 'Ronaldiño', 'Ronaldiño', 'Mathias'],
      }
    ],
  },
  {
    id: 5,
    name: 'Fecha 5',
    date: 'Miércoles 12 de Noviembre del 2025',
    mvp: {
      name: 'Russo',
      image: 'russo.jpg',
    },
    matches: [
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Charly', 'Charly', 'Charly'],
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: ['Russo', 'Fideo', 'Jose Daniel', 'Jose Daniel'],
        awayScorers: ['Charly'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Russo', 'Russo', 'Antony'],
        awayScorers: ['Omar'],
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: ['Omar', 'Omar'],
        awayScorers: [],
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: ['Jose Daniel', 'Jose Daniel', 'Antony'],
        awayScorers: ['Mathias', 'Mathias', 'Mathias', 'Piero', 'Piero', 'Ronaldiño', 'Ronaldiño'],
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: ['Jozua', 'Jozua', 'Jozua', 'Jozua', 'Omar'],
        awayScorers: ['Antony', 'Fideo', 'Fideo', 'Jose Daniel', 'Russo'],
      }
    ],
  },
  {
    id: 6,
    name: 'Fecha 6',
    date: 'Miércoles 19 de Noviembre del 2025',
    mvp: {
      name: 'Ronaldiño',
      image: 'ronaldiño.jpg',
    },
    matches: [
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: [],
        awayScorers: ['Mathias'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Jose Daniel', 'Jose Daniel', 'Antony', 'Kanuto', 'Kanuto'],
        awayScorers: ['Frankito', 'Frankito', 'Omar', 'Wincho'],
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Charly', 'Charly'],
        awayScorers: ['Frankito', 'Liam', 'Jozua'],
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: ['Pedro', 'Piero', 'Piero', 'Piero', 'Piero', 'Ronaldiño'],
        awayScorers: ['Antony'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Russo', 'Russo', 'Russo', 'Fideo'],
        awayScorers: ['Frankito', 'Frankito', 'Omar'],
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Ronaldiño', 'Ronaldiño', 'Ronaldiño', 'Ronaldiño', 'Josue', 'Piero'],
        awayScorers: ['Liam', 'Wincho'],
      }
    ],
  },
  {
    id: 7,
    name: 'Fecha 7',
    date: 'Miércoles 26 de Noviembre del 2025',
    mvp: {
      name: 'Omar',
      image: 'omar.jpg',
    },
    matches: [
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Antony'],
        awayScorers: ['Omar'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: ['Daniel'],
        awayScorers: ['Josue', 'Pedro', 'Diego'],
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: [],
        awayScorers: ['Omar', 'Jozua'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Jose Daniel', 'Daniel', 'Kanuto'],
        awayScorers: ['Liam', 'Liam', 'Omar'],
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: ['Charly'],
        awayScorers: ['Daniel', 'Fideo', 'Jose Daniel', 'Jose Daniel'],
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Charly', 'Pedro', 'Pedro', 'Mathias'],
        awayScorers: ['Omar', 'Omar', 'Omar', 'Jozua', 'Jozua', 'Jozua', 'Frankito'],
      }
    ],
  },
  {
    id: 8,
    name: 'Fecha 8',
    mvp: {
      name: 'Piero',
      image: 'piero.png',
    },
    date: 'Miércoles 3 de Diciembre del 2025',
    matches: [
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Josue', 'Piero'],
        awayScorers: ['Frankito', 'Frankito'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: ['Gianpol', 'Jose Daniel', 'Jose Daniel'],
        awayScorers: ['Charly', 'Piero', 'Piero', 'Diego'],
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: ['Liam', 'Liam', 'Liam', 'Jozua', 'Frankito', 'Frankito'],
        awayScorers: ['Jose Daniel', 'Antony', 'Gianpol', 'Gianpol', 'Gianpol'],
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: ['Piero', 'Piero'],
        awayScorers: ['Jozua'],
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: ['Gianpol'],
        awayScorers: ['Sebastian', 'Josue', 'Piero', 'Piero'],
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: ['Jozua', 'Jozua', 'Jozua', 'Jozua', 'Frankito', 'Frankito', 'Frankito'],
        awayScorers: ['Gianpol', 'Antony', 'Russo', 'Russo', 'Jose Daniel'],
      }
    ],
  },
];

const results4: ResultsData = [
  {
    id: 1,
    name: 'Fecha 1',
    date: 'Jugado el 14 de Enero del 2026',
    matches: [
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['', ''],
        awayScorers: ['', ''],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: [''],
        awayScorers: ['', '', ''],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: [''],
        awayScorers: ['', '', ''],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['', ''],
        awayScorers: [''],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['', '', '', ''],
        awayScorers: ['', ''],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['', '', '', ''],
        awayScorers: ['', ''],
      }
    ],
    sanctions: [
      {
        team: 'Sport Matozoide',
        points: -3,
        reason: 'Pago fuera de tiempo.',
      },
    ],
  },
  {
    id: 2,
    name: 'Fecha 2',
    date: 'Jugado el 21 de Enero del 2026',
    matches: [
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Charly', 'Frankito'],
        awayScorers: ['Ronaldiño', 'Ronaldiño', 'Ronaldiño', 'Omar'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Ronaldiño', 'Ronaldiño', 'Ronaldiño', 'Kanuto'],
        awayScorers: ['Kochy', 'Kochy'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Wincho', 'Jozua'],
        awayScorers: ['Frankito', 'Frankito', 'Geampierre'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Charly'],
        awayScorers: ['Omar', 'Omar', 'Omar', 'Kanuto', 'Kanuto', 'Ronaldiño'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Omar', 'Omar', 'Ronaldiño', 'Mathias'],
        awayScorers: ['Kochy', 'Jozua', 'Jozua'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Jozua', 'Kochy', 'Kochy', 'Kochy', 'Russo', 'Russo', 'Antony'],
        awayScorers: ['Frankito', 'Frankito', 'Geampierre', 'Geampierre'],
      }
    ],
  },
  {
    id: 3,
    name: 'Fecha 3',
    date: 'Jugado el 28 de Enero del 2026',
    matches: [
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Ronaldiño', 'Ronaldiño'],
        awayScorers: ['Antony'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: [],
        awayScorers: ['Geampierre', 'Frankito'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Frankito', 'Frankito'],
        awayScorers: ['Liam', 'Liam', 'Ronaldiño', 'Ronaldiño', 'Omar'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Ronaldiño'],
        awayScorers: ['Antony'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: [],
        awayScorers: ['Geampierre', 'Geampierre', 'Lucho', 'Frankito'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Geampierre', 'Geampierre', 'Frankito', 'Frankito'],
        awayScorers: ['Liam'],
      }
    ],
  },
  {
    id: 4,
    name: 'Fecha 4',
    date: 'Jugado el 04 de Febrero del 2026',
    matches: [
      {
        home: 'TEMETO TABA FC',
        away: 'FC Nueva generación',
        homeScorers: ['Frankito', 'Frankito', 'Frankito', 'Josue'],
        awayScorers: [],
      },
      {
        home: 'Sport Matozoide',
        away: 'TEMETO TABA FC',
        homeScorers: [],
        awayScorers: ['Geampierre', 'Josue', 'Josue', 'Frankito'],
      },
      {
        home: 'FC Nueva generación',
        away: 'Sport Matozoide',
        homeScorers: ['Jozua', 'Antony', 'Piby', 'Russo', 'Russo', 'Russo'],
        awayScorers: ['Liam', 'Mathias'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'FC Nueva generación',
        homeScorers: ['Josue', 'Josue', 'Frankito'],
        awayScorers: ['Piby', 'Piby'],
      },
      {
        home: 'Sport Matozoide',
        away: 'TEMETO TABA FC',
        homeScorers: ['Liam'],
        awayScorers: ['Josue', 'Lucho', 'Frankito', 'Frankito'],
      },
      {
        home: 'FC Nueva generación',
        away: 'Sport Matozoide',
        homeScorers: ['Antony', 'Piby', 'Piby', 'Jozua'],
        awayScorers: ['Ronaldinho', 'Liam', 'Liam', 'Mathias'],
      }
    ],
  },
  {
    id: 5,
    name: 'Fecha 5',
    date: 'Jugado el 11 de Febrero del 2026',
    matches: [
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Josue', 'Lucho'],
        awayScorers: ['Liam', 'Kanuto', 'Ronaldiño'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Kanuto', 'Kanuto', 'Kanuto'],
        awayScorers: ['Antony', 'Russo', 'Russo', 'Russo', 'Russo', 'Jozua'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Jozua'],
        awayScorers: ['Geampierre'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Josue', 'Geampierre'],
        awayScorers: [],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Liam', 'Liam', 'Ronaldiño'],
        awayScorers: ['Antony', 'Jozua', 'Jozua', 'Russo'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Jozua', 'Jozua', 'Russo', 'Antony'],
        awayScorers: ['Josue', 'Geampierre'], 
      }
    ],
  },
  {
    id: 6,
    name: 'Fecha 6',
    date: 'Jugado el 18 de Febrero del 2026',
    matches: [
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Ronaldiño', 'Ronaldiño', 'Mathias', 'Ronaldiño'],
        awayScorers: ['Antony', 'Antony', 'Piby', 'Piby'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: [],
        awayScorers: ['Charly'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: [],
        awayScorers: ['Omar', 'Liam'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Ronaldiño', 'Ronaldiño', 'Kanuto'],
        awayScorers: ['Jozua'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Antony', 'Antony', 'Antony', 'Jozua'],
        awayScorers: [],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Charly', 'Pedro'],
        awayScorers: ['Ronaldiño', 'Omar', 'Liam', 'Omar'], 
      }
    ],
  },
  {
    id: 7,
    name: 'Fecha 7',
    date: 'Jugado el 04 de Marzo del 2026',
    matches: [
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: [],
        awayScorers: ['Josue'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Geampierre', 'Frankito'],
        awayScorers: ['Omar', 'Ronaldiño'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Kanuto', 'Omar', 'Liam'],
        awayScorers: ['Antony', 'Jozua'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Jozua', 'Antony C'],
        awayScorers: ['Geampierre'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Frankito', 'Frankito', ''],
        awayScorers: ['Ronaldiño', 'Ronaldiño', 'Kanuto', 'Mathias'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Kanuto'],
        awayScorers: ['Jozua', 'Jozua', 'Jozua', 'Antony', 'Antony'], 
      }
    ],
  },
  {
    id: 8,
    name: 'Fecha 8',
    date: 'Jugado el 11 de Marzo del 2026',
    matches: [
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Josue', 'Josue', 'Charly'],
        awayScorers: ['Omar', 'Omar', 'Omar', 'Omar'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Omar', 'Kanuto', 'Ronaldiño'],
        awayScorers: ['Antony'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: [],
        awayScorers: ['Josue'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Josue', 'Charly', 'Josue'],
        awayScorers: ['Ronaldiño', 'Ronaldiño', 'Kanuto'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Omar'],
        awayScorers: ['Piby', 'Piby', 'Antony C'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: [],
        awayScorers: [], 
      }
    ],
    sanctions: [
      {
        team: 'Sport Matozoide',
        points: -3,
        reason: 'Pago fuera de tiempo.',
      },
    ],
  },
  {
    id: 9,
    name: 'Fecha 9',
    date: 'Jugado el 18 de Marzo del 2026',
    matches: [
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Liam'],
        awayScorers: ['Jozua', 'Jozua', 'Wincho', 'Antony'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Antony', 'Piby'],
        awayScorers: ['Charly'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Josue', 'Josue', 'Charly', 'Charly', 'Geampierre'],
        awayScorers: ['Heraldo'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Liam', 'Ronaldiño'],
        awayScorers: ['Antony C', 'Antony', 'Jozua'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Antony'],
        awayScorers: ['Josue', 'Josue', 'Geampierre', 'Geampierre', 'Josue'], 
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Geampierre', 'Jesus', 'Lucho', 'Charly', 'Geampierre'],
        awayScorers: ['Liam'],
      },
    ],
  },
  {
    id: 10,
    name: 'Fecha 10',
    date: 'Jugado el 25 de Marzo del 2026',
    matches: [
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Jozua', 'Jozua'],
        awayScorers: ['Frankito', 'Frankito', 'Geampierre'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Charly', 'Josue', 'Frankito'],
        awayScorers: [],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Kanuto', 'Kanuto', 'Omar', 'Omar', 'Ronaldiño'],
        awayScorers: ['Jozua', 'Piby'],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Jozua', 'Wincho', 'Wincho', 'Jozua'],
        awayScorers: ['Frankito', 'Frankito', 'Charly', 'Josue', 'Geampierre'], 
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Josue', 'Josue', 'Josue'],
        awayScorers: ['Omar', 'Kanuto'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Kanuto', 'Omar', 'Mathias', 'Mathias'],
        awayScorers: ['Piby'],
      },
    ],
  },
  {
    id: 11,
    name: 'Fecha 11',
    date: 'Jugado el 01 de Abril del 2026',
    matches: [
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: [],
        awayScorers: [''],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: [],
        awayScorers: [''],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: [''],
        awayScorers: [], 
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: [''],
        awayScorers: [],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: [],
        awayScorers: [''],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: [''],
        awayScorers: [''],
      },
    ],
    sanctions: [
      {
        team: 'Sport Matozoide',
        points: -3,
        reason: 'Pago fuera de tiempo.',
      },
      {
        team: 'FC Nueva generación',
        points: -3,
        reason: 'Pago fuera de tiempo.',
      },
    ],
  },
  {
    id: 12,
    name: 'Fecha 12',
    date: 'Jugado el 08 de Abril del 2026',
    matches: [
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: [],
        awayScorers: [],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: [],
        awayScorers: ['Frankito', 'Frankito', 'Charly'], 
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: [],
        awayScorers: ['Ronaldiño'],
      },
      {
        home: 'Sport Matozoide',
        away: 'FC Nueva generación',
        homeScorers: ['Fabian', 'Omar', 'Ronaldiño', 'Liam', 'Mathias'],
        awayScorers: [],
      },
      {
        home: 'FC Nueva generación',
        away: 'TEMETO TABA FC',
        homeScorers: ['Piby'],
        awayScorers: ['Charly', 'Josue', 'Pedro'],
      },
      {
        home: 'TEMETO TABA FC',
        away: 'Sport Matozoide',
        homeScorers: ['Charly', 'Frankito'],
        awayScorers: ['Liam', 'Fabian', 'Ronaldiño', 'Ronaldiño'],
      },
    ],
  },
];

const currentResults: ResultsData = [
  {
    id: 1,
    name: 'Fecha 1',
    date: 'Jugado el 15 de Abril del 2026',
    matches: [
      {
        home: 'Peña Independiente 76',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Purito Palao FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Peña Independiente 76',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 2,
    name: 'Fecha 2',
    date: 'Jugado el 22 de Abril del 2026',
    matches: [
      {
        home: 'Purito Palao FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Peña Independiente 76',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Purito Palao FC',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 3,
    name: 'Fecha 3',
    date: 'Jugado el 29 de Abril del 2026',
    matches: [
      {
        home: 'Peña Independiente 76',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Purito Palao FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Peña Independiente 76',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 4,
    name: 'Fecha 4',
    date: 'Jugado el 06 de Mayo del 2026',
    matches: [
      {
        home: 'Purito Palao FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Peña Independiente 76',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Purito Palao FC',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 5,
    name: 'Fecha 5',
    date: 'Jugado el 13 de Mayo del 2026',
    matches: [
      {
        home: 'Peña Independiente 76',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Purito Palao FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Peña Independiente 76',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 6,
    name: 'Fecha 6',
    date: 'Jugado el 20 de Mayo del 2026',
    matches: [
      {
        home: 'Purito Palao FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Peña Independiente 76',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Purito Palao FC',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 7,
    name: 'Fecha 7',
    date: 'Jugado el 27 de Mayo del 2026',
    matches: [
      {
        home: 'Peña Independiente 76',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Purito Palao FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Peña Independiente 76',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 8,
    name: 'Fecha 8',
    date: 'Jugado el 03 de Junio del 2026',
    matches: [
      {
        home: 'Purito Palao FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Peña Independiente 76',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Purito Palao FC',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 9,
    name: 'Fecha 9',
    date: 'Jugado el 10 de Junio del 2026',
    matches: [
      {
        home: 'Peña Independiente 76',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Purito Palao FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Peña Independiente 76',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 10,
    name: 'Fecha 10',
    date: 'Jugado el 17 de Junio del 2026',
    matches: [
      {
        home: 'Purito Palao FC',
        away: 'FC Pajagoza',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Peña Independiente 76',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Purito Palao FC',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Temetotaba FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Temetotaba FC',
        away: 'Purito Palao FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Pajagoza',
        away: 'Peña Independiente 76',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
];

export interface Tournament {
  id: string;
  label: string;
  results: ResultsData;
  players: PlayersData;
}

export const TOURNAMENT_STORAGE_KEY = "tyr-tournament-id";

export const TOURNAMENT_CHANGE_EVENT = "tyr-tournament-change";

export const TOURNAMENTS: Tournament[] = [
  { id: "1", label: "Torneo Junio - Julio 2025", results: results1, players: players1 },
  { id: "2", label: "Torneo Agosto - Septiembre 2025", results: results2, players: players2 },
  { id: "3", label: "Torneo Octubre - Diciembre 2025", results: results3, players: players3 },
  { id: "4", label: "Torneo Verano 2026", results: results4, players: players4 },
  { id: "current", label: "Torneo Abril 2026", results: currentResults, players: currentPlayers },
];

export const TOURNAMENT_OPTIONS: TournamentOption[] = TOURNAMENTS.map(({ id, label }) => ({
  id,
  label,
}));

export function tournamentsResultsMap(): Record<string, ResultsData> {
  return Object.fromEntries(TOURNAMENTS.map((t) => [t.id, t.results]));
}

export function tournamentsDataMap(): Record<
  string,
  { results: ResultsData; players: PlayersData }
> {
  return Object.fromEntries(
    TOURNAMENTS.map((t) => [t.id, { results: t.results, players: t.players }]),
  );
}
