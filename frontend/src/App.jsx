
import Header from "../components/Header"
import MainRecipe from "../pages/MainPage/MainRecipe"
import Recipes from "../pages/Recipes/Recipes"
import Form from "../pages/Form/Form"
import {Route, Routes } from "react-router-dom"
import RecipeDetails from "../pages/Recipes/RecipeDetails"
import FormDetails from "../pages/Form/FormDetails"

import './css/Form.css'
import './css/Recipes.css'



function App() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  return (
    <>
      <Header />
      <Routes> 
      <Route path="/" element={<MainRecipe/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/recipes/:id" element={<RecipeDetails/>}/> 
      <Route path="/form/:id" element={<FormDetails/>}/> 
      <Route path="/form" element={<Form/>}/>
      </Routes>
    </>
  )
}

export default App
