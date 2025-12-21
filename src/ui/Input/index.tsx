import { FC } from 'react'
import './styles.css'

type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange?: (value: number) => void,
}

const Input: FC<TInputProps> = (props) => {
  const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const {
      value: inputValue,
    } = target;
    props.onChange?.(+inputValue);
  };

  const INPUT = 
    <input
      {...props}
      value={props?.value || ''}
      className='input'
      onChange={onChangeHandler}
    />;

  if (props.type === 'range') {
    return (
      <div className='inputWrap'>
        {INPUT}
        <span>{Number(props.min)}</span>
        <span className='max'>{Number(props.max)}</span>
      </div>
    )
  }

  return INPUT
}

export { Input, type TInputProps }
