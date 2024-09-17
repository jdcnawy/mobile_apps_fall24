import React from 'react'
import {RECIPE} from './recipe-data'
import Card from './Card'
import RecipeInfo from './RecipeInfo'
import RecipeImg from '../RecipeCard/RecipeImg'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import UserRating from './UserRating'
import '../styles.css'

export default function RecipeCard() {
  return (
    <Card>
      <RecipeImg imgSrc={RECIPE.imgSrc} />
      <div className='card_text'>
        <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
        <div className='card_lists'>
          <IngredientsList ingredients={RECIPE.ingredients} />
          <InstructionsList instructions={RECIPE.instructions} />
        </div>
        <div>
        <UserRating/>
        </div>
      </div>
    </Card>
  )
}
