type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClickButton?: () => void;
  disabled?: boolean;
}
const Button = ({ children, className, onClickButton, disabled }: ButtonProps) => {
  return ( 
    <button className={className} onClick={onClickButton} disabled={disabled}>{ children}</button>
   );
}
 
export default Button;