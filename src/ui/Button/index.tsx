import { FC } from 'react'
import './styles.css'

const TButtonVariant = {
  REGROUP: 'REGROUP',
  RESET: 'RESET',
}

type TButtonProps = {
  onClick?: () => void,
  text?: string,
  disabled?: boolean,
  variant: keyof typeof TButtonVariant,
}

const Button: FC<TButtonProps> = ({ text, onClick, disabled = false, variant }) => {
  const buttonClass = TButtonVariant[variant].toLocaleLowerCase();
  const buttonText = text || buttonClass[0].toUpperCase()+buttonClass.slice(1); 

  const clickButtonHandler = () => {
    onClick?.();
  };

  return (
    <button
      onClick={clickButtonHandler}
      className={`btn btn-${buttonClass}`}
      disabled={disabled}
    >
      {buttonText}
    </button>
  )
}

export { Button, type TButtonProps, TButtonVariant }
