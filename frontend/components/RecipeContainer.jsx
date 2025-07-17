import ReactMarkdown from "react-markdown"


export default function Recipe({recipe}) {

    console.log(recipe)
    return (
        <section className="recipe-container">
            <ReactMarkdown>{recipe}</ReactMarkdown> 
        </section>

       
    )

  
}

