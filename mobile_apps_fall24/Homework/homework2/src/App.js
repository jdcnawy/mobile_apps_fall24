import React from 'react'
import RecipeCard from './components/RecipeCard'
import Header from './components/Header'
import Footer from './components/Footer'
import './global.css'
import './components/styles.css'

function App() {
  return (
    <>
      <Header/>
      <div className='cards_layout'>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
      <Footer />
    </>
  )
}

export default App
