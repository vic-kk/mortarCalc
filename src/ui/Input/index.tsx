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
    const a = +inputValue;
    props.onChange?.(a);
  };

  console.log(props.value);

  return (
    <input
      {...props}
      value={props?.value || ''}
      className='input'
      onChange={onChangeHandler}
    />
  )
}

export { Input, type TInputProps }
