import { config } from "@/lib/config";
import { Icons } from "@/lib/icons";
import Link from "next/link";

export default function Page() {
  return (
    <section className="gap-2 flex flex-col">
      {config.welcome && <h2>{config.welcome}</h2>}
      {typeof config.bio === "string" ? <p>{config.bio}</p> : config.bio}
      <p></p>
      <div className="flex flex-col gap-2">
        <p className="text-lg">Recent Projects</p>
        {config.projects?.map((project, idx) => (
          <div className="border-l-2 border-neutral-600 px-2" key={idx}>
            <Link
              href={project.link ?? "#"}
              className="underline"
              target="_blank"
            >
              {project.title}
            </Link>
            <p className="text-neutral-400">{project.description}</p>
            <div className="flex items-center gap-2">
              {project.stackIcons?.map((icon) => (
                <Icons icon={icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
