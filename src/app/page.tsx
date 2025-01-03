import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <div className={"relative"}>
      <div></div>
      <div
        className={
          "mx-auto lg:mx-20 min-h-screen max-w-screen px-12 py-12 font-sans md:px-12 lg:py-0"
        }
      >
        <div className={"lg:flex lg:justify-between lg:gap-4"}>
          <Header />
          <main className="pt-24 lg:w-[70%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
