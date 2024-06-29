interface ProjectCardProps {
    name: string;
    description: string;
    frameworks: string[];
}

export default function ProjectCard({ name, description, frameworks }: ProjectCardProps) {

    const frameworkToSvg = new Map<string, string>([
      ["Next JS", "src/assets/nextjs-svg.svg"],
      ["React", "src/assets/react-svg.svg"],
      ["Svelte", "src/assets/svelte-svg.svg"],
      ["Django", "src/assets/django-svg.svg"],
      ["JavaScript", "src/assets/js-svg.svg"],
      ["TypeScript", "src/assets/ts-svg.svg"],
      ["Golang", "src/assets/go-svg.svg"],
      ["HTMX", "src/assets/htmx-svg.svg"],
      ["Tailwind CSS", "src/assets/tailwind-svg.svg"],
    ]);

    return (
      <div className="bg-background rounded-xl p-4">
        <div className="flex justify-center flex-wrap gap-2 ">
          {frameworks.map((framework, index) => (
            <span
              key={index}
              className="bg-background px-2 py-1 rounded-lg flex items-center gap-2"
            >
              {framework}
              <img
                src={frameworkToSvg.get(framework)}
                alt={`${framework} Logo`}
                className="w-10 h-10"
              />
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
    );
}