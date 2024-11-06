import { useState } from 'react'
import './styles.css';
import { Input } from '../../ui/Input';

function App() {
  const [ width, setWidth ] = useState<number>();
  const [ height, setHeight ] = useState<number>();
  const [ maxHeight, setMaxHeight ] = useState<number>();
  const [ result, setResult ] = useState(0);

  const widthHandler = (value: string | number) => {
    setWidth(+value);
    setMaxHeight(Math.round(Math.sqrt(700**2 - (+value)**2)));
    calcHandler(+value, height);
  }

  const heightHandler = (value: string | number) => {
    setHeight(+value);
    calcHandler(width, +value);
  }

  const calcHandler = (width: number = 0, height: number = 0) => {
    if (width < 0 || height < 0) {
      setResult(0);
      return;
    }
    setResult(Math.round(Math.sqrt(width**2 + height**2)))
  }

  return (
    <div className='wrap'>
      <div className={`result ${result > 700 && 'warning'}`}>
        Target distance:
        <div className='result_calc'>
          <b>
            {result <= 700 ? (
              <>{result} m</>
              ) : 'Out Of Range'}
          </b>
        </div>
      </div>
      
      <div className='range'>
        <div>
          <span>X meters: </span>
          <Input
            value={width}
            onChange={(val) => widthHandler(+val)}
            type='number'
            step={10}
            min={110}
            max={700}
          />
        </div>
        <div>
          <Input
            value={width ?? 110}
            onChange={(val) => widthHandler(+val)}
            type='range'
            step={10}
            min={110}
            max={700}
          />
        </div>
      </div>

      <div className='range'>
        <div>
          <span>Y meters: </span>
          <Input
            value={height}
            onChange={(val) => heightHandler(+val)}
            type='number'
            step={10}
            min={0}
            max={maxHeight}
            disabled={!maxHeight}
            placeholder={maxHeight ? `max ${maxHeight}`: 'limit'}
          />
        </div>
        <div>
          <Input
            value={height ?? .1}
            onChange={(val) => heightHandler(+val)}
            type='range'
            step={10}
            min={0}
            max={maxHeight || 10}
          />
        </div>
      </div>
      
    </div>
  )
}

export { App }
