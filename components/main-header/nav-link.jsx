'use client'
import Link from "next/link";
import style from "@/components/main-header/nav-link.module.css";
import {usePathname} from "next/navigation";

export default function NavLink({href, children}) {
    const path = usePathname();

    return (
        <Link href={href}
              className={`${path.startsWith(href) ? style.active : undefined} ${style.link}`}>{children}</Link>
    )
}