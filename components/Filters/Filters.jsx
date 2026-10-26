import recipes from "@/app/data/recipes.json";
import styles from "./Filters.module.css"
export default function Filters() {
    return (
        <section className={styles.filters}>
            <details className={styles.filter}>
                <summary>Ingrédients</summary>
                <div className={styles.filterContent}>
                    <input
                        type="search"
                        placeholder="Rechercher..."
                        aria-label="Rechercher un ingrédient"
                    />
                    <ul>
                        {recipes.map((recipe) => {
                            return recipe.ingredients.map((ingredient, index) => {
                                return (
                                    <li key={`${recipe.id}-${index}`}>
                                        <p>{ingredient.ingredient}</p>
                                    </li>)
                            })
                        })}
                    </ul>
                </div>
            </details>
            <details className={styles.filter}>
                <summary>Appareils</summary>
                <div className={styles.filterContent}>
                    <input
                        type="search"
                        placeholder="Rechercher..."
                        aria-label="Rechercher un appareil"
                    />
                    <ul>
                        {recipes.map((recipe) => (
                            <li key={recipe.id}>
                                <p>{recipe.appliance}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </details>
            <details className={styles.filter}>
                <summary>Ustensiles</summary>
                <div className={styles.filterContent}>
                    <input
                        type="search"
                        placeholder="Rechercher..."
                        aria-label="Rechercher un ustensile"
                    />
                    <ul>
                        {recipes.map((recipe) => {
                            return recipe.ustensils.map((ustensil, index) => {
                                return (
                                    <li key={`${recipe.id}-${index}`}>
                                        <p>{ustensil}</p>
                                    </li>)
                            })
                        })}
                    </ul>
                </div>
            </details>
            <p className={styles.count}>{recipes.length} recettes</p>
        </section>
    );
}
