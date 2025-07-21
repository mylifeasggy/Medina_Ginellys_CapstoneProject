
const RecipeDetails = ({item}) => {

    console.log(item)

const ingredients= []

for(let i = 1; i <= 20; i++){
    const ingredient = item[`strIngredient${i}`]
    console.log(ingredient)
    const measure = item[`strMeasure${i}`]

    if(ingredient && ingredient.trim() !== ""){
        ingredients.push({ingredient,measure})
    }
}


return (
    <>

    <div className="recipe-details">
        <h4>Ingredients:</h4>
        <ul> 
            {ingredients.map((ing, i)=>(
                <li key={i}>{ing.measure} {ing.ingredient}</li>

            ))}
        </ul>

        <h4>Instructions:</h4>
        <p>{item.strInstructions}</p>





    </div>
    </>
)
 
}
export default RecipeDetails


{/* //             (
//             <h4>ingredients: </h4>
//             <ul>
//                 <li>
//                     {data.strMeasure} {data.strIngredient}
//                 </li>
                
//             </ul>

//             <h4>Instructions:</h4>
//             <p>{data.strInstructions}</p>
//             ) */}
            
    

// }