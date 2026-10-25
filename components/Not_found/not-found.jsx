import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Image from "next/image";

export default function NotFound() {
    return (
        <div>
            <Image src={`/JSON_recipes/${recipe.image}`} alt={recipe.name} width={400} height={253} />
            <Header />
            <h2>404 :(</h2>
            <p>La page que vous demandez est introuvable.</p>
            <Footer />
        </div>
    )
}
