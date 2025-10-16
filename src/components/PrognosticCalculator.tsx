import { useState, useEffect } from 'react';
import Table from './Table';
import getPositionsData from '../adapters/getPositionsData';
import type { ResultsData, PositionData } from '../types/data';

interface PrognosticCalculatorProps {
  results: ResultsData;
}

interface MatchResult {
  home: string;
  away: string;
  homeGoals: number;
  awayGoals: number;
}

const tableHeaders = ["Pos.", "Equipo", "J", "G", "P", "E", "GF", "GC", "DG", "Puntos"];

const lastRoundMatches = [
  { home: 'FC Real Polaco', away: 'Realcoholicos FC' },
  { home: 'Red Devils FC', away: 'FC Real Polaco' },
  { home: 'Realcoholicos FC', away: 'Red Devils FC' },
  { home: 'FC Real Polaco', away: 'Realcoholicos FC' },
  { home: 'Red Devils FC', away: 'FC Real Polaco' },
  { home: 'Realcoholicos FC', away: 'Red Devils FC' }
];

const PrognosticCalculator: React.FC<PrognosticCalculatorProps> = ({ results }) => {
  const [matchResults, setMatchResults] = useState<MatchResult[]>(
    lastRoundMatches.map(match => ({ ...match, homeGoals: 0, awayGoals: 0 }))
  );
  const [projectedPositions, setProjectedPositions] = useState<(PositionData & { position: number })[]>([]);

  const calculateProjectedPositions = () => {
    const projectedResults = JSON.parse(JSON.stringify(results));
    
    const matchesWithGoals = matchResults.filter(match => 
      match.homeGoals > 0 || match.awayGoals > 0
    );

    if (matchesWithGoals.length > 0) {
      projectedResults.push({
        id: results.length + 1,
        name: `Fecha ${results.length + 1} (Pronóstico)`,
        date: 'Por jugar',
        matches: matchesWithGoals.map(match => ({
          home: match.home,
          away: match.away,
          homeScorers: Array(match.homeGoals).fill('Pronóstico'),
          awayScorers: Array(match.awayGoals).fill('Pronóstico')
        }))
      });
    }
    
    const newPositions = getPositionsData(projectedResults);
    setProjectedPositions(newPositions);
  };

  const updateResult = (index: number, team: 'home' | 'away', goals: number) => {
    const newResults = [...matchResults];
    newResults[index] = {
      ...newResults[index],
      [team === 'home' ? 'homeGoals' : 'awayGoals']: Math.max(0, goals)
    };
    setMatchResults(newResults);
  };

  const handleCalculate = () => {
    calculateProjectedPositions();
  };

  const resetResults = () => {
    setMatchResults(
      lastRoundMatches.map(match => ({ ...match, homeGoals: 0, awayGoals: 0 }))
    );
    setTimeout(() => calculateProjectedPositions(), 0);
  };

  useEffect(() => {
    calculateProjectedPositions();
  }, []);

  return (
    <div className="bg-dark-light flex-1 flex flex-col gap-6 rounded-lg">
      <Table
        data={projectedPositions}
        headers={tableHeaders}
        highlightFirst={true}
        className="max-h-80"
      />

      <div className='flex flex-col gap-4'>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">Calculadora de pronósticos</h2>
          <div className='flex items-center gap-2'>
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
              onClick={handleCalculate}
            >
              Calcular
            </button>
            <button 
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
              onClick={resetResults}
            >
              Reiniciar
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {matchResults.map((match, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-900 text-sm p-3 rounded">
              <span className="font-medium w-2/5 text-right truncate pr-2">{match.home}</span>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  min="0"
                  className="w-12 text-center bg-gray-800 rounded py-1 border border-gray-600 focus:border-blue-500 focus:outline-none"
                  value={match.homeGoals}
                  onChange={(e) => updateResult(index, 'home', parseInt(e.target.value) || 0)}
                />
                <span className="font-bold">-</span>
                <input 
                  type="number" 
                  min="0"
                  className="w-12 text-center bg-gray-800 rounded py-1 border border-gray-600 focus:border-blue-500 focus:outline-none"
                  value={match.awayGoals}
                  onChange={(e) => updateResult(index, 'away', parseInt(e.target.value) || 0)}
                />
              </div>
              <span className="font-medium w-2/5 truncate pl-2">{match.away}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrognosticCalculator;