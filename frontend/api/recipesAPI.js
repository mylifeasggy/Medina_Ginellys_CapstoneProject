import { useEffect } from "react";


const RecipesAPI = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=a`

    useEffect(() => {

        async function DisplayRecipes() {
            try {
                const response = await fetch(url)
                const data = await response.json();
                console.log(data)


            } catch (e) {
                console.log(e)

            }

        }
        DisplayRecipes()

    }, [url])
}

export default RecipesAPI;



