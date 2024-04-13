import { config } from "@/lib/config";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-800 pb-2 flex gap-2 items-center justify-between">
      <p className="text-neutral-500">{config.name}</p>
      <nav>
        <ul className="flex items-center gap-2">
          {config.navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-neutral-700">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
