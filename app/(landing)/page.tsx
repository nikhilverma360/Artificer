import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { UserButton } from "@clerk/nextjs";
const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
      <LandingHero />
    </div>
   );
}
 
export default LandingPage;
