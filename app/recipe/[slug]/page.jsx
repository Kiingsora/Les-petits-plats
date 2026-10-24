import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Recipes from "@/app/data/recipes.json";


export default async function Page({ params }) {
    const { slug } = await params;
    const recipe = Recipes.find((recipe) => recipe.slug === slug);

    return (

        <div className={styles.page}>
            <header className={styles.header}>
                <Link href="/" className={styles.logoLink}>
                    <img src={`/JSON_recipes/Les_petits_plats.png`} alt="Les Petits Plats — accueil" />
                </Link>
                <img className={styles.bannerImage} src={`/JSON_recipes/lampos-aritonang-24gR_9lCdes-unsplash 1.png`} alt="" />
            </header>
            <article className={styles.recipe}>
                <img className={styles.recipeImage} src={`/JSON_recipes/${recipe.image}`} alt={recipe.name} />
                <div className={styles.details}>
                    <h1>{recipe.name}</h1>
                    <section>
                        <h2>Temps de préparation</h2>
                        <p className={styles.time}>{recipe.time} min</p>
                    </section>
                    <section>
                        <h2>Ingrédients</h2>
                        <ul className={styles.ingredients}>
                            {recipe.ingredients.map((ingredient, index) => {
                                return (
                                    <li key={index}>
                                        <p>{ingredient.ingredient}</p>
                                        <p>{ingredient.quantity} {ingredient.unit}</p>
                                    </li>)
                            })}
                        </ul>
                    </section>
                    <section>
                        <h2>Ustensiles nécessaires</h2>
                        <ul className={styles.equipment}>
                            {recipe.ustensils.map((ustensile, index) => {
                                return (
                                    <li key={index}>
                                        <p>{ustensile}</p>
                                    </li>)
                            })}
                        </ul>
                    </section>
                    <section>
                        <h2>Appareils nécessaires</h2>
                        <ul className={styles.equipment}>
                            <li>
                                <p>{recipe.appliance}</p>
                            </li>
                        </ul>
                    </section>
                    <section className={styles.instructions}>
                        <h2>Recette</h2>
                        <ol>
                            <li>
                                Préparation des ingrédients :
                                <ul>
                                    <li>Coupez le poulet en morceaux.</li>
                                    <li>Épluchez et émincez l’oignon.</li>
                                    <li>Lavez et coupez le poivron rouge en lanières.</li>
                                </ul>
                            </li>
                            <li>
                                Cuisson du poulet :
                                <ul>
                                    <li>
                                        Dans une grande cocotte, faites chauffer l’huile d’olive à feu
                                        moyen.
                                    </li>
                                    <li>
                                        Ajoutez les morceaux de poulet et faites-les dorer de tous les
                                        côtés pendant environ 5 à 7 minutes.
                                    </li>
                                    <li>Retirez le poulet de la cocotte et réservez-le.</li>
                                </ul>
                            </li>
                            <li>
                                Cuisson des légumes :
                                <ul>
                                    <li>
                                        Dans la même cocotte, ajoutez l’oignon émincé et faites-le revenir
                                        jusqu’à ce qu’il soit translucide.
                                    </li>
                                    <li>
                                        Ajoutez les lanières de poivron rouge et faites-les revenir pendant
                                        3 à 4 minutes.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Ajout des autres ingrédients :
                                <ul>
                                    <li>Remettez les morceaux de poulet dans la cocotte.</li>
                                    <li>Ajoutez le coulis de tomate et mélangez bien.</li>
                                    <li>Versez le lait de coco et mélangez à nouveau.</li>
                                </ul>
                            </li>
                            <li>
                                Cuisson finale :
                                <ul>
                                    <li>
                                        Couvrez la cocotte et laissez mijoter à feu doux pendant environ
                                        30 à 40 minutes, jusqu’à ce que le poulet soit bien cuit et la
                                        sauce épaissie.
                                    </li>
                                    <li>
                                        Remuez de temps en temps pour vérifier que la sauce n’attache pas
                                        au fond de la cocotte.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Service :
                                <ul>
                                    <li>
                                        Servez le poulet coco bien chaud, accompagné de riz basmati ou de
                                        riz créole pour un repas typiquement réunionnais.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </section>
                </div>
            </article>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>

    )
}
