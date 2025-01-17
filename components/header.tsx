import Image from "next/image"
import Logo from "@/public/images/logo_grupo_viseu_branco2.webp"
import MenuItem from "./menu-item"
import Link from "next/link"

export default function Header(){
  return(
    <header className="bg-slate-600 p-5">
      <div className="container m-auto flex justify-between items-center">
        <Link href="#">
          <Image
            src={Logo}
            alt="logo do grupo visel"
            width={120}/>
        </Link>
        <nav className="text-white hidden md:block">
          <ul className="hfe-nav-menu flex items-center gap-6">
            <MenuItem label="Home" href="#" />
            <MenuItem label="Sobre" href="#" />
            <MenuItem label="Serviços" href="#" />
            <MenuItem label="Viseu Global" href="#" />
            <MenuItem label="Indústria" href="#" />
            <MenuItem label="Contato" href="#" />
            <MenuItem label="Portal de Atendimento" href="#" target="_blank" rel="noopener noreferrer" />
          </ul>
        </nav>
      </div>
    </header>
  )
}