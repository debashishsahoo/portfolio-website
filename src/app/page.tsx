import Hero from './components/Hero/Hero'
import Experience from './components/SummarySection/Experience'
import Projects from './components/SummarySection/Projects'
import { experience } from "./data/experience";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <main className="flex bg-[#121010]">
      <div className="container px-12 py-150 mx-auto">
        <Hero />
        <Experience experience={experience}/>
        <Projects projects={projects}/>
      </div>
    </main>
  )
}