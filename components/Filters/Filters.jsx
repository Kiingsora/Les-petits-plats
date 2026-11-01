"use client"
import recipes from "@/app/data/recipes.json";
import styles from "./Filters.module.css"
import { useState } from "react"


export default function Filters() {

    const ingredient = recipes.flatMap((recipe) => {
        return recipe.ingredients.map((ingredient) => {
            return ingredient.ingredient.toLowerCase().trim();
        })
    })
    const appliance = recipes.map((recipe) => {
        return recipe.appliance.toLowerCase().trim();
    })

    const ustensil = recipes.flatMap((recipe) => {
        return recipe.ustensils.map((ustensil) => {
            return ustensil.toLowerCase().trim();
        })
    })

    const uniqueIngredients = [...new Set(ingredient)];
    const uniqueAppliances = [...new Set(appliance)];
    const uniqueUstensils = [...new Set(ustensil)];

    console.log(uniqueIngredients);
    const [searchIngredient, setSearchIngredient] = useState("");
    const [searchAppliance, setSearchAppliance] = useState("");
    const [searchUstensil, setSearchUstensil] = useState("");

    return (
        <section className={styles.filters}>
            <details className={styles.filter}>
                <summary>Ingrédients</summary>
                <div className={styles.filterContent}>
                    <input
                        type="search"
                        placeholder="Rechercher..."
                        aria-label="Rechercher un ingrédient"
                        value={searchIngredient}
                        onChange={(event) => setSearchIngredient(event.target.value)}
                    />
                    <ul>
                        {uniqueIngredients.filter((ingredient) => {
                            return ingredient.toLowerCase().includes(searchIngredient.toLowerCase())
                        }).map((ingredient) => {
                            return (
                                <li key={`${ingredient}`}> <p>{ingredient}</p> </li>)
                        })
                        }
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
                        value={searchAppliance}
                        onChange={(event) => setSearchAppliance(event.target.value)}
                    />
                    <ul>
                        {uniqueAppliances.filter((appliance) => {
                            return appliance.toLowerCase().includes(searchAppliance.toLowerCase())
                        }).map((appliance) => {
                            return (
                            <li key={`${appliance}`}> <p>{appliance}</p> </li>)
                        })
                        }
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
                        value={searchUstensil}
                        onChange={(event) => setSearchUstensil(event.target.value)}
                    />
                    <ul>
                        { uniqueUstensils.filter((ustensil) => {
                                return ustensil.toLowerCase().includes(searchUstensil.toLowerCase())
                            }).map((ustensil) => {
                                return (
                                    <li key={`${ustensil}`}> <p>{ustensil}</p></li>)
                            })
                        }
                    </ul>
                </div>
            </details>
            <p className={styles.count}>{recipes.length} recettes</p>
        </section>
    );
}