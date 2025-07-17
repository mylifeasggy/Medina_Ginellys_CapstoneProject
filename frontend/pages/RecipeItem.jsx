

const RecipeItem = ({ data }) => {
    console.log(data)

    const recipeItem = data.map(item => {
        <div className="recipes-container" key={item.idMeal}>
            <img className="recipe-image"src={item.strMealThumb} alt={item.strMeal}/>
            <h3 className="recipe-name"> {item.strMeal}</h3>
        </div>
    })

    return (
        <>
           {recipeItem}
        </>
    );
}

export default RecipeItem;
