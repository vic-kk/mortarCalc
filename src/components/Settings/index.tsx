import { FC } from 'react'
import './styles.css'
import { TSelectProps } from '../../ui/Select';

type TSettingsProps = TSelectProps & {
  members?: number,
}

const Settings: FC<TSettingsProps> = () => {
  return (
    <div className='teams-info'>
      настройки
    </div>
  )
}

export { Settings, type TSettingsProps }
