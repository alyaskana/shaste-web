import { FC } from 'react'
import s from './Ingredients.module.scss'
import { Field, FieldArray } from 'formik'
import Select from 'react-select'
import cn from 'classnames'
import { debounce } from 'throttle-debounce'

export type TIngredientOption = {
  label: string
  value: string
}

type TIngredientsSelectorProps = {
  options: TIngredientOption[]
  className?: string
  placeholder: string
  name: string
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  updateIngrediensOptions: (text: string) => void
}

const IngredientsSelector: FC<TIngredientsSelectorProps> = ({
  options,
  placeholder,
  name,
  className,
  setFieldValue,
  updateIngrediensOptions,
}) => {
  const debounceUpdateOptions = debounce(500, (inputValue: string) => {
    updateIngrediensOptions(inputValue)
  })

  const handleInputChange = (inputValue: string) => {
    debounceUpdateOptions(inputValue)
  }

  const handleOnChange = (selectedOption) => {
    setFieldValue(name, selectedOption)
  }

  return (
    <Select
      options={options}
      openMenuOnClick={false}
      onInputChange={handleInputChange}
      onChange={handleOnChange}
      placeholder={placeholder}
      name={name}
      className={cn(className)}
      styles={{
        control: (base) => ({
          ...base,
          '&:hover': { borderColor: '#101010' },
          border: '1px solid #101010',
          boxShadow: 'none',
          cursor: 'text',
          borderRadius: '0',
        }),
        indicatorsContainer: (base) => ({
          ...base,
          display: 'none',
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: 'none',
        }),
        input: (base) => ({
          ...base,
          fontSize: '20px',
          fontFamily: 'Akzidenz-Grotesk Pro',
          margin: '0',
          padding: '0',
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
        singleValue: (base) => ({
          ...base,
          fontSize: '20px',
          fontFamily: 'Akzidenz-Grotesk Pro',
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

export type TIngredient = {
  ingredient: TIngredientOption
  amount: string
}

type TIngredientsProps = {
  ingredientsOptions: TIngredientOption[]
  selectedIngredients: TIngredient[]
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  updateIngrediensOptions: (text: string) => void
}

export const Ingredients: FC<TIngredientsProps> = ({
  ingredientsOptions,
  selectedIngredients,
  setFieldValue,
  updateIngrediensOptions,
}) => {
  return (
    <FieldArray
      name="ingredients"
      render={(arrayHelpers) => (
        <div>
          {selectedIngredients.map((_ingredient, index) => (
            <div key={index}>
              <div className={s.ingredient_row}>
                {/* <Field className={s.ingredient_name} name={`ingredients[${index}].name`} placeholder='клубника' /> */}
                <IngredientsSelector
                  className={s.ingredient_name}
                  options={ingredientsOptions}
                  name={`ingredients[${index}].ingredient`}
                  placeholder="клубника"
                  setFieldValue={setFieldValue}
                  updateIngrediensOptions={updateIngrediensOptions}
                />
                <Field className={s.ingredient_count} name={`ingredients.${index}.amount`} placeholder="25 мл" />
              </div>
              {/* <div className={s.plus_btn} onClick={() => arrayHelpers.remove(index)}>
                        -
                      </div> */}
            </div>
          ))}
          <div className={s.plus_btn} onClick={() => arrayHelpers.push({ name: '', amount: '' })}>
            +
          </div>
        </div>
      )}
    />
  )
}
