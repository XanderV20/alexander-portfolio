import { About } from "../components/About"
import { Navbar } from "../components/Navbar"
import { Projects } from "../components/Projects"
import "../components/components.css"


export const Home = () => {
    return (
        <div className="home">
            <Navbar />
            
            <About />

            <Projects />

        </div>
    )
}