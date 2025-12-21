import { useState } from 'react'
import './styles.css';
import { Input } from '../../ui/Input';
import { RangeTable } from '../RangeTable';

function App() {
  const [ xDistanse, setXDistanse ] = useState<number>(0);
  const [ yDistance, setYDistance ] = useState<number>(0);
  const [ maxXDistanse, setMaxXDistanse ] = useState<number>(700);
  const [ result, setResult ] = useState(0);

  const XDistanseHandler = (value: string | number) => {
    setXDistanse(+value);
    setMaxXDistanse(Math.round(Math.sqrt(700**2 - (+value)**2)));
    calcHandler(+value, yDistance);
  }

  const YDistanseHandler = (value: string | number) => {
    setYDistance(+value);
    calcHandler(xDistanse, +value);
  }

  const calcHandler = (xDistanse: number = 0, yDistance: number = 0) => {
    if (xDistanse < 0 || yDistance < 0) {
      setResult(0);
      return;
    }
    setResult(Math.round(Math.sqrt(xDistanse**2 + yDistance**2)))
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
            value={xDistanse}
            onChange={(val) => XDistanseHandler(+val)}
            type='number'
            step={10}
            min={110}
            max={700}
            placeholder='max 700'
          />
        </div>
        <div>
          <Input
            value={xDistanse ?? 110}
            onChange={(val) => XDistanseHandler(+val)}
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
            value={yDistance}
            onChange={(val) => YDistanseHandler(+val)}
            type='number'
            step={10}
            min={0}
            max={maxXDistanse}
            placeholder={maxXDistanse ? `max ${maxXDistanse}`: 'limit'}
          />
        </div>
        <div>
          <Input
            value={yDistance}
            onChange={(val) => YDistanseHandler(+val)}
            type='range'
            step={10}
            min={0}
            max={maxXDistanse}
          />
        </div>
      </div>
      

      <RangeTable />
    </div>
  )
}

export { App }
