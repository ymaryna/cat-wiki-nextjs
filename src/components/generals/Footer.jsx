import logo from "@/assets/img/CatwikiLogo.svg";
import Image from "next/image";

function Footer() {
    return (
        <footer className="section footer d-flex justify-content-between align-items-center">
            <Image src={logo} alt="logo"/>
            <p>© created by ymaryna - devChallenge.io 2022</p>
        </footer>
    )
}

export default Footer