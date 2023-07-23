"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { Press_Start_2P } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Press_Start_2P({ weight: '400', subsets: ['latin'] });

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className={cn("text-white font-bold py-36 text-center space-y-5", font.className)}>
      <div className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl space-y-5 font-extrabold">
        <h1>Craft unique and style-consistent game</h1>
        <div className="text-transparent pt-8 bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-fuchsia-600 to-orange-400 animate-text">
          <TypewriterComponent
            options={{
              strings: [
                "Avatars",
                "Sprites",
                "Backgrounds",
                "UI elements"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400 pt-32">
        Create assets using AI 10x faster.
      </div>
      <div>
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
