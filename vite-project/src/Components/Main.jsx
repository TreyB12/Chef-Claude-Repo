import { useState } from "react"
import IngredientsList from "../Components/IngredientsList"
import ClaudeRecipe from "../Components/ClaudeRecipe"
import { getRecipeFromChefClaude } from "../Components/ai.js"

export default function Main () {

const [ingredients, setIngredients] = useState([])

const [recipe, setRecipe] = useState("")


async function getRecipe () {
   const RecipeMarkdown = await getRecipeFromChefClaude(ingredients)
   setRecipe(RecipeMarkdown)
}



function Submit (formData) {
    
   const newIngredient = formData.get("ingredient")
   setIngredients(prevIngredients => [...prevIngredients, newIngredient])
   
}



    return (
        <main>
            <form className="add-ingredient-form" action={Submit}>
                <input 
                aria-label="Add ingredient"
                type="text"
                placeholder="e.g. oregano"
                name="ingredient"

                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}

            { recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}


