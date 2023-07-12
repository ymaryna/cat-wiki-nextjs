import Link from "next/link";
import { logo } from "../../assets";
import Image from "next/image";

export default function Navbar() {
    return (
        <section className="section logo">
            <Link href="/">
                <Image src={logo} alt="logo"/>
            </Link>
        </section>
    )
}