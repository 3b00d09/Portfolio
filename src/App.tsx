import ProjectCard from "./components/ProjectCard";

function App() {
  
  return (
    <div className="flex flex-col bg-background min-h-[100dvh] text-text">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <p>icon</p>
      </header>

      <main className="flex-1 ">
        <section className="w-full 2xl:max-w-[1536px] py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <img
              src="src/assets/personal-image.jpg"
              alt="Personal Picture"
              className="mx-auto aspect-[2/3] overflow-hidden rounded-xl object-contain object-center"
              width={300}
              height={450}
            />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Abdullah Atiya
              </h1>
              <h2 className="md:text-xl font-light text-text-secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                atque, quaerat at corrupti repellat natus quam. Neque quasi
                obcaecati error. Voluptate, fuga voluptatibus sit velit
                necessitatibus ex odio magnam id.
              </h2>
              <div className="flex gap-2 items-center">
                <a
                  className="bg-secondary rounded-lg p-2 text-xl flex w-fit gap-2 items-center font-light"
                  href="https://github.com/3b00d09"
                  target="_blank"
                >
                  Github
                  <img
                    src="src/assets/github-svg.svg"
                    alt="Github Logo"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  className="bg-secondary rounded-lg p-2 text-xl flex w-fit gap-2 items-center font-light"
                  href="https://www.linkedin.com/in/abdullah-atiya-16242629b/"
                  target="_blank"
                >
                  LinkedIn
                  <img
                    src="src/assets/linkedin-svg.svg"
                    alt="Github Logo"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="px-4 md:px-6 flex flex-col gap-4">
            <h2 className="space-y-4 text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Projects
            </h2>
            <p className="text-center md:text-xl font-light">
              Check out some of my web development works.
            </p>

            <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                name="Bookstore"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab facilis quam quis culpa qui, deserunt exercitationem ut labore quo laboriosam harum nisi, illum dolores molestiae modi commodi, pariatur debitis velit?"
                frameworks={["React", "TypeScript", "Tailwind CSS"]}
              />
              <ProjectCard
                name="3b0Movies"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab facilis quam quis culpa qui, deserunt exercitationem ut labore quo laboriosam harum nisi, illum dolores molestiae modi commodi, pariatur debitis velit?"
                frameworks={["Svelte", "JavaScript"]}
              />
              <ProjectCard
                name="Multimedia"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab facilis quam quis culpa qui, deserunt exercitationem ut labore quo laboriosam harum nisi, illum dolores molestiae modi commodi, pariatur debitis velit?"
                frameworks={["Svelte", "TypeScript"]}
              />
              <ProjectCard
                name="Team-GPT"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab facilis quam quis culpa qui, deserunt exercitationem ut labore quo laboriosam harum nisi, illum dolores molestiae modi commodi, pariatur debitis velit?"
                frameworks={["Next JS", "TypeScript"]}
              />
              <ProjectCard
                name="Auction"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab facilis quam quis culpa qui, deserunt exercitationem ut labore quo laboriosam harum nisi, illum dolores molestiae modi commodi, pariatur debitis velit?"
                frameworks={["Django"]}
              />
              <ProjectCard
                name="Chat App"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab facilis quam quis culpa qui, deserunt exercitationem ut labore quo laboriosam harum nisi, illum dolores molestiae modi commodi, pariatur debitis velit?"
                frameworks={["Golang", "HTMX", "Tailwind CSS"]}
              />
            </div>
          </div>
        </section>

        <section className="bg-background">
          <h2 className="tracking-tighter text-4xl sm:text-5xl md:text-6xl font-bold text-center space-y-4">
            Educational Qualifications
          </h2>
          <ul className="flex-1 text-center flex flex-col gap-2 mt-4">
            <li></li>
            <li>HNC Computing: Software Development</li>
            <li>SQA Higher Maths</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App
