import { FC } from 'react'
import { Selector } from './Selector'
import { Tag, TagType } from '../../../types'

type TCategoriesProps = {
  categories: Tag[]
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const Categories: FC<TCategoriesProps> = ({ categories, setFieldValue }) => {
  const tastes = categories
    .filter((category) => category.tag_type === TagType.taste)
    .map((c) => ({
      value: c.id.toString(),
      label: c.name,
    }))
  const goals = categories
    .filter((category) => category.tag_type === TagType.goal)
    .map((c) => ({
      value: c.id.toString(),
      label: c.name,
    }))

  return (
    <>
      <Selector options={goals} setFieldValue={setFieldValue} name="tags.goals" placeholder="Для чего подойдет?" />
      <Selector options={tastes} setFieldValue={setFieldValue} name="tags.tastes" placeholder="Какой вкус?" />
    </>
  )
}
