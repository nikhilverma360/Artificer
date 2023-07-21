"use client";

import { Press_Start_2P } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const LandingNavbar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <h1
          className={cn(
            "text-3xl font-bold  bg-clip-text  text-transparent  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-fuchsia-600 to-orange-400 animate-text",
            font.className
          )}
        >
          Artificer 
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={"/sign-up"}>
          <Button
            variant="outline"
            className={cn("rounded-full  ", font.className)}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
//Montserrat
