import React from 'react'
import Select from 'react-select'
import { IngredientsOptionType } from './MyBar'

type SelectorProps = {
  ingredientsOptions: IngredientsOptionType[]
  handleAddIngredient: () => void
}

export const Selector = ({ ingredientsOptions, handleAddIngredient }) => {
  const styles = {
    singleValue: (base) => ({
      ...base,
      overflow: 'visible',
    }),
    control: (base) => ({
      ...base,
      '&:hover': { borderColor: '#101010' },
      border: '1px solid #101010',
      boxShadow: 'none',
      cursor: 'pointer',
      borderRadius: '0',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    indicatorsContainer: (base) => ({
      ...base,
      // display: 'none',
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
    valueContainer: (base) => ({
      ...base,
      padding: '12px 22px',
      lineHeight: 'normal',
    }),
  }
  return (
    <Select
      options={ingredientsOptions}
      placeholder="клубника, корица, лимонный сок..."
      onChange={handleAddIngredient}
      styles={styles}
    />
  )
}
