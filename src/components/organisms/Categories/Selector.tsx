import React, { FC } from 'react'
import Select from 'react-select'

type TOption = {
  label: string
  value: string
}

type TSelectorProps = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  name: string
  options: TOption[]
  placeholder: string
}

export const Selector: FC<TSelectorProps> = ({ setFieldValue, name, options, placeholder }) => {
  const handleOnChange = (selectedOption: TOption[]) => {
    setFieldValue(name, selectedOption)
  }

  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      hideSelectedOptions={false}
      onChange={handleOnChange}
      placeholder={placeholder}
      styles={{
        control: (base) => ({
          ...base,
          '&:hover': { borderColor: '#101010' },
          border: '1px solid #101010',
          boxShadow: 'none',
          cursor: 'pointer',
          borderRadius: '0',
        }),
        multiValue: (base) => ({
          ...base,
          border: '1px solid black',
          borderRadius: 0,
          padding: '0 12px',
          fontSize: '20px',
          lineHeight: '28px',
          fontFamily: 'Akzidenz-Grotesk Pro',
          backgroundColor: 'white',
        }),
        option: (base, { isDisabled, isFocused, isSelected }) => ({
          ...base,
          cursor: 'pointer',
          backgroundColor: isDisabled ? null : isSelected ? 'gray' : isFocused ? 'lightgray' : null,
          height: '100%',
          color: '#101010',
          fontSize: '20px',
          lineHeight: '28px',
          fontFamily: 'Akzidenz-Grotesk Pro',
          ':active': {
            ...base[':active'],
            backgroundColor: 'gray',
          },
        }),
        placeholder: (base) => ({
          ...base,
          fontSize: '20px',
          fontFamily: 'Akzidenz-Grotesk Pro',
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          color: 'rgb(0,0,0,0.5)',
          cursor: 'pointer',
          ':hover': {
            color: '#101010',
          },
        }),
        valueContainer: (base) => ({
          ...base,
          padding: '12px 22px',
          lineHeight: 'normal',
        }),
      }}
    />
  )
}
