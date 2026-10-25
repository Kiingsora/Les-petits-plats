import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image src="/JSON_recipes/Les_petits_plats.png" alt="Logo Les Petits Plats" width={181} height={26} />
            <h1>DECOUVREZ NOS RECETTES
                DU QUOTIDIEN, SIMPLES ET DELICIEUSES</h1>
            <input type="text" placeholder="Rechercher une recette, un ingrédient..." />
            <button>O</button>
        </header>
    );
}
