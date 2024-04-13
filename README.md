# Portfolio

Ultra minimal one config portfolio starter.

## Includes

- NextJS 14
- Tailwind V4
- Gest Font
- [Loglib web analytics](https://logilb.io)

## How to use

Clone the repo

```shell
git clone https://github.com/Bekacru/u-portfolio
```

Change the config in `lib/config.tsx` to your own

```tsx
export const config = {
  name: "Your Name",
  welcome: "Welcome to my portfolio",
  bio: "I am a developer",
  social: {
    github: "username",
  },
  email: "your@email.com",
  project: [
    {
      name: "Project Name",
      description: "Project Description",
      link: "https://project.link",
      //if you need more icons, add them inside `lib/icons.tsx`
      stackIcons: ["nextJs"],
    },
  ],
  // Go to https://loglib.io to get your loglib id
  analytics: "YOUR_LOGLIB_ID",
};
```

Install the dependencies

```shell
pnpm install
```

Run the development server

```shell
pnpm dev
```

Deploy to [Vercel](https://vercel.com)

- Create a new project on Vercel
- Connect the repo
- Deploy
