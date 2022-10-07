import Hero from "./components/homepage/Hero";
import Projects from "./components/homepage/Projects";
import TeckStack from "./components/homepage/TeckStack";

export default function Home() {

  return (
    <div className="container mx-auto max-w-6xl px-4">
     <Hero />
     <TeckStack />
     <Projects />
    </div>
  )
}
