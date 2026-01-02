import { Hero } from "@/components/sections/Hero"
import { PainMirror } from "@/components/sections/PainMirror"
import { ProblemReframe } from "@/components/sections/ProblemReframe"
import { Outcome } from "@/components/sections/Outcome"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Phases } from "@/components/sections/Phases"
import { Differentiation } from "@/components/sections/Differentiation"
import { Audience } from "@/components/sections/Audience"
import { Investment } from "@/components/sections/Investment"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PainMirror />
      <ProblemReframe />
      <Outcome />
      <HowItWorks />
      <Phases />
      <Differentiation />
      <Audience />
      <Investment />
      <FAQ />
      <FinalCTA />
      </div>
  )
}

export default App
