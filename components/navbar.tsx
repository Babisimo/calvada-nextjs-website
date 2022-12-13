import Link from "next/link"
import navStyles from "../components/navbar.module.css"

export default function Navbar() {
    return(
        <>
            <nav className={navStyles.nav}>
                <Link href='/'>HomeImg</Link>
                <ul className={navStyles.ul}>
                    <Link href='/'>Home</Link>
                    <Link href='/main/cities'>Cities</Link>
                    <Link href='/main/counties'>Counties</Link>
                    <Link href='/main/links'>Links</Link>
                    <Link href='/main/counties'>Contact(fix)</Link>
                </ul>
            </nav>
        </>
    )
};
