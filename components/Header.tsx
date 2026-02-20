'use client';
import Link from "next/link";
import Image from "next/image";
import {usePathname } from "next/navigation";
import {cn} from "@/lib/utils";

const Header = () => {
    const Pathname = usePathname();
    return (
        <header>
            <div className="main-cotainer inner">
             <Link href = "/">
                <Image src = "/logo.svg" alt = "Coinpulse logo" width={132} height={40} />
             </Link>
             <nav>
                 <Link href ='/' className={cn('nav-link',{'is-active':Pathname ==='/', 'is-home':true})}>Home</Link>

                 <p>Search Model</p>

                 <Link href ="/coins"  className={cn('nav-link', {'is-active':Pathname === '/coins',})}>All Coin</Link>

             </nav>
            </div>
        </header>
    )
}
export default Header
