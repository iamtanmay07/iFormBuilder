
import React from "react";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import {
//   AnimatePresence,
//   MotionValue,
//   motion,
//   useMotionValue,
//   useTransform,
// } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {};

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Sign out</Button>
    </form>
  );
}


const Header = async (props: Props) => {
  // const links = [
  //   {
  //     path: "/",
  //     name: "home",
  //   },
  //   {
  //     path: "/projects",
  //     name: "projects",
  //   },
  //   {
  //     path: "/contact",
  //     name: "contact",
  //   },
  // ];
  // const pathname = usePathname();
  // const MotionLink = motion(Link);

  // const mapRange = (
  //   inputLower: number,
  //   inputUpper: number,
  //   outputLower: number,
  //   outputUpper: number
  // ) => {
  //   const INPUT_RANGE = inputUpper - inputLower;
  //   const OUTPUT_RANGE = outputUpper - outputLower;

  //   return (value: number) =>
  //     outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  // };

  // const setTransform = (
  //   item: HTMLElement & EventTarget,
  //   event: React.PointerEvent,
  //   x: MotionValue,
  //   y: MotionValue
  // ) => {
  //   const bounds = item.getBoundingClientRect();
  //   const relativeX = event.clientX - bounds.left;
  //   const relativeY = event.clientY - bounds.top;
  //   const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
  //   const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
  //   x.set(xRange * 10);
  //   y.set(yRange * 10);
  //   console.log(xRange);
  // };
  
  const session = await auth();

  return (
    <header className="sticky bottom-1 ">
      {" "}
      <nav className="sticky bg-[#030014] border-gray-200 px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/">
            <Image src="/logo.png" alt="logo" height={55} width={180} className="mx-[40px] mt-[10px]"/>
          </a>
          <div className="mr-[30px]">
            {session?.user ? (
              <div className="flex items-center gap-4">
                <Link href="/view-forms">
                  <Button variant="outline" className="py-2 bg-transparent text-center text-white cursor-pointer rounded-lg max-w-[200px]">Dashboard</Button>
                </Link>
                {session.user.name && session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <SignOut />
              </div>
            ) : (
              <Link href="/api/auth/signin">
                <Button variant="link">Sign in</Button>
              </Link>
            )}
          </div>
        </div>
        {/* <ul className="flex gap-12">
        <AnimatePresence>
          {links.map((link) => {
            const x = useMotionValue(0)
            const y = useMotionValue(0)
            const textX = useTransform(x, (latest) => latest * 0.5)
            const textY = useTransform(y, (latest) => latest * 0.5)
            return (
              <motion.li
                onPointerMove={(event) => {
                  const item = event.currentTarget
                  setTransform(item, event, x, y)
                }}
                key={link.path}
                onPointerLeave={(event) => {
                  x.set(0)
                  y.set(0)
                }}
                style={{ x, y }}
              >
                <MotionLink
                  className={cn(
                    "font-medium relative rounded-md text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-200",
                    pathname === link.path ? "bg-slate-300" : ""
                  )}
                  href={link.path}
                >
                  <motion.span
                    style={{ x: textX, y: textY }}
                    className="z-10 relative"
                  >
                    {link.name}
                  </motion.span>
                  {pathname === link.path ? (
                    <motion.div
                      transition={{ type: "spring" }}
                      layoutId="underline"
                      className="absolute w-full h-full rounded-md left-0 bottom-0 bg-blue-300"
                    ></motion.div>
                  ) : null}
                </MotionLink>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul> */}
      </nav>
    </header>
  );
};

export default Header;
