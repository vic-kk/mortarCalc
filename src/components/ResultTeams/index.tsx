import { FC, useMemo } from 'react'
import { ResultCard } from './ResultCard';
import { TResult } from '../../types';

import './styles.css';

type TResultTeamsProps = {
  result?: TResult,
}

const ResultTeams: FC<TResultTeamsProps> = ({ result }) => {
  const teamSize = useMemo(() => result?.[0]?.length || 0, [ result?.[0] ])

  return (
    <div className='result-teams'>
      {result?.map((team, idx) => (
        <ResultCard key={idx} team={team} id={idx + 1} size={teamSize} />
      ))}
    </div>
  )
}

export { ResultTeams }
