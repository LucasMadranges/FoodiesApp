import style from "./page.module.css"
import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
    return (
        <>
            <header className={style.header}>
                <div className={style.slideshow}>
                    <ImageSlideshow/>
                </div>
                <div>
                    <div className={style.hero}>
                        <h1>NextLevel Food for NextLevel Foodies</h1>
                        <p>Taste & share food from all over the world.</p>
                    </div>
                    <div className={style.cta}>
                        <Link href="community">Join the Community</Link>
                        <Link href="meals">Explore Meals</Link>
                    </div>
                </div>
            </header>
            <main>
                <section className={style.section}>
                    <h2>How it works</h2>
                    <p>
                        NextLevel Food is a platform for foodies to share their favorite recipes with the wolrD. It's a
                        place to discover new dishes, and to connect with other food lovers.
                    </p>
                    <p>
                        NextLevel Food is a place to discover new dishes, and to connect with other food lovers.
                    </p>
                </section>
            </main>
        </>
    );
}

/*<main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                Time to get started!
            </h1>
            <p><Link href="/meals">Meals</Link></p>
            <p><Link href="/meals/share">Share meal</Link></p>
            <p><Link href="/community">Community</Link></p>
        </main>*/