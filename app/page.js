import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Cards from "@/components/Card";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import recipes from "@/app/data/recipes.json";

export default function Home() {
  return (
    <main >
      <Header />
      <Filters />
      <section className={styles.cardsGrid}>
        {recipes.map((recipe) => (
          <Cards key={recipe.id} recipe={recipe} />
        ))}
      </section>
      <Footer />
    </main>
  );
}
