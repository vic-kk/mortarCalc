import { ChangeEvent, FC } from 'react'
import './styles.css'

type TTextareaProps = {
  value?: string,
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string
}

const Textarea: FC<TTextareaProps> = ({
  value = '',
  onChange,
  placeholder = 'Введите никнеймы. Каждый на новой строке'
}) => {
  const textareaHandle = (
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => onChange?.(e);

  return (
    <textarea
      className='textarea'
      value={value}
      onChange={textareaHandle}
      placeholder={placeholder}
    />
  )
}

export { Textarea }
