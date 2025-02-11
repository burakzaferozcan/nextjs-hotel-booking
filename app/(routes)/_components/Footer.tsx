import ImageVawes from "@/components/ImageVawes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Hotel } from "@/types/types";
import Image from "next/image";
import React from "react";
interface FooterProps {
  data: Hotel;
  loading: boolean;
}
function Footer({ data, loading }: FooterProps) {
  if (loading || (!loading && data.length === 0)) {
    return (
      <div className="relative text-white">
        <div className="z-10 absolute inset-0">
          <ImageVawes myclassname="absolute -top-5 transform rotate-180" />
          <div className="z-20 relative h-96">
            <Skeleton className="h-full w-full bg-slate-600" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative text-white">
      <div className="z-10 absolute inset-0">
        <ImageVawes myclassname="absolute -top-5 transform rotate-180" />
      </div>
      <div className="z-0 absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(/slider/1.jpeg)" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div className="z-20 relative">
        <div className="container mx-auto pt-24 pb-16 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Subcribe newsletter</h2>
            <p className="text-gray-400 mt-2">
              {data.summary.replace(/<\/?[^>]+(>|$)/g, "")}
            </p>
            <div className="mt-4 flex justify-center ml-auto">
              <Input
                placeholder="Your Email Address"
                className="max-w-lg"
              ></Input>
              <Button variant="mybutton">Subscribe</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cols Span 1*/}
            <div>
              <div className="w-24 py-4 px-3 rounded-xl bg-white">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, corporis dolores atque doloremque repellat eius quasi,
                voluptatem similique mollitia officia, minima distinctio fugiat
                obcaecati dignissimos totam dicta nisi deleniti ipsum eum iure
                quisquam! Dolore reiciendis vero nobis exercitationem minus rem
                quas labore perferendis voluptatibus blanditiis, voluptates
                eaque ipsa nisi ut!
              </p>
            </div>
            {/* Cols Span 2*/}
            <div>
              <h3 className="text-xl font-bold mb-4">Rooms</h3>
              <ul className="space-y-2">
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>{" "}
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>{" "}
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>{" "}
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>{" "}
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>
              </ul>
            </div>
            {/* Cols Span 3*/}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400 space-y-2">
                <span className="block"> {data.location}</span>
                <span className="block"> {data.contact_phone}</span>
                <span className="block">{data.contact_email}</span>
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400">© BZO</p>
            <p className="text-gray-400">
              Designed By{" "}
              <span className="text-yellow-500">Burak Zafer Özcan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
