"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface ImageVawesProps {
  myclassname?: string;
}
function ImageVawes({ myclassname }: ImageVawesProps) {
  const { theme } = useTheme();
  const [clientSideRendered, setClientSideRendered] = useState(false);
  useEffect(() => {
    setClientSideRendered(true);
  }, []);
  if (!clientSideRendered) {
    return null;
  }

  return (
    <>
      {theme === "light" && (
        <Image
          src="/white.png"
          alt="wawes"
          width={2000}
          height={62}
          className={`w-full lg:block ${myclassname}`}
        />
      )}
      {theme === "dark" && (
        <Image
          src="/dark.png"
          alt="wawes"
          width={2000}
          height={62}
          className={`w-full lg:block ${myclassname}`}
        />
      )}
    </>
  );
}

export default ImageVawes;
