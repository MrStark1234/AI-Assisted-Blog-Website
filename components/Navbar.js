"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20);

    setTimeout(() => {
      setProgress(40);
    }, 200);

    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, []);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b border-black/20 z-10">
      <LoadingBar
        color="#AD46FF"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between  items-center">
        <Link href={"/"} className=" text-lg font-bold">
          StarkBlog
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <div>
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Signup
            </Button>
            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>☰</SheetTrigger>
            <SheetContent className="  shadow-lg text-center">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold my-4">
                  StarkBlog
                </SheetTitle>
                <SheetDescription>
                  <div className=" flex flex-col gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <div className="flex items-center justify-center">
                      <Button className="mx-1 text-xs" variant="outline">
                        Login
                      </Button>
                      <Button className="mx-1 text-xs" variant="outline">
                        Signup
                      </Button>
                      <ModeToggle />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
