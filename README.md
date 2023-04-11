# About

This is a project made by [Federico Tejedor Llorente](https://www.federicotllorente.com/) with [Next.js](https://nextjs.org/) ([React](https://reactjs.org/)), [TypeScript](https://www.typescriptlang.org/docs/) and [TailwindCSS](https://tailwindcss.com/), and it was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This platform uses the [SWAPI GraphQL API](https://studio.apollographql.com/public/star-wars-swapi/home?variant=current) for fetching the initial data. Then you can add/create, edit and delete planets as you want. This is stored in your browsers local storage, since the initial data is stored there after is firstly fetched to the Star Wars API.

You will see that the logic is organized in several folders like 'components', 'domain' and 'infra'. I tried to follow a DDD-ish architecture splitting the different types of functions into domiain-related ones (like the getPlanets function), infrastructure-related ones (like the GraphQL or Local Storage functions) and web/React components.

I did not implemented [Redux](https://redux.js.org/) in this case because I didn't find it really useful for this case since it was planned as a simple and quickly developed app/platform.

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
