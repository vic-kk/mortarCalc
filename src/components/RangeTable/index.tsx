import { FC } from 'react';
import './styles.css';

const data = () => {
  return new Array(10).fill(null).map((_, rowIndex) => 
    new Array(15).fill(0).map((_, colIndex) => {
        const line = Math.round(Math.sqrt( (rowIndex*50)**2 + (colIndex*50)**2 ));
        return !(line > 700 || (line > 50 && line < 100)) ? line : 0;
    })
  )
};

const RangeTable:FC = () => (
  <div>
    <br />
    <hr />
    <div>Range heatmap:</div>
    <div className='table'>
      {data().map((line, idx) => (
        <div key={idx} className='line'>
          {line.map((item, idx2) => (
            <div key={idx2} className={`item ${(idx && idx2) ? `item_${Math.floor(item / 50)}` : ''}`}>{item || ''}</div>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export { RangeTable }
