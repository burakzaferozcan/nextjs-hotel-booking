import { UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function UserToggle() {
  return (
    <Link href={"/auth/login"}>
      <UserIcon className="text-white dark:text-white" />
    </Link>
  );
}

export default UserToggle;
