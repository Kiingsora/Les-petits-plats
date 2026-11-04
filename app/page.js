"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Cards from "@/components/Card/Card";
import Filters from "@/components/Filters/Filters";
import Footer from "@/components/Footer/Footer";
import recipes from "@/app/data/recipes.json";

export default function Home() {

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  const [selectedUstensils, setSelectedUstensils] = useState([]);

  return (
    <main >
      <Header />
      <Filters
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients} 
        selectedAppliances={selectedAppliances}
        setSelectedAppliances={setSelectedAppliances}
        selectedUstensils={selectedUstensils}
        setSelectedUstensils={setSelectedUstensils}
      />
      <div className={styles.cardsGrid}>
        {recipes.map((recipe) => (
          <Cards key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
