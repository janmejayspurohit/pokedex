### `Deployed on Vercel`
Open [https://jsp-pokedex.vercel.app/](https://jsp-pokedex.vercel.app/) to view it in the browser.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Basic Setup for NextJS & Tailwind CSS

```bash
npx create-next-app
npm install --save-dev tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init
```

Create ~/postcss.config.js and insert:

```bash
module.exports = {
  plugins: ['tailwindcss', 'postcss-preset-env'],
}
```

Next, delete ~/Home.module.css and in ~/styles/global.css insert:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
