import  { Card } from "../../core/components/card/card"
import { Counter } from "../../core/components/counter/counter"
import { Hero } from "../../core/components/hero/hero"
import { Info } from "../../core/components/info/info"
import { Start } from "../../core/components/start/start"

export const HomePage: React.FC = () => {
  
  return (
    <section role="region" aria-label="Home Page Section">
        <h2>Home Page</h2>
         <section className="center" data-testid="hero-section">
                <Hero />
                <Card className={['center']}>
                    <Start />
                    <Counter />
                </Card>
            </section>

            <section className="next-steps" data-testid="info-section">
                <Info />
            </section>


    </section>
  )
}

