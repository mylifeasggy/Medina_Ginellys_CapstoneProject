import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";



const FormCard = ({ recipe, handleDelete, handleUpdate}) => {


// Form card with a image, edit button, view detail button and delete button. 
// Passed the function as a props and details of the recipe(form)
    return (
        <div className='form-card'>
            <img src='/images/recipe.png' alt="recipe" />
            <div className='item-content'>
                <h3>{recipe.title}</h3>
                <p>Cook time: {recipe.cook_time} mins </p>
            </div>
            <div className="form-button">
                <button className="item-btn" onClick={() => handleDelete(recipe._id)}>
                    <MdDeleteOutline />
                </button>
                <button className="item-btn" onClick={(e)=> handleUpdate(e, recipe._id)}> <CiEdit /> </button>
                <Link className="link-container" to={`/form/${recipe._id}`}>
                    <button className="item-btn">View Details</button>
                </Link>
            </div>
        </div>
    );
}

export default FormCard;
