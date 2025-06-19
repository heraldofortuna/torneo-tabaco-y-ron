import type { ResultsData } from "../types/data";

export const results: ResultsData  = [
  {
    id: 1,
    name: 'Fecha 1',
    date: 'Jugado el 18 de Junio del 2025',
    matches: [
      {
        home: 'Rojo',
        away: 'Verde',
        homeScorers: ['Josue', 'Frankito'],
        awayScorers: ['Sebastian'],
      },
      {
        home: 'Azul',
        away: 'Rojo',
        homeScorers: ['Charly', 'Rodrigo', 'Rodrigo', 'Liam', 'Rodrigo', 'Jozua', 'Liam', 'Charly'],
        awayScorers: ['Josue', 'Kanuto', 'Josue', 'Frankito', 'Josue', 'Wachi', 'Kanuto'],
      },
      {
        home: 'Verde',
        away: 'Azul',
        homeScorers: ['Omar', 'Omar', 'Pedro'],
        awayScorers: ['Rodrigo', 'Jozua', 'Rodrigo', 'Charly', 'Jozua'],
      },
      {
        home: 'Verde',
        away: 'Rojo',
        homeScorers: ['Omar', 'Omar', 'Russo', 'Pedro', 'Russo', 'Omar'],
        awayScorers: ['Frankito', 'Josue'],
      },
      {
        home: 'Rojo',
        away: 'Azul',
        homeScorers: ['Frankito', 'Frankito', 'Frankito', 'Frankito', 'Frankito', 'Frankito'],
        awayScorers: ['Liam', 'Charly'],
      },
      {
        home: 'Azul',
        away: 'Verde',
        homeScorers: ['Rodrigo', 'Rodrigo', 'Jozua'],
        awayScorers: ['Russo', 'Omar', 'Russo', 'Lucho', 'Russo'],
      }
    ],
  }
];