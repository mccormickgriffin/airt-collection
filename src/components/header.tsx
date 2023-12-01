"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Link href={"/"}>AiRT COLLECTION</Link>
    </header>
  );
}
