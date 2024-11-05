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

  const calcHandler = (width?: number, height?: number) => {
    if (!width || !height || width < 0 || height < 0) {
      setResult(0);
      return;
    }
    setResult(Math.round(Math.sqrt(width**2 + height**2)))
  }

  return (
    <div className='wrap'>
      <div>
        <span>X meters: </span>
        <Input
          value={width}
          onChange={(val) => widthHandler(+val)}
          type='number'
          step={10}
          min={0}
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
      <div>
        <b>
          {result < 700 ? (
            <>Distance:  {result}</>
            ) : 'Out Of Range'}
        </b>
      </div>
    </div>
  )
}

export { App }
