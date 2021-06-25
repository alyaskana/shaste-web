import { useState, useEffect } from 'react'
import { RecipeCard } from '@components/cocktails/RecipeCard'
import s from './CocktailsPage.module.scss'
import Masonry from 'react-masonry-css'
import { cocktailsFetcher } from '../../api/cocktails'
import { Cocktail } from '../../types'
import { Search } from '@components/cocktails/Search'

const CocktailsPage = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([])
  useEffect(() => {
    cocktailsFetcher.getAll().then((response) => {
      setCocktails(response.data.cocktails)
    })
  }, [])

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    cocktailsFetcher.search(values.text).then((response) => {
      setCocktails(response.data.cocktails)
      setSubmitting(false)
    })
  }

  return (
    <>
      <Search className={s.search} handleSubmit={handleSubmit} />
      <div className={s.cocktails_list}>
        <Masonry breakpointCols={4} className={s.my_masonry_grid} columnClassName={s.my_masonry_grid_column}>
          {cocktails.map((cocktail) => (
            <RecipeCard key={cocktail.id} cocktail={cocktail} />
          ))}
        </Masonry>
      </div>
    </>
  )
}

export default CocktailsPage
