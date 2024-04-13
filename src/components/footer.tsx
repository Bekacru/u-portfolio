import { config } from "@/lib/config";
import { Icons } from "@/lib/icons";
import Link from "next/link";

const social = config.social;

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-2 flex justify-between items-center">
      <Link href={config.cv} download target="_blank">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m10-5.75a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V7a.75.75 0 0 1 .75-.75m-4 10a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="text-sm">Download CV</p>
        </div>
      </Link>
      <ul className="font-sm  flex space-x-0 text-neutral-600 items-center space-x-2 space-y-0">
        {social.github && (
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-300"
              rel="noopener noreferrer"
              target="_blank"
              href={`https://github.com/${social.github}`}
            >
              <Icons icon="github" />
            </a>
          </li>
        )}
        {social.x && (
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-300"
              rel="noopener noreferrer"
              target="_blank"
              href={`https:/x.com/${social.x}`}
            >
              <Icons icon="x" />
            </a>
          </li>
        )}
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-300"
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:${config.email}`}
          >
            <Icons icon="email" />
          </a>
        </li>
        {social.telegram && (
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-300"
              rel="noopener noreferrer"
              target="_blank"
              href={`https://t.me/${social.telegram}`}
            >
              <Icons icon="email" />
            </a>
          </li>
        )}
      </ul>
    </footer>
  );
}
