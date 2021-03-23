const Cocktail = (props) => {
  const cocktail = props.match.params.id
  return (
    <div>
      Cocktail #{cocktail}
    </div>
  )
}

export default Cocktail