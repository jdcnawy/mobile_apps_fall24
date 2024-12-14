import React from 'react'
// HW: Apply CSS styling
export default function IngredientsList(props) {
  const {ingredients} = props

  return (
    <div className="ingredients_list">
      <h3 className="list_title">Ingredients</h3>
      <ul>
        {ingredients.map((ingred, index) => (
          <><li key={index}>{ingred}</li>
          <span className="measure">{i.measure}</span>
          <span>{i.item}</span></>
        ))}
      </ul>
    </div>
  )
}
