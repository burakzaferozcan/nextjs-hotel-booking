import Link from "next/link";
import React from "react";
interface NavItemProps {
  title: string;
  url: string;
}
function NavItem({ title, url }: NavItemProps) {
  return (
    <Link href={url}>
      <span className="cursor-pointer font-bold lg:text-white">{title}</span>
    </Link>
  );
}

export default NavItem;
