import React from 'react';
import Select from 'react-select';

export const Selector = (props) => {
  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      options={props.options}
      className="basic-multi-select"
      classNamePrefix='select'
      hideSelectedOptions={false}
      styles={{
        control: base => ({
          ...base,
          '&:hover': { borderColor: 'gray' }, // border style on hover
          border: '1px solid lightgray', // default border color
          boxShadow: 'none', // no box-shadow
          cursor: 'pointer',
        }),
        multiValue: base => ({
          ...base,
          border: '1px solid black',
          borderRadius: 0,
          padding: '0 12px',
          fontSize: '20px',
          lineHeight: '28px',
          fontFamily: 'Akzidenz Grotesk',
          backgroundColor: 'white',
        }),
        option: (base, { isDisabled, isFocused, isSelected }) => ({
          ...base,
          cursor: 'pointer',
          backgroundColor: isDisabled
            ? null
            : isSelected
              ? 'gray'
              : isFocused
                ? 'lightgray'
                : null,
          height: "100%",
          color: "#101010",
          fontSize: '20px',
          lineHeight: '28px',
          fontFamily: 'Akzidenz Grotesk',
          ':active': {
            ...base[':active'],
            backgroundColor: 'gray',
          },
        }),
        multiValueRemove: styles => ({
          ...styles,
          color: 'rgb(0,0,0,0.5)',
          cursor: 'pointer',
          ':hover': {
            color: '#101010',
          },
        }),
      }}
    />
  );
};