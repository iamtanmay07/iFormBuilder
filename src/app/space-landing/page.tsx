import Hero from "./comps/Hero";
import LandingPage from "../landing-page";
import Process from "./process";
export default function Landing() {
    return (
      <main className="h-full w-full">
        <div className="flex flex-col gap-10">
          <Hero />
          <LandingPage/>
          <Process/>
        </div>
      </main>
    );
  }