
import Header from "../components/Header"
import MainRecipe from "../components/MainRecipe"
import Recipes from "../pages/Recipes"
import Form from "../pages/Form/Form"
import {Route, Routes } from "react-router-dom"


function App() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  return (
    <>
      <Header />
      <Routes> 
      <Route path="/" element={<MainRecipe/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/form" element={<Form/>}/>
      </Routes>
    </>
  )
}

export default App
