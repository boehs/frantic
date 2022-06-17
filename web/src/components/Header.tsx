import { Link } from "solid-meta";
import Frantic from "./Frantic";
import "./Header.scss"

export default function Header() {
    return (
    <>
        <Link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <Link href="https://fonts.googleapis.com/css2?family=Amaranth:wght@700&display=swap" rel="stylesheet"/>
        <header>
            <a href="/"><h1><Frantic/></h1></a>
        </header>
    </>
    )
}