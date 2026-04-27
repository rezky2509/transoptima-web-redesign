"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                {/* nexus<span className="logo-dot"></span>fleet */}
                {/* Official Image */}
                <Image src="/transoptima.jpg" alt="Transoptima Logo" height={50} width={100} />
            </div>
            <div className="nav-links">
                <Link href="/#fleet" scroll={true} className="nav-item" style={{ color: '#000000' }}>Fleet</Link>
                {/* {/* <HashLink href="#" className="nav-item" style={{ color: '#000000' }}>E-Hail Partners</HashLink> */}
                <Link href="https://transoptimaperkasa.id/berita" className="nav-item" style={{ color: '#000000' }}>Berita</Link>
            </div>
        </nav>
    );
}
