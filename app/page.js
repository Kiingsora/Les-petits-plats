"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Cards from "@/components/Card/Card";
import Filters from "@/components/Filters/Filters";
import Footer from "@/components/Footer/Footer";
import recipes from "@/app/data/recipes.json";

export default function Home() {

  //FILTRE : Home mémorise les tags sélectionnés pour les partager entre les menus et le filtrage des cartes.
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  const [selectedUstensils, setSelectedUstensils] = useState([]);

  // HEADER :
  const [searchRecipe, setSearchRecipe] = useState("");

  // Uniformise les textes pour ignorer les majuscules et les accents.
  const normalizeText = (text) => {
    return text.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  const normalizedSearch = normalizeText(searchRecipe);

  // Examine chaque recette : true la conserve dans le nouveau tableau, false l'écarte.
  const filteredRecipes = recipes.filter((recipe) => {
    if (normalizedSearch.length >= 3) {
      const matchName = normalizeText(recipe.name).includes(normalizedSearch);
      const matchDescription = normalizeText(recipe.description).includes(normalizedSearch);

      let matchesIngredient = false;

      for (const ingredient of recipe.ingredients) {
        if (normalizeText(ingredient.ingredient).includes(normalizedSearch)) {
          matchesIngredient = true;
          break;
        }
      }
      // Aucun champ ne correspond : on écarte la recette.
      if (!matchName && !matchDescription && !matchesIngredient) {
        return false;
      }
    }

    // pas de tag sélectionné => toutes les recettes restent affichées.
    if (
      selectedIngredients.length === 0 &&
      selectedAppliances.length === 0 &&
      selectedUstensils.length === 0
    ) {

      return true;
    }

    // Prépare les noms des ingrédients 
    const recipeIngredients = recipe.ingredients.map((ingredient) => {
      return ingredient.ingredient.toLowerCase().trim();
    });

    // Vérifie chaque tag ingrédient 
    for (const selectedIngredient of selectedIngredients) {
      if (!recipeIngredients.includes(selectedIngredient)) {
        return false;
      }
    }

    // Compare l'appareil de cette recette à chaque tag appareil sélectionné.
    for (const selectedAppliance of selectedAppliances) {
      if (recipe.appliance.toLowerCase().trim() !== selectedAppliance) {
        return false;
      }
    }

    // Prépare les noms des ustensiles de cette recette pour les comparer aux tags.
    const recipeUstensils = recipe.ustensils.map((ustensil) => {
      return ustensil.toLowerCase().trim();
    });

    // Vérifie chaque tag ustensile : la recette doit posséder tous les ustensiles sélectionnés.
    for (const selectedUstensil of selectedUstensils) {
      if (!recipeUstensils.includes(selectedUstensil)) {
        return false;
      }
    }

    return true;
  });

  let message = null;

  if (filteredRecipes.length === 0) {
    message = "Aucune recette ne correspond à votre recherche.";
  }

  return (
    <main >
      <Header searchRecipe={searchRecipe} setSearchRecipe={setSearchRecipe} />
      {/* Transmet les sélections, leurs fonctions de mise à jour et le nombre de résultats aux menus. */}
      <Filters
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
        selectedAppliances={selectedAppliances}
        setSelectedAppliances={setSelectedAppliances}
        selectedUstensils={selectedUstensils}
        setSelectedUstensils={setSelectedUstensils}
        recipeCount={filteredRecipes.length}
        availableRecipes={filteredRecipes}
      />
      {message}
        <div className={styles.cardsGrid}>
          {filteredRecipes.map((recipe) => (
            <Cards key={recipe.id} recipe={recipe} />
          ))}
        </div>
        <Footer />
    </main>
  );
}
