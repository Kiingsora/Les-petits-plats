
import Link from "next/link";
import styles from "./Card.module.css"
import Image from "next/image";

export default function Card({ recipe }) {
    return (
        <Link href={`/recipe/${recipe.slug}`}>
            <article className={styles.card}><div>
                <span>{recipe.time}min</span>
                <Image src={`/JSON_recipes/${recipe.image}`} alt={recipe.name} width={400} height={253} />
            </div>
                <h2>{recipe.name}</h2>
                <div>
                    <h3>RECETTE</h3>
                    <p>{recipe.description}</p>
                </div>
                <h4>Ingrédients</h4>
                <div>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => {
                            return (
                                <li key={index}>
                                    <p>{ingredient.ingredient}</p>
                                    <p>{ingredient.quantity}</p>
                                    <p>{ingredient.unit}</p>
                                </li>)
                        })}
                    </ul>
                </div>
            </article>
        </Link>
    );
}
