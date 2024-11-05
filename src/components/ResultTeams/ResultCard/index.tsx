import { FC } from 'react'
import './styles.css'
import { TResultItem } from '../../../types';

type TResultCardProps = {
  team: TResultItem,
  size: number,
  id: number,
}

const trimUserName = (str: string, length: number) => {
  if (str.length <= length) {
    return str;
  }
  return str.substring(0, length-3)+'...';
}

const ResultCard: FC<TResultCardProps> = ({ id, team, size }) => {
  const values = Array.from({ length: size }, (_, idx) => team?.[idx] || ``);

  return (
  <div
    className='card'
    style={{animationDelay: `${id * 250}ms`}}
  >
    <div className='card-head'>
      <div className='card-head-id'>{id}</div>
      <div className='card-head-title'>TEAM</div>
    </div>
    {values?.map((value, idx) => (
      <div
        key={`${value}${idx}`}  
        className='card-gamer'
        title={value}
      >{trimUserName(value, 20)}</div>
    ))}
  </div>
)}

export { ResultCard }
