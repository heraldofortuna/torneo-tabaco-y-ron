import type { ResultsData } from "../types/data";

export const results: ResultsData  = [
  {
    id: 1,
    name: 'Fecha 1',
    date: 'Jugado el 18 de Junio del 2025',
    matches: [
      {
        home: 'Rojo',
        away: 'Real Coholicos',
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
        home: 'Real Coholicos',
        away: 'Azul',
        homeScorers: ['Omar', 'Omar', 'Pedro'],
        awayScorers: ['Rodrigo', 'Jozua', 'Rodrigo', 'Charly', 'Jozua'],
      },
      {
        home: 'Real Coholicos',
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
        away: 'Real Coholicos',
        homeScorers: ['Rodrigo', 'Rodrigo', 'Jozua'],
        awayScorers: ['Russo', 'Omar', 'Russo', 'Lucho', 'Russo'],
      }
    ],
  }
];