import { FC } from 'react';
import './styles.css';

const MAX_RANGE = 700;

const Data = () => {
  return new Array(10).fill(null).map((_, rowIndex) => 
    new Array(14).fill(null).map((_, colIndex) => {
        const value = Math.round(Math.sqrt( (rowIndex*50)**2 + ((colIndex && colIndex+1)*50)**2 ));
        return !(value > MAX_RANGE) ? value : 0;
    })
  )
};

const GetColor = (value: number, colIdx: number, rowIdx: number) => {
  if (!rowIdx || !value) return;
  const colorRatio = 1/MAX_RANGE*360

  return `hsl(
    ${value * colorRatio},
    100%,
    75%,
    ${rowIdx < colIdx-1 ? '.35' : 1}
  )`;
};

const RangeTable:FC = () => (
  <div>
    <hr />
    <div>Range heatmap:</div>
    <div className='table'>
      {Data().map((row, colIdx) => (
        <div key={colIdx} className='column'>
          {row.map((value, rowIdx) => (
            <div
              key={rowIdx}
              className={`value`}
              style={{
                color: GetColor(value, colIdx, rowIdx),
              }}
            >{value || ''}</div>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export { RangeTable }
