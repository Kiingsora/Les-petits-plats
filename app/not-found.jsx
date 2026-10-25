import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import styles from "./page.module.css";

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <section className={styles.notFoundContent}>
                <Image
                    src="/JSON_recipes/lampos-aritonang-24gR_9lCdes-unsplash 1.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className={styles.notFoundBackground}
                />
                <Image
                    src="/logo-les-petits-plats-assiette.png"
                    alt="Les Petits Plats"
                    width={207}
                    height={26}
                    className={styles.notFoundLogo}
                />
                <h2>404 <span>:(</span></h2>
                <p>La page que vous demandez est introuvable.</p>
            </section>
            <Footer />
        </div>
    )
}
