import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FormDetails = () => {

    const [formDetails, setFormDetails] = useState(null)
    const { id } = useParams();
    const url = import.meta.env.VITE_BASE_URL


    // If user click on viewdetails one form card in specific, get that recipeform by Id and show me the content in another page. 

    // Fetching the data by Id
    useEffect(() => {

        async function DisplayForm() {
            try {
                const response = await fetch(`${url}/form/${id}`)
                const data = await response.json();
                console.log(data)
                setFormDetails(data)
            } catch (e) {
                console.log(e)

            }
        }
        DisplayForm()

    }, [id])

    if (!formDetails) {
        return;
    }




    return (
        <div className="recipe-details">
            <h2 className="details-title">{formDetails.title}</h2>
            <p className="details-time">CookTime: {formDetails.cook_time} minutes</p>
             <p className="details-time">Servings: {formDetails.servings} servings</p>
            <h4 className="details-title" >Ingredients:</h4>
            <ul className="details-list ">
                {formDetails 
                    .ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                    ))}
                
            </ul>
            <h4 className="details-title">Instructions</h4>
            <p className="instructions" >{formDetails.directions}</p>
            <div className="link"> 
            <Link to="/form" className="go-back" >Back</Link>
            </div>
        </div>
    );
}

export default FormDetails;
