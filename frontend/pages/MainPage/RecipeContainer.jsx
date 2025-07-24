import ReactMarkdown from "react-markdown"

//Recipe it's supposed to look like a whole paragraph and with this, it's in order and ingredients like a list. 

export default function Recipe({recipe}) {

    console.log(recipe)
    return (
        <section className="recipe-container">
            <ReactMarkdown>{recipe}</ReactMarkdown> 
        </section>

       
    )

  
}

