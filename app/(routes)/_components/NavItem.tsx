import Link from "next/link";
import React from "react";
interface NavItemProps {
  title: string;
  url: string;
}
function NavItem({ title, url }: NavItemProps) {
  return (
    <Link href={url}>
      <div className="text-mydark1 dark:text-white cursor-pointer">{title}</div>
    </Link>
  );
}

export default NavItem;
