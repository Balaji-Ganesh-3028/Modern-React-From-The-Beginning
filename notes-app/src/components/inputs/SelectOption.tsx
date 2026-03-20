import type React from "react";

type SelectOptionProps = {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
  label: string;
  placeHolder?: string;
  className?: string;
  optionList: { value: string; label: string }[];
}
const SelectOption = ({ name, value, className, onChange, required = false, label, optionList }: SelectOptionProps) => {
  return ( 
    <>
      <label className='block font-semibold'>{label}:</label>

      <select
        name={name}
        value={value}
        className={className || 'w-full p-2 border rounded-lg'}
        onChange={onChange}
        required={required}
      >
        {optionList.map((option) => {
         return <option key={option.value} value={option.value}>
            {option.label}
          </option>
        })}
      </select>
    </>
   );
}
 
export default SelectOption;