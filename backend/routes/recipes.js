import express from "express"



const recipesRoute = express.Router()


recipesRoute.get('/', async(req, res)=>{
    try{
       

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
        const data= await response.json();
        console.log(data)
        res.json(data)


    }catch(e){
       
    }

})

export default recipesRoute