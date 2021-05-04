import React, { Component, FC } from 'react';
import s from './Categories.module.scss'
import Select, { components } from 'react-select';
import { colourOptions } from './docs/data';
import { Selector } from './Selector'

enum TagType {
  taste = 'taste',
  goal = 'goal'
}

export type TCategory = {
  id: number
  name: string
  tag_type: TagType
}

type TCategoriesProps = {
  categories: TCategory[]
}

export const Categories: FC<TCategoriesProps> = ({ categories }) => {
  const tastes = categories.filter(category => category.tag_type == TagType.taste).map(c => ({
    value: c.id.toString(),
    label: c.name,
  }))
  const goals = categories.filter(category => category.tag_type == TagType.goal).map(c => ({
    value: c.id.toString(),
    label: c.name,
  }))

  return (
    <>
      <Selector options={goals} />
      <Selector options={tastes} />
    </>
  );
};