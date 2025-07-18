import React from 'react';



const url= import.meta.env.VITE_BASE_URL

const Form = () => {
    
    const [form, setForm] = useState([]);

    async function getForm() {
        const response = await fetch(`${url}/form`)
        
        
    }







    return (
        <div>
            
        </div>
    );
}

export default Form;
