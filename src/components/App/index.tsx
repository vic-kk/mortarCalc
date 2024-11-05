import { useState } from 'react'
import './styles.css';
import { Input } from '../../ui/Input';

function App() {
  const [ width, setWidth ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ result, setResult ] = useState(0);

  const widthHandler = (value: number) => {
    setWidth(+value);
    calcHandler(+value, height);
  }

  const heightHandler = (value: number) => {
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
        Distance:
        <div className='result_calc'>
          <b>
            {result <= 700 ? (
              <>{result} m</>
              ) : 'Out Of Range'}
          </b>
        </div>
      </div>
      
      <div>
        <div>
          <span>X meters: </span>
          <Input
            value={width}
            onChange={(val) => widthHandler(+val)}
            type='number'
            step={10}
            min={120}
            max={700}
          />
        </div>

        <div>
          <span>Y meters: </span>
          <Input
            value={height}
            onChange={(val) => heightHandler(+val)}
            type='number'
            step={10}
            min={0}
            max={700}
          />
        </div>
      </div>
      
    </div>
  )
}

export { App }
