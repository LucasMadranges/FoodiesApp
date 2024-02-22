import Link from "next/link";

import Logo from "@/app/icon.png"

export default function MainHeader() {
    return (
        <>
            <header>
                <Link href="">
                    <img src={Logo.src}
                         alt="A place with food on it"/>
                    NextLevel Food
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}