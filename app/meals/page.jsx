import style from '@/components/meals/page.module.css'
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";
import LoadingOut from "@/app/meals/loading-out";

async function Meals() {
    const meals = await getMeals();

    return (
        <MealsGrid meals={meals}/>
    )
}

export default function MealsPage() {

    return (
        <>
            <header className={style.header}>
                <h1>
                    Delicious meals, created <span className={style.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={style.cta}>
                    <Link href="/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={style.main}>
                <Suspense fallback={<LoadingOut/>}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    )
}