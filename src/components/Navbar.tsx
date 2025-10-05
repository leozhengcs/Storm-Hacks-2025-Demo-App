"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isActive = (p: string) => pathname === p;

  return (
    <nav className="nav">
      <Link href="/" className="brand">Sunrise Café</Link>
      <Link href="/" className={isActive("/") ? "active" : ""}>Home</Link>
      <Link href="/menu" className={isActive("/menu") ? "active" : ""}>Menu</Link>
      <Link href="/order" className={isActive("/order") ? "active" : ""}>Order Online</Link>
    </nav>
  );
}
