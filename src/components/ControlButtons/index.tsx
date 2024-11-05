import { FC } from 'react'
import { Button, type TButtonProps } from '../../ui/Button';

import './styles.css';

type TControlButtonsProps = {
  config?: TButtonProps[],
}

const ControlButtons: FC<TControlButtonsProps> = ({ config }) => {
  return (
    <div className='controls'>
      {config?.map((item, idx) => 
        <Button key={idx} {...item} disabled={item.disabled} />
      )}
    </div>
  )
}

export { ControlButtons }
