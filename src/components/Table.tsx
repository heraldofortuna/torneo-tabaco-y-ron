export interface TableProps {
  data: Array<Record<string, any>>;
  headers?: string[];
  highlightFirst?: boolean;
  maxRows?: number;
  className?: string;
}

const Table: React.FC<TableProps> = ({ 
  data, 
  headers, 
  highlightFirst = false, 
  maxRows,
  className = ""
}) => {
  const displayData = maxRows ? data.slice(0, maxRows) : data;
  
  if (!data || data.length === 0) {
    return (
      <div className={`text-xs sm:text-sm overflow-x-auto ${className}`}>
        <div className="min-w-max w-full">
          <div className="px-3 py-2 sm:px-4 sm:py-3 text-center text-gray-500">
            No hay datos disponibles
          </div>
        </div>
      </div>
    );
  }

  const tableHeaders = headers || Object.keys(data[0] || {});

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
                  className="px-3 py-2 sm:px-4 sm:py-3 text-gray-400 text-center font-medium sticky top-0 bg-dark-light"
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
                  ${highlightFirst && rowIndex === 0 ? 'text-yellow-500 font-semibold' : ''}
                `}
              >
                {Object.values(row).map((cell, cellIndex) => (
                  <td 
                    key={cellIndex}
                    className="px-3 py-2 sm:px-4 sm:py-3 text-center border-b border-white/5 whitespace-nowrap"
                  >
                    {String(cell)}
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