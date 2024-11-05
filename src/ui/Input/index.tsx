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

  return (
    <input
      {...props}
      value={+(props.value ?? 0)}
      className='input'
      onChange={onChangeHandler}
    />
  )
}

export { Input, type TInputProps }
