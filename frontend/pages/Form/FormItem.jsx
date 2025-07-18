import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";



const FormItem = ({data,onDelete, onEdit }) => {
    return (
        <div className='form-item'>
            <img src='/images/recipe.png' alt="recipe"/>
            <h3>{data.title}</h3>
            <p>Cook time: {data.cook_time} mins </p>
            <button onClick={() => onDelete(data._id)}> <MdDeleteOutline />
 </button>
            <button onClick={onEdit}> <CiEdit /> </button>
            
        </div>
    );
}

export default FormItem;
