import type React from "react";

type TextInputProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  label: string;
  placeHolder?: string;
  className?: string;
}

const TextInput = ({ name, value, onChange, required = false, label, placeHolder, ...props }: TextInputProps) => {
  return ( 
    <>
    <label htmlFor={name} className="block font-semibold">
      { label }:
    </label>
    
    <input
      type="text"
      className={props.className || "w-full p-2 border rounded-lg"}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      required={required}
    />
    </>
   );
}
 
export default TextInput;