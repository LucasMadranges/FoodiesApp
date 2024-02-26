import Link from "next/link";

import Logo from "@/app/icon.png"
import style from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground/>

            <header className={style.header}>
                <Link href="/public"
                      className={style.logo}>
                    <Image src={Logo.src}
                           alt="A place with food on it"
                           priority
                           width={80}
                           height={80}/>
                    NextLevel Food
                </Link>

                <nav className={style.nav}>
                    <ul>
                        <li>
                            <NavLink href='/meals'>
                                Browse Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}