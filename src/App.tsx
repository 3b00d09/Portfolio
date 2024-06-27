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
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="px-4 md:px-6 flex flex-col gap-4">
            <h2 className="space-y-4 text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Projects
            </h2>
            <p className="text-center md:text-xl font-light">Check out some of my web development works.</p>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default App
