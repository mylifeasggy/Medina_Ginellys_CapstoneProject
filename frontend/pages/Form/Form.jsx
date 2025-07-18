import React from 'react';



const url= import.meta.env.VITE_BASE_URL
  const inputRef = useRef()

const Form = () => {
    
    const [form, setForm] = useState([]);

    /*async function getForm() {
        const response = await fetch(`${url}/form`)
        const data =
        
        
    }
*/

async function handleSubmite(e) {
    
}





    return (
        <div className='form-container'>
            <form>
                <input type="text" name='recipe_name' required/>
                <input type='text' name="author" required/>
                <input type="text" name="ingredients" required/>
                <input type='number' name='cook_time' required/>
                <input type='number' name='servings'/>
                <input type="text" name="directions" required/>
                <input type='text' name="notes"/>
                <button>Submit Recipe</button>
            </form>
            
        </div>
    );
}



/*  recipe_name: {
        type: String,
        required:true,
    },

    author: {
        type:String,
        required:true,
    },
    ingredients: {
        type:[String],
        required:true
    },
    cook_time: {
        type:Number,
        required:true
    },
    servings: {
        type:Number
    },
    directions: {
        type:String,
        required:true
    },
    notes:{
        type:String

    }
 */


export default Form;
