import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";



const FormDetails= ({recipe, onDelete}) => {

    return (
        <div className='form-details'>
            <img src='/images/recipe.png' alt="recipe"/>
        <div className='item-content'> 
            <h3>{recipe.title}</h3>
            <p>Cook time: {recipe.cook_time} mins </p>
            <p>Instructions: {recipe.directions}</p>
        </div>
            <button className="item-btn" onClick={() => onDelete(recipe._id)}> <MdDeleteOutline />

 </button>
            <button className="item-btn" > <CiEdit /> </button>
            
        </div>
    );
}

export default FormDetails;
