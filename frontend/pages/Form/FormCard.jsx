import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";



const FormCard = ({ recipe, onDelete }) => {

    return (
        <div className='form-details'>
            <img src='/images/recipe.png' alt="recipe" />
            <div className='item-content'>
                <h3>{recipe.title}</h3>
                <p>Cook time: {recipe.cook_time} mins </p>
            </div>
            <div className="fotm-button">
                <button className="item-btn" onClick={() => onDelete(recipe._id)}>
                    <MdDeleteOutline />
                </button>
                <button className="item-btn" > <CiEdit /> </button>
                <Link to={`/recipes/${recipe._id}`}>
                    <button className="item-btn">View Details</button>
                </Link>
            </div>
        </div>
    );
}

export default FormCard;
