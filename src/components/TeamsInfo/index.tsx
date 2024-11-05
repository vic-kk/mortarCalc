import { FC } from 'react'
import './styles.css'
import { Select, TSelectProps } from '../../ui/Select';

type TTeamsInfoProps = TSelectProps & {
  members?: number,
}

const TeamsInfo: FC<TTeamsInfoProps> = ({ members, ...props }) => {
  return (
    <div className='teams-info'>
      <div>Team size:</div>
      <Select
        onChange={props.onChange}
        value={props.value}
        max={props.max}
      />
      {!!members && <>
        <div>Active:</div>
        <div>{members}</div>
      </>}
    </div>
  )
}

export { TeamsInfo, type TTeamsInfoProps }
