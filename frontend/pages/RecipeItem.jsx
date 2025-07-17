

const RecipeItem = ({ data }) => {
    console.log(data)

    const recipeItem = data.map(item => {
        <div>
            <img src={item.strMealThumb} />
            <h3> {item.strMeal}</h3>
        </div>
    })

    return (
        <>

        </>
    );
}

export default RecipeItem;
