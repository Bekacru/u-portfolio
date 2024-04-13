import { IconsList } from "./icons";

interface IConfig {
  /**
   * Base URL of your website.
   */
  baseUrl: string;
  /**
   * Social media links.
   */
  social: {
    /**
     * GitHub username.
     */
    github: string;
    /**
     * X (twitter) username.
     */
    x?: string;
    /**
     * Telegram username.
     */
    telegram?: string;
  };
  /**
   * Full name.
   */
  name: string;
  /**
   * Welcome message. This will be displayed on the
   * home page.
   */
  welcome?: string;
  /**
   * About you. This can be a string or JSX element.
   */
  bio: string | JSX.Element;
  /**
   * Contact email.
   */
  email: string;
  /**
   * Navigation items. This will be displayed in the
   * header.
   */
  navItems: {
    name: string;
    href: string;
  }[];
  /**
   * Projects that you want to showcase.
   */
  projects?: {
    title: string;
    description: string;
    link?: string;
    stackIcons?: (keyof typeof IconsList)[];
  }[];
  /**
   * Link to your CV. If you put your CV in the public
   * folder, you can just start with "/". For example,
   * if your CV is in the root of the public folder, you
   * can just put "/cv.pdf".
   */
  cv: string;
  /**
   * Metadata for the website.
   */
  metadata: {
    /**
     * Default title of the website.
     */
    title: string;
    /**
     * Description of the website.
     */
    description: string;
    /**
     * Open Graph image link. If you start with "/" it
     * will be appended to the base URL.
     */
    ogImage?: string;
    /**
     * Favicon link. If you start with "/" it will be
     * appended to the base URL.
     */
    favicon?: string;
  };
  /**
   * for analytics tracking we use loglib. (https:/
   * loglib.io). Create free account and get the
   * loglibId from the dashboard.
   */
  analytics?: string;
}

export const config: IConfig = {
  baseUrl:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASE_URL ?? ""
      : "http://localhost:3000",
  name: "Your Name",
  welcome: "Hey there 👋🏽",
  bio: <p>I'm Some one. I'm a software engineer and I love building things.</p>,
  social: {
    github: "",
    x: "",
    telegram: "",
  },
  email: "",
  navItems: [
    {
      name: "_home",
      href: "/",
    },
  ],
  projects: [
    {
      title: "loglib",
      description: "Privacy first, open source web analytics.",
      link: "https://loglib.io",
    },
  ],
  cv: "/cv.pdf",
  metadata: {
    title: "Your Name",
    description: "Personal website of Your Name",
  },
};
