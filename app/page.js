import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Cards from "@/components/Card/Card";
import Filters from "@/components/Filters/Filters";
import Footer from "@/components/Footer/Footer";
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
