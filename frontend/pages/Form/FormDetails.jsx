import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FormDetails = () => {

    const [formDetails, setFormDetails]= useState(null)
    const { id } = useParams();
    const url = import.meta.env.VITE_BASE_URL

     useEffect(() => {

        async function DisplayForm() {
            try {
                const response = await fetch (`${url}/form/${id}`)
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
        return <p>Loading...</p>;
    }




    return (
        <div className="form-details">
            <h2>{formDetails.title}</h2>
            <p>CookTime: {formDetails.cook_time} minutes</p>
            <p>Ingredients: {formDetails.ingredients.map((ingredient,i)=> (
                <li key={i}>{ingredient}</li>
            ))}</p>
            <p>Instructions: {formDetails.directions}</p>
          


            <Link to="/form">Back</Link>
        </div>
    );
}

export default FormDetails;
