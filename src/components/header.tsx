"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="flex items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Link href={"/"}>AiRT COLLECTION</Link>
    </header>
  );
}
