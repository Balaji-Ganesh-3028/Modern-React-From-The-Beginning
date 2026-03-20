import type React from "react";

type TextAreaInputProps = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  label: string;
  placeHolder?: string;
  className?: string;
}

const TextAreaInput = ({ name, value, onChange, required = false, label, placeHolder, className }: TextAreaInputProps) => {
  return (  
    <>
      <label className='block font-semibold'>{label}:</label>
      <textarea
        name={name}
        value={value}
        className={className || 'w-full p-2 border rounded-lg'}
        onChange={onChange}
        required={required}
        placeholder={placeHolder}
      ></textarea>
    </>
  );
}
 
export default TextAreaInput;