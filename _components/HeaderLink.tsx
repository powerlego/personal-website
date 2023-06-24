"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function HeaderLink({ href, children, className }: HeaderLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${isActive ? "text-blue-800 dark:text-blue-300" : "text-black dark:text-white"} font-bold text-lg ${
        className ?? ""
      }`}
    >
      {children}
    </Link>
  );
}
