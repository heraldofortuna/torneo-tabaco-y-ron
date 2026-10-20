import type { TeamLogoMap } from "../constants/tournaments";
import TeamLogo from "./TeamLogo";

export interface TableProps {
  data: Array<Record<string, any>>;
  headers?: string[];
  highlightFirst?: boolean;
  maxRows?: number;
  className?: string;
  teamLogos?: TeamLogoMap;
  teamColumnKey?: string;
}

const Table: React.FC<TableProps> = ({ 
  data, 
  headers, 
  highlightFirst = false, 
  maxRows,
  className = "",
  teamLogos,
  teamColumnKey = "team",
}) => {
  const displayData = maxRows ? data.slice(0, maxRows) : data;
  
  if (!data || data.length === 0) {
    return (
      <div className={`text-xs sm:text-sm overflow-x-auto ${className}`}>
        <div className="min-w-max w-full">
          <div className="px-3 py-2 sm:px-4 sm:py-3 text-center text-gray">
            No hay datos disponibles
          </div>
        </div>
      </div>
    );
  }

  const tableHeaders = headers || Object.keys(data[0] || {});
  const rowKeys = Object.keys(data[0] || {});

  const renderCell = (row: Record<string, unknown>, cellIndex: number) => {
    const key = rowKeys[cellIndex];
    const value = row[key];
    const text = String(value ?? "");

    if (key === teamColumnKey && teamLogos?.[text]) {
      return (
        <span className="inline-flex items-center justify-center gap-1.5">
          <TeamLogo src={teamLogos[text]} alt={text} size="sm" />
          <span>{text}</span>
        </span>
      );
    }

    return text;
  };

  const scrollbarStyles: any = {
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(255,255,255,0.2) transparent',
  };

  return (
    <div className={`text-xs sm:text-sm overflow-x-auto ${className}`} style={scrollbarStyles}>
      <div className="min-w-max w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              {tableHeaders.map((header, index) => (
                <th 
                  key={index}
                  className="px-3 py-2 sm:px-4 sm:py-3 text-gold text-center font-medium sticky top-0 bg-dark-elevated"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className={`
                  hover:bg-white/5 transition-colors 
                  ${highlightFirst && rowIndex === 0 ? 'text-gold font-semibold' : ''}
                `}
              >
                {Object.values(row).map((_, cellIndex) => (
                  <td 
                    key={cellIndex}
                    className="px-3 py-2 sm:px-4 sm:py-3 text-center border-b border-white/5 whitespace-nowrap"
                  >
                    {renderCell(row, cellIndex)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;