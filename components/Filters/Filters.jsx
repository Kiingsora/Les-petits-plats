"use client"
import recipes from "@/app/data/recipes.json";
import styles from "./Filters.module.css"
import { useState } from "react"

export default function Filters({
    selectedIngredients,
    setSelectedIngredients,
    selectedAppliances,
    setSelectedAppliances,
    selectedUstensils,
    setSelectedUstensils
}) {
    // Prépare la liste des ingrédients ; minuscules et trim évitent les différences de casse et d'espaces.
    const ingredient = recipes.flatMap((recipe) => {
        return recipe.ingredients.map((ingredient) => {
            return ingredient.ingredient.toLowerCase().trim();
        })
    })
    // Prépare la liste des appareils à partir de l'appareil indiqué dans chaque recette.
    const appliance = recipes.map((recipe) => {
        return recipe.appliance.toLowerCase().trim();
    })

    // Prépare une seule liste d'ustensiles en regroupant ceux de toutes les recettes.
    const ustensil = recipes.flatMap((recipe) => {
        return recipe.ustensils.map((ustensil) => {
            return ustensil.toLowerCase().trim();
        })
    })

    // création d'un nouveau tableau sans les doublons.
    const uniqueIngredients = [...new Set(ingredient)];
    const uniqueAppliances = [...new Set(appliance)];
    const uniqueUstensils = [...new Set(ustensil)];

    // useState mémorise la saisie de chaque champ pour actualiser les choix proposés pendant la recherche.
    const [searchIngredient, setSearchIngredient] = useState("");
    const [searchAppliance, setSearchAppliance] = useState("");
    const [searchUstensil, setSearchUstensil] = useState("");


    return (
        <section className={styles.filters}>
            <div className={styles.menus}>
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
                            {/* affichage de la liste des ingrédients dans la liste déroulante et logique ingredient sélectionné*/}
                            {uniqueIngredients.filter((ingredient) => {
                                return ingredient.toLowerCase().includes(searchIngredient.toLowerCase())
                                    && !selectedIngredients.includes(ingredient)
                            }).map((ingredient) => {
                                return (
                                    <li key={`${ingredient}`}>
                                        <button type="button" onClick={() => setSelectedIngredients([...selectedIngredients, ingredient])}>
                                            {ingredient}
                                        </button>
                                    </li>)
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
                                    && !selectedAppliances.includes(appliance)
                            }).map((appliance) => {
                                return (
                                    <li key={`${appliance}`}>
                                        <button type="button" onClick={() => setSelectedAppliances([...selectedAppliances, appliance])}>
                                            {appliance}
                                        </button>
                                    </li>)
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
                            {uniqueUstensils.filter((ustensil) => {
                                return ustensil.toLowerCase().includes(searchUstensil.toLowerCase())
                                    && !selectedUstensils.includes(ustensil)
                            }).map((ustensil) => {
                                return (
                                    <li key={`${ustensil}`}>
                                        <button type="button" onClick={() => setSelectedUstensils([...selectedUstensils, ustensil])}>
                                            {ustensil}
                                        </button>
                                    </li>)
                            })
                            }
                        </ul>
                    </div>
                </details>
            </div>
            {/* Indique le nombre total de recettes ; le filtrage des cartes reste à connecter aux sélections. */}
            <p className={styles.count}>{recipes.length} recettes</p>
            {(selectedIngredients.length > 0 || selectedAppliances.length > 0 || selectedUstensils.length > 0) && (
                <div className={styles.selectedFilters} aria-label="Filtres sélectionnés">
                    {selectedIngredients.map((ingredient) => (
                        <div className={styles.tag} key={`ingredient-${ingredient}`}>
                            <span>{ingredient}</span>
                            {/* Retire l'ingrédient des sélections : son tag disparaît et il revient dans le menu. */}
                            <button
                                type="button"
                                aria-label={`Retirer l’ingrédient ${ingredient}`}
                                onClick={() => setSelectedIngredients(selectedIngredients.filter((selectedIngredient) => selectedIngredient !== ingredient))}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    {selectedAppliances.map((appliance) => (
                        <div className={styles.tag} key={`appliance-${appliance}`}>
                            <span>{appliance}</span>
                            <button
                                type="button"
                                aria-label={`Retirer l’appareil ${appliance}`}
                                onClick={() => setSelectedAppliances(selectedAppliances.filter((selectedAppliance) => selectedAppliance !== appliance))}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    {selectedUstensils.map((ustensil) => (
                        <div className={styles.tag} key={`ustensil-${ustensil}`}>
                            <span>{ustensil}</span>
                            <button
                                type="button"
                                aria-label={`Retirer l’ustensile ${ustensil}`}
                                onClick={() => setSelectedUstensils(selectedUstensils.filter((selectedUstensil) => selectedUstensil !== ustensil))}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
