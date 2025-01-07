import { useState } from "react"

export default function Main () {

const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])



const ingredientListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>
})

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
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}


