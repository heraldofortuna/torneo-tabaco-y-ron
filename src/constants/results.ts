import type { ResultsData } from "../types/data";

// export const firstResults: ResultsData  = [
//   {
//     id: 1,
//     name: 'Fecha 1',
//     date: 'Jugado el 18 de Junio del 2025',
//     matches: [
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Josue', 'Frankito'],
//         awayScorers: ['Sebastian'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: ['Charly', 'Rodrigo', 'Rodrigo', 'Liam', 'Rodrigo', 'Jozua', 'Liam', 'Charly'],
//         awayScorers: ['Josue', 'Kanuto', 'Josue', 'Frankito', 'Josue', 'Wachi', 'Kanuto'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Omar', 'Omar', 'Pedro'],
//         awayScorers: ['Rodrigo', 'Jozua', 'Rodrigo', 'Charly', 'Jozua'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Omar', 'Omar', 'Russo', 'Pedro', 'Russo', 'Omar'],
//         awayScorers: ['Frankito', 'Josue'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Frankito', 'Frankito', 'Frankito', 'Frankito', 'Frankito', 'Frankito'],
//         awayScorers: ['Liam', 'Charly'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Rodrigo', 'Rodrigo', 'Jozua'],
//         awayScorers: ['Russo', 'Omar', 'Russo', 'Lucho', 'Russo'],
//       }
//     ],
//   },
//   {
//     id: 2,
//     name: 'Fecha 2',
//     date: 'Jugado el 25 de Junio del 2025',
//     matches: [
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Russo', 'Russo', 'Russo'],
//         awayScorers: [],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Russo', 'Russo', 'Russo', 'Omar'],
//         awayScorers: ['Kanuto', 'Kanuto', 'Kanuto', 'Frankito'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: ['Jozua', 'Jozua', 'Charly'],
//         awayScorers: ['Frankito', 'Josue', 'Kanuto'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Charly', 'Charly'],
//         awayScorers: ['Russo', 'Omar', 'Omar'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Kanuto', 'Kanuto', 'Wachi', 'Frankito'],
//         awayScorers: ['Omar', 'Russo'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Wachi', 'Wincho', 'Wincho'],
//         awayScorers: ['Charly', 'Jozua'],
//       }
//     ],
//   },
//   {
//     id: 3,
//     name: 'Fecha 3',
//     date: 'Jugado el 02 de Julio del 2025',
//     matches: [
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: ['Rodrigo', 'Charly', 'Liam'],
//         awayScorers: ['Frankito'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Charly', 'Liam', 'Jozua', 'Jozua'],
//         awayScorers: ['Pedro', 'Russo'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Pedro', 'Omar'],
//         awayScorers: [],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Josue', 'Frankito'],
//         awayScorers: ['Jozua', 'Jozua', 'Jozua', 'Jozua', 'Liam'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: [],
//         awayScorers: ['Liam', 'Liam', 'Rodrigo'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Frankito', 'Josue'],
//         awayScorers: ['Russo', 'Russo', 'Russo'],
//       }
//     ],
//   },
//   {
//     id: 4,
//     name: 'Fecha 4',
//     date: 'Jugado el 09 de Julio del 2025',
//     matches: [
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Kanuto'],
//         awayScorers: [],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: ['Jozua'],
//         awayScorers: ['Kanuto', 'Josue', 'Josue', 'Josue', 'Frankito', 'Frankito'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Heraldo'],
//         awayScorers: ['Charly', 'Charly', 'Rodrigo'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Russo', 'Russo', 'Heraldo', 'Omar', 'Kanuto', 'Sebastian'],
//         awayScorers: ['Frankito'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Frankito', 'Frankito', 'Frankito', 'Wincho'],
//         awayScorers: ['Charly'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Jozua', 'Jozua', 'Rodrigo', 'Charly'],
//         awayScorers: ['Lucho', 'Russo'],
//       }
//     ],
//   },
//   {
//     id: 5,
//     name: 'Fecha 5',
//     date: 'Jugado el 16 de Julio del 2025',
//     matches: [
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: [],
//         awayScorers: ['Rodrigo', 'Jozua', 'Liam', 'Liam'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Pedro', 'Heraldo', 'Russo', 'Russo', 'Russo'],
//         awayScorers: ['Wincho', 'Kanuto', 'Frankito', 'Frankito', 'Josue', 'Josue'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: ['Jozua', 'Jozua', 'Liam', 'Liam', 'Liam', 'Rodrigo'],
//         awayScorers: ['Frankito', 'Frankito', 'Josue'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Jozua', 'Liam', 'Liam'],
//         awayScorers: [],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Wincho', 'Wincho', 'Josue'],
//         awayScorers: ['Russo', 'Russo', 'Russo', 'Russo', 'Pedro'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Frankito', 'Frankito', 'Frankito'],
//         awayScorers: ['Liam', 'Liam', 'Rodrigo', 'Jozua', 'Jozua', 'Jozua', 'Jozua', 'Jozua'],
//       }
//     ],
//   },
//   {
//     id: 6,
//     name: 'Fecha 6',
//     date: 'Jugado el 23 de Julio del 2025',
//     matches: [
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: [],
//         awayScorers: ['Frankito', 'Frankito', 'Kanuto', 'Wincho'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: [],
//         awayScorers: ['Russo', 'Omar', 'Omar'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Pedro', 'Omar', 'Lucho'],
//         awayScorers: ['Kanuto', 'Kanuto', 'Josue', 'Josue'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Charly', 'Charly', 'Kanuto', 'Kanuto', 'Frankito', 'Frankito'],
//         awayScorers: ['Liam', 'Liam', 'Wincho'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Russo', 'Russo', 'Russo', 'Russo', 'Russo', 'Russo', 'Russo'],
//         awayScorers: ['Liam'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Wincho', 'Kanuto', 'Kanuto', 'Frankito', 'Frankito'],
//         awayScorers: ['Omar', 'Omar', 'Omar', 'Russo', 'Russo'],
//       }
//     ],
//   },
//   {
//     id: 7,
//     name: 'Fecha 7',
//     date: 'Jugado el 30 de Julio del 2025',
//     matches: [
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Josue', 'Josue', 'Wachi', 'Kanuto', 'Wincho', 'Wincho'],
//         awayScorers: ['Lucho', 'Russo'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: ['Rodrigo', 'Rodrigo', 'Rodrigo', 'Liam'],
//         awayScorers: ['Kanuto'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Russo', 'Russo'],
//         awayScorers: ['Harry', 'Liam', 'Jozua', 'Jozua', 'Jozua', 'Jozua'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: [],
//         awayScorers: ['Josue'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: [],
//         awayScorers: ['Liam', 'Rodrigo'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Rodrigo'],
//         awayScorers: ['Russo', 'Russo', 'Russo', 'Lucho'],
//       }
//     ],
//   },
// ];

// export const secondResults : ResultsData = [
//   {
//     id: 1,
//     name: 'Fecha 1',
//     date: 'Jugado el 13 de Agosto del 2025',
//     matches: [
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: ['Omar'],
//         awayScorers: ['Kanuto', 'Frankito', 'Frankito', 'Josue', 'Lucho'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Josue'],
//         awayScorers: ['Daniel', 'Russo', 'Russo', 'Russo'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Russo'],
//         awayScorers: [],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Frankito', 'Frankito', 'Kanuto'],
//         awayScorers: ['Liam', 'Omar', 'Liam'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Daniel'],
//         awayScorers: ['Frankito', 'Frankito', 'Frankito', 'Frankito'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Rodrigo', 'Rodrigo', 'Liam', 'Liam', 'Liam'],
//         awayScorers: ['Jose Daniel', 'Joel'],
//       }
//     ],
//   },
//   {
//     id: 2,
//     name: 'Fecha 2',
//     date: 'Jugado el 20 de Agosto del 2025',
//     matches: [
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Harry', 'Jozua', 'Jozua', 'Omar'],
//         awayScorers: ['Daniel'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Daniel', 'Jose Daniel'],
//         awayScorers: ['Josue', 'Josue', 'Josue'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Pedro', 'Pedro', 'Pedro', 'Josue', 'Josue'],
//         awayScorers: ['Jozua', 'Charly'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Jozua', 'Charly'],
//         awayScorers: ['Russo', 'Joel'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Daniel', 'Daniel'],
//         awayScorers: ['Lucho', 'Lucho', 'Josue', 'Josue'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Lucho', 'Lucho', 'Kanuto', 'Josue', 'Pedro', 'Pedro'],
//         awayScorers: ['Omar'],
//       }
//     ],
//   },
//   {
//     id: 3,
//     name: 'Fecha 3',
//     date: 'Jugado el 27 de Agosto del 2025',
//     matches: [
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Daniel'],
//         awayScorers: ['Lucho', 'Josue', 'Josue'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Pitbull', 'Pitbull', 'Jozua', 'Charly'],
//         awayScorers: ['Daniel'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Josue'],
//         awayScorers: ['Jozua', 'Liam', 'Liam'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Daniel', 'Daniel', 'Daniel', 'Joel'],
//         awayScorers: ['Josue'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Mathias'],
//         awayScorers: ['Daniel', 'Russo', 'Russo', 'Joel'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Josue', 'Pedro', 'Lucho'],
//         awayScorers: ['Omar', 'Omar', 'Mathias', 'Mathias', 'Mathias', 'Jozua', 'Liam'],
//       }
//     ],
//   },
//   {
//     id: 4,
//     name: 'Fecha 4',
//     date: 'Jugado el 03 de Setiembre del 2025',
//     matches: [
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: [],
//         awayScorers: ['Josue', 'Josue', 'Lucho'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: [],
//         awayScorers: ['Daniel', 'Russo', 'Russo'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Joel', 'Daniel', 'Daniel', 'Jose Daniel', 'Russo'],
//         awayScorers: ['Jozua', 'Omar', 'Omar'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: [],
//         awayScorers: ['Jozua'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Daniel', 'Daniel', 'Russo'],
//         awayScorers: ['Kanuto', 'Kanuto'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Mathias', 'Jozua'],
//         awayScorers: ['Daniel', 'Daniel', 'Daniel'],
//       }
//     ],
//   },
//   {
//     id: 5,
//     name: 'Fecha 5',
//     date: 'Jugado el 10 de Setiembre del 2025',
//     matches: [
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Jozua'],
//         awayScorers: [],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Daniel', 'Daniel', 'Daniel', 'Daniel', 'Sebastian'],
//         awayScorers: ['Kanuto'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: [],
//         awayScorers: ['Jozua', 'Omar', 'Yair', 'Jozua'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: [],
//         awayScorers: ['Daniel', 'Daniel', 'Jose Daniel', 'Joel'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Daniel', 'Daniel', 'Daniel', 'Joel', 'Joel'],
//         awayScorers: ['Lucho', 'Kanuto', 'Kanuto'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Kanuto', 'Kanuto', 'Kanuto', 'Kanuto', 'Pedro', 'Pedro', 'Pedro', 'Pedro', 'Pedro', 'Lucho'],
//         awayScorers: ['Jozua', 'Charly'],
//       }
//     ],
//   },
//   {
//     id: 6,
//     name: 'Fecha 6',
//     date: 'Jugado el 17 de Setiembre del 2025',
//     matches: [
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: [],
//         awayScorers: ['Favio'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: [],
//         awayScorers: [],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: [],
//         awayScorers: ['Jozua', 'Mathias'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'Red Devils FC',
//         homeScorers: ['Wincho', 'Russo', 'Joel'],
//         awayScorers: ['Josue', 'Kanuto'],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Omar', 'Jozua', 'Liam', 'Liam', 'Liam', 'Mathias'],
//         awayScorers: ['Daniel'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Josue', 'Kanuto', 'Kanuto'],
//         awayScorers: ['Jozua', 'Jozua', 'Omar', 'Liam', 'Mathias'],
//       }
//     ],
//   },
//   {
//     id: 7,
//     name: 'Fecha 7',
//     date: 'Jugado el 24 de Setiembre del 2025',
//     matches: [
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: ['Mathias', 'Mathias'],
//         awayScorers: ['Josue', 'Josue', 'Kanuto', 'Kanuto', 'Kanuto'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: [],
//         awayScorers: ['Mathias', 'Liam'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Kanuto'],
//         awayScorers: [],
//       },
//       {
//         home: 'FC Real Polaco',
//         away: 'Red Devils FC',
//         homeScorers: ['Kanuto', 'Antony'],
//         awayScorers: ['Omar', 'Jozua'],
//       },
//       {
//         home: 'Realcoholicos FC',
//         away: 'FC Real Polaco',
//         homeScorers: ['Russo'],
//         awayScorers: ['Mathias', 'Mathias', 'Jozua'],
//       },
//       {
//         home: 'Red Devils FC',
//         away: 'Realcoholicos FC',
//         homeScorers: ['Josue', 'Josue', 'Kanuto', 'Pedro', 'Pedro'],
//         awayScorers: ['Joel'],
//       }
//     ],
//   },
// ]

export const results: ResultsData = [
  {
    id: 1,
    name: 'Fecha 1',
    date: 'Jugado el 16 de Octubre del 2025',
    mvp: 'josue.png',
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
        homeScorers: ['Charly', 'Charly', 'Josue', 'Ronaldinho'],
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
    mvp: 'jozua.jpg',
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
    date: 'Miércoles 30 de Octubre del 2025',
    matches: [
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 4,
    name: 'Fecha 4',
    date: 'Miércoles 6 de Noviembre del 2025',
    matches: [
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 5,
    name: 'Fecha 5',
    date: 'Miércoles 13 de Noviembre del 2025',
    matches: [
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 6,
    name: 'Fecha 6',
    date: 'Miércoles 20 de Noviembre del 2025',
    matches: [
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 7,
    name: 'Fecha 7',
    date: 'Miércoles 27 de Noviembre del 2025',
    matches: [
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 8,
    name: 'Fecha 8',
    date: 'Miércoles 4 de Diciembre del 2025',
    matches: [
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 9,
    name: 'Fecha 9',
    date: 'Miércoles 11 de Diciembre del 2025',
    matches: [
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 10,
    name: 'Fecha 10',
    date: 'Miércoles 18 de Diciembre del 2025',
    matches: [
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 11,
    name: 'Fecha 11',
    date: 'Martes 24 de Diciembre del 2025',
    matches: [
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
  {
    id: 12,
    name: 'Fecha 12',
    date: 'Domingo 28 de Diciembre del 2026',
    matches: [
      {
        home: 'Blue Label FC',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Blue Label FC',
        away: 'FC Coca Juniors',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'Los Ñaños FC',
        away: 'Blue Label FC',
        homeScorers: null,
        awayScorers: null,
      },
      {
        home: 'FC Coca Juniors',
        away: 'Los Ñaños FC',
        homeScorers: null,
        awayScorers: null,
      }
    ],
  },
];